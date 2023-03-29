import React, { useState } from "react";

const Stat = () => {
    const rightAnswers = localStorage.getItem("rightAnswers");
    const livesRemove = localStorage.getItem("livesRemove");
    const gameOver = localStorage.getItem("gameOver");
    return (
        <div>
            <div>You have {rightAnswers} right answers</div>
            <div>You have {livesRemove} lives remove</div>
            <div>You have {gameOver} games over</div>
        </div>
    );
};

export default Stat;
