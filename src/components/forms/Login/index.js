/* Core */
import { useEffect } from 'react';
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
    const form = useForm({
        mode:          'onChange',
        resolver:      yupResolver(LoginFormSchema),
        defaultValues: {
            email:    '',
            password: '',
        },
    });

    const submitForm = form.handleSubmit(async (credentials) => {
        try {
            await login.mutateAsync(credentials);
            form.reset();
            navigate('/feed');
        } catch (error) {
            const { response: { data: { statusCode, message } } } = error;
            form.setError('root.serverError', {
                type: statusCode,
                message,
            });
        }
    });

    useEffect(() => {
        form.setFocus('email');
    }, []);

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
                        error = { form.formState.errors.email }
                        register = { form.register('email') } />
                    <UiInput
                        placeholder = 'Пароль'
                        type = 'password'
                        error = { form.formState.errors.password }
                        register = { form.register('password') } />
                    {
                        form.formState.errors.root?.serverError
                        && <div className = 'server-error'><p>{ form.formState.errors.root?.serverError.message }</p></div>
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
