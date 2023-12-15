const TitleCase = (props:any) => {
    const toTitleCase = (inputTest:string) => {
        return inputTest?.replace(/\w\S*/g, (word) => {
            return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
        });
    };
    
    const titleCaseText = toTitleCase(props.text);
    
    return <div>{titleCaseText}</div>;
    
}

export default TitleCase