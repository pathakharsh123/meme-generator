import React from "react";
import face from "../images/Troll Face.png"

const Header = () => {
    return (
        <div className="head">
            <div className="logo">
                <img src={face} className="face" />
                <h1 className="title">Meme Generator</h1>
            </div>
            <h1 className="sub-title">React course-Project 3</h1>
        </div>
    )
}

export default Header