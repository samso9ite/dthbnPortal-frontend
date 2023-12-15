import { useEffect, useState } from "react"

const SearchFilter = (props:any) => {
    // console.log(props.records);
    let responseData = props.records
    
    const [records, setRecords] = useState<any>(props.records)
    useEffect(() => {
        setRecords(props.records)
        filterData('')
    }, [])
    // This function triggers on every query input by the user, capturing the query parameter in a variable
    const queryChangeHandler = (event:any) => {
        let searchQuery = event.target.value
        filterData(searchQuery)
    }

    // This function performs the filtering of the record based on the user query and then replacing the store data
    const filterData = (query:string) => {
        const filteredData = responseData?.filter((item:any) => 
            Object.values(item).some(value => 
                typeof value === 'string' && value.toLowerCase().includes(query.toLowerCase()) // This gets an array of values for each
                // object and then checking if the values contain the search query
            )
        )
        
        props.getfilteredData(filteredData)
        // This calls the updateRecord reducer to replace the record with the filtered data.
        // dispatch(searchActions.updateRecord(filteredData))
    }

    return(
        <>
            <input type="text" className="form-control" placeholder="Search..." onChange={queryChangeHandler} />
        </>
    )
}

export default SearchFilter