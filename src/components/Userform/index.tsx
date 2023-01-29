import {useContext, useState} from "react";
import styled from "styled-components"
import Input from "../Input"
import {UserContext} from "@/pages/_app";

export default function UserForm() {
    const {user, setUser} = useContext(UserContext);

    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Doe");
    const [age, setAge] = useState(50);
    const [weight, setWeight] = useState(173);
    const [feet, setFeet] = useState(5);
    const [inches, setInches] = useState(8);

    const updateAccount = () => {
        const height = (feet * 12 + inches);
        setUser({...user, initialLoad: false, firstName, lastName, age, weight, height: height})
    }

    return <Container onSubmit={updateAccount}>
        <h1>User Creation</h1>
        <Horizontal>
            <Input value={firstName} onChange={setFirstName} label="First Name"/>
            <Input value={lastName} onChange={setLastName} label="Last Name"/>
        </Horizontal>
        <Horizontal>
            <Input value={age} onChange={setAge} optional label="Age"/>
            <Input value={weight} onChange={setWeight} optional label="Weight (Pounds)"/>
        </Horizontal>
        <Horizontal>
            <Input value={feet} onChange={setFeet} optional label="Height (Feet)"/>
            <Input value={inches} onChange={setInches} optional label="Height (Inches)"/>
        </Horizontal>
        <SubmitButton type="submit">Submit</SubmitButton>
    </Container>
}

const Container = styled.form`
  height: 100%;
  width: 95%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  h1 {
    color: ${({theme}) => theme.colors.accent};
  }
`

const Horizontal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 1rem;
`

const SubmitButton = styled.button`
  height: 2rem;
  width: 100%;

  margin: 10px;
  padding: 5px;

  background-color: black;
  outline: none;
  color: white;

  border: 1px solid ${({theme}) => theme.colors.accent};
  border-radius: 5px;
`


