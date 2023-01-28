import { useForm } from 'react-hook-form';
interface RegistrationData {
    name: string;
    email: string;
    password: string;
    }
const RegistrationForm = () => { 
    const { register, handleSubmit, } = useForm({ });
    const onSubmit = (data: RegistrationData) => {
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

export default RegistrationForm;