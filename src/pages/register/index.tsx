import Link from 'next/link';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import auth from 'fbase/clientApp'
import { createUserWithEmailAndPassword } from 'firebase/auth';
interface RegistrationData {
     name: string;
     email: string;
     password: string;
     }

const signUp = ( name: string, email: string , password: string ) => {
     return createUserWithEmailAndPassword(auth.auth,email, password)
           .then((response) => {
            console.log("HERE",response)
           })
           .catch((error) => {
            return { error };
           });
         };   
const RegistrationPage: React.FC = () => {
     const { register, handleSubmit, } = useForm({ });
     const onSubmit = (data: RegistrationData) => {
          console.log(data.name,data.email,data.password,"Line 26");
          return signUp(data.name, data.email, data.password);
     };
     return (
          <>
          <Form onSubmit={handleSubmit(data => onSubmit(data as any))}>
              <Input placeholder='Name' {...register('name')} />
              <Input placeholder='Email' {...register('email',  { required: true } )} />
              <Input placeholder='Password' {...register('password',  { required: true })} />
              <Input type="submit" />
          </Form>
          </>
     );
};

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
export default RegistrationPage;