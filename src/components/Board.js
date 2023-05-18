import React, { useEffect, useState } from 'react';
import Square from './Square';
import { Patterns } from './WinningPatterns'

function Board({ result, setResult }) {
    const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
    const [player, setPlayer] = useState("X");
    const [turn, setTurn] = useState("X");


    useEffect(() => {
        checkIfTie();
        checkWin();
    }, [board])
    const chooseSquare = async (square) => {
        if (turn === player && board[square] === "") {
            setTurn(player === "X" ? "0" : "X");

           
            setBoard(board.map((val, idx) => {
                if ( idx === square && val === "") {
                    return player
                }
                return val;
            })
            );
        }
    };

    const checkWin = () => {
        Patterns.forEach((currPattern) => {
            const firstPlayer = board[currPattern[0]]
            if (firstPlayer === "") return 
            let foundWinningPattern = true;
            currPattern.forEach((idx) => {
                if (board[idx] != firstPlayer) {
                    foundWinningPattern = false;
                }
            });
            
            if (foundWinningPattern) {
                setResult({ winner: board[currPattern[0]], state: "Won" });
            }
        });
    };

    const checkIfTie = () => {
        let filled = true
        board.forEach((square) => {
            if (square ==="") {
                filled = false;
            }
        });

        if (filled) {
            setResult ({ winner: "none", state: "tie" });
        }
    };


    
    return (
        <div className="board">
            <div className="row">
                <Square
                    chooseSquare={() => {
                        chooseSquare(0);
                    }}
                    val={board[0]}
                />
                <Square chooseSquare={() => {
                    chooseSquare(1);
                }}
                    val={board[1]}
                />
                <Square chooseSquare={() => {
                    chooseSquare(2);
                }}
                    val={board[2]}
                />
            </div>
            <div className="row">
                <Square chooseSquare={() => {
                    chooseSquare(3);
                }}
                    val={board[3]}
                />
                <Square chooseSquare={() => {
                    chooseSquare(4);
                }}
                    val={board[4]}
                />
                <Square chooseSquare={() => {
                    chooseSquare(5);
                }}
                    val={board[5]}
                />
            </div>
            <div className="row">
                <Square chooseSquare={() => {
                    chooseSquare(6);
                }}
                    val={board[6]}
                />
                <Square chooseSquare={() => {
                    chooseSquare(7);
                }}
                    val={board[7]}
                />
                <Square chooseSquare={() => {
                    chooseSquare(8);
                }}
                    val={board[8]}
                />
            </div>
        </div>
    );
}


export default Board; 