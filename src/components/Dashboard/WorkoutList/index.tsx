import styled from "styled-components"
import {UserContext} from "@/pages/_app";
import {useContext} from "react";
import Exercise from "./Exercise";

export default function WorkoutList() {
    const {user} = useContext(UserContext);

    return <Exercises>
        {user!.Exercises.map((exercise, index) => {
            return <Exercise key={index} {...exercise} />
        })}
    </Exercises>
}

const Exercises = styled.div`
  width: 100%;
  padding: 1rem;
  overflow-y: auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  grid-auto-rows: minmax(100px, auto);
`