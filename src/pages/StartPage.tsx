import React, { useState } from "react";
import { Link } from "react-router-dom";
import MyButton from "../components/UI/button/MyButton";

const StartPage = () => {
    const id = Math.floor(Math.random() * 10);

    return (
        <div className="startPage">
            <MyButton style={{ marginTop: 350, fontWeight: 200 }} >
                <Link to={`/game/${id}`}>Start!</Link>
            </MyButton>
        </div>
    );
};

export default StartPage;
