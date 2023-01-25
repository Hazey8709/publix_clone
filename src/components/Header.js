import React from "react";
import { FaAngleDown, FaBars, FaShoppingCart } from "react-icons/fa";
import PIcon from "../images/publix-IconPic.png";
import SearchBar from "./SearchBar";

const Header = (props) => {
    return (
        <header style={style.cont}>
            <div style={style.header}>
                <button style={style.promotionMenu}>
                    <FaAngleDown />
                </button>
                <div style={style.promotion}>{props.promotionTitle}</div>
            </div>
            <div style={style.secBarCont}>
                <button style={style.navMenu}>
                    <FaBars />
                </button>
                <img src={PIcon} alt='icon-Pic' style={style.PIcon} />
                <div style={style.searchInputCont}>
                    <SearchBar />
                </div>
                <FaShoppingCart />
            </div>
        </header>
    );
};

export default Header;

//?  <div style={style.menuCont}></div>  */

const style = {
    cont: {},

    //!        First Bar
    header: {
        // border: ".1rem solid black",
        backgroundColor: "#fb0000",
        height: "2rem",
    },

    promotionMenu: {
        border: ".1rem solid white",
        float: "right",
        backgroundColor: "#d60202",
        color: "white",
        borderRadius: ".3rem",
        marginTop: ".2rem",
        marginRight: ".2rem",
        padding: ".2rem",
    },

    promotion: {
        textAlign: "center",
        paddingTop: ".3rem",
    },

    //!        Second Bar
    secBarCont: {
        border: ".05rem solid gray",
        height: "2.5rem",
    },

    navMenu: {
        border: "none",
        backgroundColor: "white",
        marginTop: ".8rem",
        Height: "2rem",
        width: "2rem",
    },

    PIcon: {
        Height: "1rem",
        width: "1rem",
    },

    searchInputCont: {
        display: "inline-block",
        margin: "0 auto",
        marginLeft: ".5rem",
        marginRight: "1rem",
    },
};
