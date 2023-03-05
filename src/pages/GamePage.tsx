import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { IUsers } from "./../models/IUser";
import { useParams } from "react-router-dom";

const GamePage = () => {
    const [usersArray, setUsersArray] = useState<IUsers>();
    let nameArray: string[] = [];
    let { id } = useParams();

    useEffect(() => {
        fetchUsers();
    }, [id]);
    async function fetchUsers() {
        try {
            const respose = await axios.get<IUsers>(
                `https://jsonplaceholder.typicode.com/users/${id}`
            );
            setUsersArray(respose.data);
        } catch (error) {
            alert(error);
        }
    }
    
    if (usersArray?.name !== undefined) {
        for (let i = 0; i < usersArray?.name.length; i++) {
            let a: string = usersArray?.name[i];
            if (a !== undefined) {
                nameArray = [...nameArray, a];
            }
        }
    }
    console.log(nameArray);

    return (
        <div className="game__body">
            <span className="game__input">{nameArray}</span>
        </div>
    );
};

export default GamePage;
