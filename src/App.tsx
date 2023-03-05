import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import GamePage from "./pages/GamePage";
import { Layout } from "./components/Layout";
import StartPage from "./pages/StartPage";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<StartPage />} />
                    <Route path="game/:id" element={<GamePage />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
