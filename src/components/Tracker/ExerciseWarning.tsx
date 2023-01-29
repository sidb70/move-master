import styled from "styled-components";
import {UserContext} from "@/pages/_app";
import {useContext} from "react";

export default function ExerciseWarning() {
    const {user} = useContext(UserContext);

    return <Container>
        {user.currentExercise!.badPose.map((pose, index) => <Warning key={index}>{pose}</Warning>)}
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

const Warning = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 1.5rem;
`;