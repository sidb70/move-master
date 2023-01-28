import { useForm } from 'react-hook-form';
interface LoginData {
    name: string;
    email: string;
    password: string;
    }
const LoginForm = () => { 
    const { register, handleSubmit, } = useForm({ });
    const onSubmit = (data: LoginData) => {
        console.log(data);
    };
    return (    
        <>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
            <input {...register('firstName')} />
            <input {...register('age' )} />
            <input {...register('email',  { required: true } )} />
            <input {...register('password',  { required: true })} />
            <input type="submit" />
        </form>
        </>
    );
}

export default LoginForm;