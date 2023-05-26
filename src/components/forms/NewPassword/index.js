// Core
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// Components
import { UiInput } from '../../Ui/UiInput';

// Store
import { resetPassword } from '../../../store/authSlice';

// Instruments
import { NewPasswordFormSchema } from './config';


export const NewPassword = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {
        handleSubmit,
        formState,
        register,
        reset,
    } = useForm({
        mode:          'onChange',
        resolver:      yupResolver(NewPasswordFormSchema),
        defaultValues: {
            oldPassword: '',
            newPassword: '',
        },
    });

    const submitForm = handleSubmit(async (body) => {
        const { payload } = await dispatch(resetPassword(body));
        if (payload) {
            reset();
            navigate('/feed');
        }
    });

    return (
        <form
            onSubmit = { submitForm }
            className = 'form'>
            <div className = 'wrapper'>
                <div>
                    <h1>Зміна пароля</h1>
                    <UiInput
                        type = 'password'
                        placeholder = 'Старий пароль'
                        autoFocus
                        error = { formState.errors.oldPassword }
                        register = { register('oldPassword') } />
                    <UiInput
                        type = 'password'
                        placeholder = 'Новий пароль'
                        error = { formState.errors.newPassword }
                        register = { register('newPassword') } />
                    <button className = 'loginSubmit' type = 'submit'>
                        Змінити пароль
                    </button>
                </div>
                <NavLink
                    to = '/profile'>
                    ← Назад
                </NavLink>
            </div>
        </form>
    );
};
