import styled from "styled-components";
import {UserContext} from "@/pages/_app";
import {useContext} from "react";

export default function Controls() {
    const {user} = useContext(UserContext);

    const endWorkout = () => {
        console.log("End Workout");
    }

    const pause = () => {
        console.log("Pause");
    }

    const start = () => {
        console.log("Start");
    }

    return <Container>
        <Button onClick={endWorkout}>End Workout</Button>
        <Button onClick={pause}>Pause</Button>
        <Button onClick={start}>Start</Button>
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
