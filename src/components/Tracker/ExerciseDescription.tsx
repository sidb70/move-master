import styled from "styled-components";
import {UserContext} from "@/pages/_app";
import {useContext} from "react";

export default function ExerciseDescription() {
    const {user} = useContext(UserContext);

    return <Container>{user.currentExercise!.description}</Container>
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;

  display: flex;
  flex-direction: column;

  font-size: 1.25rem;
  word-spacing: 0.5rem;

  overflow-y: auto;
  overflow-x: hidden;

  border-right: 1px solid ${({theme}) => theme.colors.accent};
  border-bottom: 1px solid ${({theme}) => theme.colors.accent};
`;