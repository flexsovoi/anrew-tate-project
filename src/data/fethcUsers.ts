import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IUsers } from "../models/IUser";

export const useUsers = () => {
    const [usersArray, setUsersArray] = useState<IUsers[]>([]);
    let params = useParams()

    useEffect(() => {
        fetchUsers();
    }, []);
    async function fetchUsers() {
        try {
            await axios
                .get<IUsers[]>(`https://jsonplaceholder.typicode.com/users/`)
                .then((data) => setUsersArray(data.data));
        } catch (error) {
            alert(error);
        }
    }

    return [usersArray, setUsersArray]
    
}