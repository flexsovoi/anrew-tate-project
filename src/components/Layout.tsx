import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Stat from "./Stat";
import MyButton from "./UI/button/MyButton";
import MyModal from "./UI/MyModal/MyModal";

const Layout = () => {
    const id = Math.floor(Math.random() * 10);
    const [modal, setModal] = useState(false);

    return (
        <div className="App">
            <div className="wrapper">
                <div className="conteiner">
                    <div className="navBar">
                        <MyButton style={{ width: 150 }}>
                            <Link to={``}>Rules</Link>
                        </MyButton>
                        <MyButton>
                            <Link to={`/`}>Guess UserName</Link>
                        </MyButton>
                        <MyButton style={{ width: 150 }} onClick={() => { setModal(true) }}>Your Stat</MyButton>
                        <MyModal visible={modal} setVisible={setModal}>
                            <Stat/>
                        </MyModal>
                    </div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export { Layout };
