function Suggestions({searchOptions , handleClick}) {
    return (
        <ul>
            {searchOptions && searchOptions.length ?
                searchOptions.map((item , index) => 
                    <li key={index} onClick={handleClick}>{item}</li>
                )
                :
                null
            }
        </ul>
        
    );
}

export default Suggestions;