import './Board.css';
import Chessboard from 'chessboardjsx';
import { useState } from 'react';
import { Chess } from 'chess.js';
import Error from './Error';
import React from 'react';
import Alert from './Alert';
import io from "socket.io-client";


const socket = io("http://localhost:4000");

function Board() {
  const [fen, setFen] = useState('start');  // using state 
  const [game, setGame] = useState(new Chess());
  const [errorMessage, setErrorMessage] = useState("");
  const [userAlert, setAlert] = useState("");


  React.useEffect(() => {
    socket.on('gameMove', (moveData) => {
      console.log("updating game state", moveData)
      const { sourceSquare, targetSquare } = moveData;
      try {
        const move = game.move({
          from: sourceSquare,
          to: targetSquare
        });
        if(move){
          setFen(game.fen());
        }
      } catch (error) {
        setFen(game.fen());
        console.error('Error:', error.message);
        setErrorMessage(error.message.split(":")[0]);
      }
      
    });

    return () => {
      socket.disconnect(); // Clean up the socket on component unmount
    };
  }, []);

  

  function validateMove({sourceSquare, targetSquare, piece}){
    socket.emit('move', { sourceSquare, targetSquare });
}

function startNewGame(){
  console.log("Start new game");
  setGame(new Chess());
  setFen(game.fen());
}

  return (
    <React.Fragment>
      <button onClick={startNewGame}>New Game</button>
      <Alert alert={userAlert}/>
      <Chessboard className="board" position={fen} onDrop={validateMove}/>
      <Error message={errorMessage}/>
    </React.Fragment>
  );
}

export default Board;
