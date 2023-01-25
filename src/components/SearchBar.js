import React from "react";

const SearchBar = (props) => {
    return (
        <input
            name='search'
            value={props.searchInput}
            placeholder='Search'
            style={style.input}
            required
        ></input>
    );
};

export default SearchBar;

const style = {
    searchCont: {
        display: "inline-block",
        // border: "1px solid red",
        margin: "0 auto",
        // marginTop: "5rem",
        // padding: "1rem",
    },

    input: {
        border: ".05rem solid grey",
        borderRadius: ".5rem",
        width: "10rem",
        backgroundColor: "antiqueWhite",
    },
};
