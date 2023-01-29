import styled from "styled-components";
import {UserContext} from "@/pages/_app";
import {useContext} from "react";

export default function Controls() {
    const {user, setUser} = useContext(UserContext);

    const endExercise = () => setUser({...user, currentExercise: null});

    const nextExercise = () => {

    }

    const prevExercise = () => {

    }

    return <Container>
        <Button onClick={prevExercise}>Previous</Button>
        <Button onClick={endExercise}>End Workout</Button>
        <Button onClick={nextExercise}>Next</Button>
    </Container>
}

const Container = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-top: 1px solid ${({theme}) => theme.colors.accent};
`;

const Button = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
  cursor: pointer;

  border-right: 1px solid ${({theme}) => theme.colors.accent};
`;
