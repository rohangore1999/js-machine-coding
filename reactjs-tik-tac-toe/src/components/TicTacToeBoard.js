import React from "react";
import useTicTakToe from "../hooks/use-tic-tac-toe";
import "../index.css";

const TicTacToeBoard = () => {
  const { board, handleClick, getStatusMessage, resetGame } = useTicTakToe();

  return (
    <div className="game">
      <div className="status">
        {getStatusMessage()}

        <button className="reset-button" onClick={resetGame}>
          Reset Game
        </button>
      </div>

      <div className="board">
        {board.map((b, index) => (
          <button
            className="cell"
            onClick={() => handleClick(index)}
            disabled={b !== null}
          >
            {b}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TicTacToeBoard;
