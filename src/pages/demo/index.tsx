import {useContext} from "react";
import {UserContext} from "@/pages/_app";
import UserForm from "@/components/Userform";
import Dashboard from "@/components/Dashboard";
import Tracker from "@/components/Tracker";

export default function Demo() {
    const {user} = useContext(UserContext);

    return user.initialLoad ? <UserForm/> : user.currentExercise ? <Tracker/> : <Dashboard/>
}