/* Core */
import { useNavigate, NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { observer } from 'mobx-react-lite';

// Components
import { UiInput } from '../../Ui/UiInput';

// Hooks
import { useLogin } from '../../../hooks/useLogin';

// Instruments
import { LoginFormSchema } from './config';

export const Login = observer(() => {
    const login = useLogin();
    const navigate = useNavigate();
    const {
        handleSubmit,
        formState,
        register,
        reset,
    } = useForm({
        mode:          'onChange',
        resolver:      yupResolver(LoginFormSchema),
        defaultValues: {
            email:    '',
            password: '',
        },
    });

    const submitForm = handleSubmit(async (credentials) => {
        await login.mutateAsync(credentials);
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
});
