import styled from "styled-components";
import BodyDiagram from "./BodyDiagram";
import UserInformation from "./UserInformation";
import WorkoutList from "./WorkoutList";

export default function Dashboard() {

    return <Container>
        <Vertical>
            <UserInformation/>
            <WorkoutList/>
        </Vertical>
        <BodyDiagram/>
    </Container>
}

const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const Vertical = styled.div`
  height: 100%;
  width: 65%;

  display: flex;
  flex-direction: column;
`