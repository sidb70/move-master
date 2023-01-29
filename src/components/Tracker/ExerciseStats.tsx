import styled from "styled-components";
import {UserContext} from "@/pages/_app";
import {useContext} from "react";

export default function ExerciseStats() {
    const {user} = useContext(UserContext);

    return <Container>
        <Horizontal>
            <Stat>Rep: {user.currentExercise!.reps}</Stat>
            <Stat>Sets: {user.currentExercise!.sets}</Stat>
        </Horizontal>
        <Horizontal>
            <Stat>Time: {user.currentExercise!.time}</Stat>
            <Stat>PB: {user.currentExercise!.PB}</Stat>
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