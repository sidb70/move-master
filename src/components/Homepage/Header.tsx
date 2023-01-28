import styled from "styled-components"

export default function Header() {
    return <Container>
        <h1>Move Master</h1>
        <ButtonList>
            <Button>Sign In</Button>
            <Button>Sign Up</Button>
            <Button>Demo</Button>
        </ButtonList>
    </Container>
}

const Container = styled.div`
  width: 100%;
  min-height: 250px;
  margin-top: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  & > h1 {
    font-size: 2rem;
  }
`

const ButtonList = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 1rem;
`

const Button = styled.button`
  width: 100px;
  height: 50px;
  border: 1px solid black;
  border-radius: 5px;
`
