import React from "react";
import "../App.css";

function Square({ chooseSquare, val }) {
    return (
        <div className="square" onClick={chooseSquare}>
            {val}
        </div>
    );   
}

export default Square;