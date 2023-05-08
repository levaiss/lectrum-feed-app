/* Core */
import { useNavigate, NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';


// Components
import { UiInput } from '../../Ui/UiInput';

// Hooks
import { useLogin } from '../../../hooks/useLogin';

// Instruments
import { LoginFormSchema } from './config';

export const Login = () => {
    const login = useLogin();
    const navigate = useNavigate();
    const {
        handleSubmit,
        formState,
        register,
        reset,
        setError,
    } = useForm({
        mode:          'onChange',
        resolver:      yupResolver(LoginFormSchema),
        defaultValues: {
            email:    '',
            password: '',
        },
    });

    const submitForm = handleSubmit(async (credentials) => {
        await login.mutateAsync(credentials, {
            onError: (error) => {
                const { response: { data: { statusCode, message } } } = error;
                setError('root.serverError', {
                    type: statusCode,
                    message,
                });
            },
        });
        reset();
        navigate('/feed');
    });

    return (
        <form
            onSubmit = { submitForm }
            className = 'form centered'>
            <div className = 'wrapper centered'>
                <div className = 'logo'></div>
                <div>
                    <UiInput
                        placeholder = 'Пошта'
                        autoComplete = 'email'
                        type = 'email'
                        autoFocus
                        error = { formState.errors.email }
                        register = { register('email') } />
                    <UiInput
                        placeholder = 'Пароль'
                        type = 'password'
                        error = { formState.errors.password }
                        register = { register('password') } />
                    {
                        formState.errors.root?.serverError
                        && <div className = 'server-error'><p>{ formState.errors.root?.serverError.message }</p></div>
                    }
                    <button
                        type = 'submit'
                        className = 'loginSubmit'>
                        Увійти
                    </button>
                </div>
                <p className = 'options'>
                    Немає облікового запису? <NavLink to = '/signup'>Створити</NavLink>
                </p>
            </div>
        </form>
    );
};
