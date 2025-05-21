import React from "react";
import feelmelogo from "../Photos/feelmelogo.png"

function Logo() {
    return (
        <div className="logo w-32 h-32 bg-stone-200">
            <img src={feelmelogo} alt="feelme" />
        </div>
    )
}

export default Logo