import { IUsers } from "../models/IUser";


export default function getPassName(array: IUsers) {
        const ArName: string[] = array.name.split("");
        
        for (let i = 0; i <= 5; i++) {
            let RandomLet = Math.floor(Math.random() * ArName.length);
            if (ArName[RandomLet] === " ") {
                ArName[RandomLet + 2] = "_";
            } else {
                ArName[RandomLet] = "_";
            }
        }
        const ArPass: number[] = []
        for (let i = 0; i < ArName.length; i++) {
            if (ArName[i] === "_") {
                ArPass.push(i);
            }
        }
        
        return [ArName, ArPass]
}