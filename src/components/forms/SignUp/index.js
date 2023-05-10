/* Core */
import { useNavigate, NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { observer } from 'mobx-react-lite';


// Components
import { UiInput } from '../../Ui/UiInput';

// Hooks
import { useSignUp } from '../../../hooks/useSignUp';

// Instruments
import { SignUpFormSchema } from './config';

export const SignUp = observer(() => {
    const signUp = useSignUp();
    const navigate = useNavigate();
    const {
        handleSubmit,
        formState,
        reset,
        register,
    } = useForm({
        mode:          'onChange',
        resolver:      yupResolver(SignUpFormSchema),
        defaultValues: {
            name:            '',
            email:           '',
            password:        '',
            confirmPassword: '',
        },
    });

    const submitForm = handleSubmit(async (payload) => {
        const {
            confirmPassword,
            ...userInfo
        } = payload;

        await signUp.mutateAsync(userInfo);
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
                        placeholder = "Ім'я"
                        autoComplete = 'name'
                        autoFocus
                        error = { formState.errors.name }
                        register = { register('name') } />
                    <UiInput
                        placeholder = 'Пошта'
                        autoComplete = 'email'
                        type = 'email'
                        error = { formState.errors.email }
                        register = { register('email') } />
                    <UiInput
                        placeholder = 'Пароль'
                        type = 'password'
                        error = { formState.errors.password }
                        register = { register('password') } />
                    <UiInput
                        placeholder = 'Повторіть пароль'
                        type = 'password'
                        error = { formState.errors.confirmPassword }
                        register = { register('confirmPassword') } />
                    <button
                        type = 'submit'
                        className = 'signupSubmit'>
                        Створити акаунт
                    </button>
                </div>
                <p className = 'options'>
                    Є обліковий запис? <NavLink to = '/login'>Увійти</NavLink>
                </p>
            </div>
        </form>
    );
});