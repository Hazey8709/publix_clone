import React from "react";
import { FaAngleDown, FaBars } from "react-icons/fa";

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
                <FaBars />
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
    secBarCont: {},
};
