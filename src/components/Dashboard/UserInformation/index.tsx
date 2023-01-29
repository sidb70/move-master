import {UserContext} from "@/pages/_app"
import {useContext} from "react"
import styled from "styled-components"

export default function UserInformation() {
    const {user} = useContext(UserContext);

    return <Container>
        <Welcome>Welcome, {user.firstName}!</Welcome>
        <Stats>
            <Stat>Workout Streak: {user.workoutStreak}</Stat>
            <Stat>Total Workouts: {user.totalWorkouts}</Stat>
            <Stat>Exercises Left: {user.ExercisesToComplete}</Stat>
        </Stats>
    </Container>
}

const Container = styled.div`
  height: 35%;
  width: 100%;
  padding: 1rem;

  border-bottom: 1px solid ${props => props.theme.colors.accent};
`

const Welcome = styled.h1`
  font-size: 2rem;
  font-weight: 500;
`

const Stats = styled.div`
  padding: 1rem 0;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 2fr);
  grid-column-gap: 1rem;
  grid-row-gap: 3rem;

  justify-items: center;
`

const Stat = styled.h2`
  font-size: 1.25rem;
  font-weight: 400;
  text-align: center;
  margin: 0;
`