import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { IUsers } from "./../models/IUser";
import { useParams } from "react-router-dom";
import { useFetching } from "../data/fetchUsers";
import getPassName from "../data/getName";
import { useAppDispatch, useAppSelector } from "../hooks";
import livesSlice, { addLives, removeLives } from "../store/livesSlice";

const GamePage = () => {
    const [usersArray, setUsersArray] = useState<IUsers>();
    const [nameArray, setNameArray] = useState<string[]>([]);
    const [passArray, setPassArray] = useState<number[]>([]);
    const [point, setPoint] = useState(0);
    const [flag, setFlag] = useState(0);

    const [rightAnswers, setRightAnswers] = useState(
        Number(localStorage.getItem("rightAnswers") && 0)
    );
    const [livesRemove, setLivesRemove] = useState(
        Number(localStorage.getItem("livesRemove") && 0)
    );
    const [gameOver, setGameOver] = useState(
        Number(localStorage.getItem("gameOver") && 0)
    );

    const { id } = useParams();
    const [params, setParams] = useState<any>(Number({ id }.id));
    const [idArray, setIdArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    const [fetchUsers, isUsersLoading, usersError]: any = useFetching(
        async () => {
            const response = await axios.get<IUsers>(
                `https://jsonplaceholder.typicode.com/users/${params}`
            );
            setUsersArray(response.data);
        }
    );

    useEffect(() => {
        fetchUsers();
    }, [params]);

    useMemo(() => {
        if (usersArray?.name !== undefined) {
            const [ArName, ArPass]: any = getPassName(usersArray);
            setNameArray(ArName);
            setPassArray(ArPass);
        }
    }, [usersArray]);

    useMemo(() => {
        idArray.splice(idArray.indexOf(params), 1);
    }, [params]);

    const getLetters = (e: KeyboardEvent) => {
        const copy: string[] = nameArray;
        setFlag(0);

        for (let i = 65; i <= 90; i++) {
            if (e.key.toUpperCase() === String.fromCharCode(i)) {
                copy[nameArray.indexOf("_")] = e.key;
                setNameArray(copy);
                setPoint(point + 1);
                setFlag(flag + 1);
                if (e.key !== usersArray?.name[passArray[point]]) {
                    setLivesRemove(livesRemove + 1);
                    dispatch(removeLives(false));
                    localStorage.setItem(
                        "livesRemove",
                        JSON.stringify(
                            Number(localStorage.getItem("livesRemove")) + 1
                        )
                    );
                }
            }
        }

        if (e.key === "Backspace") {
            if (point >= 0) {
                setPoint(point - 1);
                copy[passArray[point - 1]] = "_";
                setNameArray(copy);
            } else {
                console.log("point cant be <0, now point = 0");
                setPoint(0);
            }
        }

        if (nameArray.join("") === usersArray?.name) {
            setRightAnswers(rightAnswers + 1);
            setPoint(0);
            setParams(idArray[Math.floor(Math.random() * idArray.length)]);
            dispatch(addLives(true));
            localStorage.setItem(
                "rightAnswers",
                JSON.stringify(Number(localStorage.getItem("rightAnswers")) + 1)
            );
        }
        if (lives === 0) {
            setNameArray("GameOver".split(""));
            setGameOver(gameOver + 1);
            localStorage.setItem(
                "gameOver",
                JSON.stringify(Number(localStorage.getItem("gameOver")) + 1)
            );
        }
        setFlag(1);
    };

    useEffect(() => {
        document.addEventListener("keyup", getLetters);
        return () => {
            document.removeEventListener("keyup", getLetters);
        };
    });

    const lives = useAppSelector((state) => state.lives.lives);
    const dispatch = useAppDispatch();

    return (
        <div className="game__body">
            <span>{usersArray?.name}</span>

            <span className="game__input">{nameArray}</span>

            <span style={{ marginTop: 50 }}>You have: {lives} lives</span>
        </div>
    );
};

export default GamePage;
