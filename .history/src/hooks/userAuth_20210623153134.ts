import {  useContext } from "react";
import { AuthContex } from "../contexts/AuthContext";


export function useAtuh(){
    const value = useContext(AuthContex)

    return  value ;
}