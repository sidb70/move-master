import Link from 'next/link';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

import auth from 'fbase/clientApp'
import signIn from 'src/hooks/useAuth'

interface RegistrationData {
    email: string;
    password: string;
    }

const LoginPage: React.FC = () => {
    const { register, handleSubmit, } = useForm({ });
    const onSubmit = (data: RegistrationData) => {
        
        console.log(data);
    };
    return (
        <>
            <Link href="/registration">
                Don't have an account? 
            </Link>
            

            <Form onSubmit={handleSubmit((data) => console.log(data))}>
              <Input placeholder='Email' {...register('email',  { required: true } )} />
              <Input placeholder='Password' {...register('password',  { required: true })} />
              <Input type="submit" />
          </Form>
        </>
    )
}

const Form = styled.form`
     
     text-align: center;
     margin-top:50px;
     height:50%
     
`
const Input = styled.input`
     width: 10%;
     padding: 12px 20px;
     margin: 8px 0;
     display: inline-block;
     border: 1px solid #ccc;
     `

export default LoginPage;