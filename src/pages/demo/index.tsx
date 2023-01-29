import {useContext} from "react";
import {UserContext} from "@/pages/_app";

export default function Demo() {
    const {user, setUser} = useContext(UserContext);

    return <p>{user.initialLoad}</p>
}