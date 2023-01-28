import Link from 'next/link';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

import { useRouter } from 'next/router';

import auth from 'fbase/clientApp'
import {signIn} from 'src/hooks/useAuth'

const fbauth = auth.auth;

interface LoginData {
    email: string;
    password: string;
    }
const LoginPage: React.FC = () => {
    const { register, handleSubmit, } = useForm({ });
    const router = useRouter();
    const onSubmit = (data: LoginData) => {
        
        return fbauth.signInWithEmailAndPassword(data.email,data.password).then(() => {
         router.push('/');
        });
       };
    return (
        <>
            <Link href="/registration">
                Don't have an account? 
            </Link>
            

            <Form onSubmit={handleSubmit(data => onSubmit(data as any))}>
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