import {UserContext} from "@/pages/_app";
import {useContext} from "react";
import Camera from "@/components/Tracker/Camera";
import styled from "styled-components";
import ExerciseStats from "./ExerciseStats";
import ExerciseDescription from "./ExerciseDescription";
import Controls from "./Controls";
import ExerciseWarning from "./ExerciseWarning";
import ExerciseSolver from "@/Exercises/ExerciseSolver";

export default function Tracker() {
    const {user} = useContext(UserContext);

    return <Container>
        <ExerciseSolver/>
        <Vertical>
            <IFrame allowFullScreen src={user.currentExercise!.video}/>
            <ExerciseDescription/>
            <Controls/>
        </Vertical>
        <Vertical>
            <Camera/>
            <ExerciseStats/>
            <ExerciseWarning/>
        </Vertical>
    </Container>
}

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Vertical = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const IFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;
