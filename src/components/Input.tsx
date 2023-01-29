import styled from "styled-components";

interface InputProps {
    value: any;
    onChange: (e: any) => void;
    label: string;
    optional?: boolean;
}

export default function Input(props: InputProps) {
    const {label, value, onChange, optional} = props;

    const onInputChange = (e: any) => {
        onChange(e.target.value);
    }

    return <Container>
        <Horizontal>
            <Label>{label} </Label>
            {optional && <h6>(Optional)</h6>}
        </Horizontal>
        <Field placeholder={label} value={value} onChange={onInputChange}/>
    </Container>
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const Horizontal = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: baseline;

  > h6 {
    color: ${({theme}) => theme.colors.accent};
  }
`

const Label = styled.label`
  color: ${({theme}) => theme.colors.accent};
`;

const Field = styled.input`
  height: 2rem;
  border: 1px solid ${({theme}) => theme.colors.accent};

  transition: border 500ms ease-out;
  outline: none;
  padding: 0.5rem;
  font-size: 1rem;
  background-color: black;
  color: white;

  ::placeholder {
    color: white;
  }

  -moz-box-shadow: 0 0 3px ${({color}) => color};
  -webkit-box-shadow: 0 0 3px ${({color}) => color};
  box-shadow: 0 0 3px ${({color}) => color};
`
