import styled from "styled-components"

export default function About() {
    return <Container>
        <Title>About</Title>
        <Description>
            Revolutionize your workout with our cutting-edge AI-based fitness app. Track progress and reach fitness
            goals with ease. Get personalized feedback and workout plans. Suitable for beginners and experienced
            athletes
        </Description>
    </Container>
}

const Container = styled.div`
  width: 75%;
  min-height: 175px;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  word-spacing: 0.1rem;
`

const Title = styled.h1`
  text-align: center;
`

const Description = styled.p`
  text-align: left;
  font-size: 1.5rem;
`