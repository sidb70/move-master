import { UserContext } from "@/pages/_app";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

export default function ExerciseStats() {
    const {user} = useContext(UserContext);
    const [stats, setStats] = useState({reps: 0, PB: 0});

    useEffect(()=>{
        const interval = setInterval(()=>{
            const currentExerciseName = user.currentExercise!.name;
            const ExerciseData = user.Exercises.find((exercise)=>exercise.name === currentExerciseName);
            setStats({reps: ExerciseData!.reps, PB: ExerciseData!.PB})
        },250)

        return ()=>clearInterval(interval);
    },[])

    return <Container>
        <Horizontal>
            <Stat>Rep: {stats.reps}</Stat>
            <Stat>PB: {stats!.PB}</Stat>
        </Horizontal>
    </Container>
}

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Horizontal = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Stat = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;