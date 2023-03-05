import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="conteiner">    
            <Outlet/>
        </div>
      </div>
    </div>
  );
};

export {Layout};
