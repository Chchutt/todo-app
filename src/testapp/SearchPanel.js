import React from "react";

const SearchPanel = () =>{

    const searchText = 'type text'
    const searchStyle = {
        fontSize: '40px',
        border: '1px solid black'
    }
    return(
        <input placeholder={searchText}
        style={searchStyle}/>
    )
}

export default SearchPanel