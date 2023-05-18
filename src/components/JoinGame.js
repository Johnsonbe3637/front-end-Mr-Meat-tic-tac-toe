import React, { useState } from "react";
import Game from "./Game";

function JoinGame() {
    const [rivalUsername, setRivalUsername] = useState("");
    
    
    return (
        <>
            (
            <div className="joinGame">
                <h4>Join Game</h4>
                <input
                    placeholder="Username of rival..."
                    onChange={(event) => {
                        setRivalUsername(event.target.value);
                    }}
                /> 
            </div>
            )
        </>
    );
}

export default JoinGame;