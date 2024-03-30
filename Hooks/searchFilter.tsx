import { useCallback, useEffect, useMemo, useState } from "react"

const SearchFilter = (props:any) => {
    let responseData = props.records
    const [records, setRecords] = useState<any>(props.records)
    const [fetched, setFetched] = useState<boolean>(false)
    
    useEffect(() => {
       
        const intervalFunction = () => {
            // Check the condition
              setRecords(props.records)
              filterData('')
              clearInterval(intervalId);
           };

          const intervalId = setTimeout(intervalFunction, 1000);
        
    }, [props.records])
    
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
    }
    // filterData('')
    return(
        <>
            <input type="text" className="form-control" placeholder="Search..." onChange={queryChangeHandler} />
        </>
    )
}

export default SearchFilter