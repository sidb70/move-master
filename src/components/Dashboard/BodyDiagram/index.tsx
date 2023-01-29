import styled from "styled-components"
import Image from "next/image"

export default function BodyDiagram() {
    return <Container>
        <Image
            alt='Body Diagram'
            src='/body.png'
            layout='fill'
            objectFit='contain'
        />
        <h1>Body Heatmap (WIP)</h1>
    </Container>
}

const Container = styled.div`
  position: relative;
  height: 100%;
  width: 35%;


  & > h1 {
    text-align: center;
    color: ${props => props.theme.colors.accent};
    font-size: 1.5rem;
    margin-top: 2rem;
    font-weight: 600;
  }


  border-left: 1px solid ${props => props.theme.colors.accent};
`