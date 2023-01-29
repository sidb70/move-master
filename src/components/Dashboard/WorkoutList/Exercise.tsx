import {IExercise} from "@/Typings/exercise";
import styled from "styled-components";
import {UserContext} from "@/pages/_app";
import {useContext} from "react";

export default function Exercise(exercise: IExercise) {
    const {user, setUser} = useContext(UserContext);

    const difficulty = () => {
        switch (exercise.difficulty) {
            case 1:
                return 'Beginner'
            case 2:
                return 'Intermediate'
            case 3:
                return 'Advanced'
            default:
                return 'Unknown'
        }
    }

    const color = () => {
        switch (exercise.is_completed) {
            case true:
                return '#00FF00'
            case false:
                return '#FF0000'
        }
    }

    const loadExercise = () => setUser({...user, currentExercise: exercise});

    // load muscle groups into a string
    const muscleGroups = () => {
        let groups = '';

        if (exercise.muscles) groups += exercise.muscles
        if (exercise.muscles_secondary) groups += ' | ' + exercise.muscles_secondary
        if (exercise.muscles_neutral) groups += ' | ' + exercise.muscles_neutral

        return groups
    }

    return <Container color={color()} onClick={loadExercise}>
        <Header>
            <h3>{exercise.name}</h3>
            <p>{difficulty()}</p>
        </Header>
        <Stats>
            <p>Reps: {exercise.reps}</p>
            <p>Sets: {exercise.sets}</p>
            {exercise.weight != -1 && <p>Weight: {exercise.weight}</p>}
        </Stats>
        <Stats>
            <p>{muscleGroups()} </p>
            {exercise.weight != -1 && <p>Weight: {exercise.weight}</p>}
        </Stats>
    </Container>
}

// make container position relative
const Container = styled.div<{ color: string }>`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  border: 2px solid ${props => props.color};
  cursor: pointer;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

