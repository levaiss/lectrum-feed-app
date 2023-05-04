/* Core */
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';


// Components
import { NavLink } from 'react-router-dom';
import { UiInput } from '../../Ui/UiInput';

// Hooks
import { useSignUp } from '../../../hooks/useSignUp';

// Instruments
import { SignUpFormSchema } from './config';

export const SignUp = () => {
    const signUp = useSignUp();
    const form = useForm({
        mode:          'onChange',
        resolver:      yupResolver(SignUpFormSchema),
        defaultValues: {
            name:            '',
            email:           '',
            password:        '',
            confirmPassword: '',
        },
    });

    const submitForm = form.handleSubmit(async (payload) => {
        const {
            confirmPassword,
            ...userInfo
        } = payload;

        const { statusCode, message } = await signUp.mutateAsync(userInfo);
        if (statusCode > 200) {
            form.setError('root.serverError', {
                type: statusCode,
                message,
            });
        } else {
            form.reset();
        }
    });

    useEffect(() => {
        form.setFocus('name');
    }, []);

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
                        error = { form.formState.errors.name }
                        register = { form.register('name') } />
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
                    <UiInput
                        placeholder = 'Повторіть пароль'
                        type = 'password'
                        error = { form.formState.errors.confirmPassword }
                        register = { form.register('confirmPassword') } />
                    <div className = 'server-error'>
                        {
                            form.formState.errors.root?.serverError
                            && <p>{ form.formState.errors.root?.serverError.message }</p>
                        }
                    </div>
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
};
