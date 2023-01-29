import {useContext, useEffect} from "react"
import {UserContext} from "@/pages/_app";
import calculateAngle from "@/angle";

export default function ExerciseSolver() {
    const {user} = useContext(UserContext);
    const {currentPose, currentExercise} = user;

    useEffect(() => {
        if (!currentPose || !currentExercise) return;
        currentExercise.solver(currentPose);
    }, [currentPose])

    return <></>
}