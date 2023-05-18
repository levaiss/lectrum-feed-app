// Core
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// Components
import { UiInput } from '../../Ui/UiInput';
import { UiAvatar } from '../../Ui/UiAvatar';

// Hooks
import { getUser, getUserName } from '../../../store/userSlice';

// Hooks
import { useUpdateProfile } from '../../../hooks/useUpdateProfile';

// Instruments
import { ProfileFormSchema } from './config';

export const Profile = () => {
    const currentUser = useSelector(getUser);
    const userName = useSelector(getUserName);
    const updateProfile = useUpdateProfile();
    const {
        handleSubmit,
        formState,
        register,
        reset,
        setValue,
    } = useForm({
        mode:          'onChange',
        resolver:      yupResolver(ProfileFormSchema),
        defaultValues: {
            firstName: '',
            lastName:  '',
        },
    });

    const fillForm = () => {
        if (userName) {
            const [
                firstName,
                lastName,
            ] = `${userName}`.split(' ');
            setValue('firstName', firstName);
            setValue('lastName', lastName);
        }
    };
    const submitForm = handleSubmit(async (profileInfo) => {
        await updateProfile.mutateAsync(profileInfo);
        reset();
    });

    useEffect(() => {
        fillForm();
    }, [userName]);

    return (
        <form
            onSubmit = { submitForm }
            className = 'form'>
            <div className = 'wrapper'>
                <div>
                    <h1>Привіт, { userName }</h1>
                    <UiAvatar src = { currentUser?.avatar } alt = 'User avatar' />
                    <UiInput
                        placeholder = "Ім'я"
                        autoComplete = 'firstName'
                        autoFocus
                        error = { formState.errors.firstName }
                        register = { register('firstName') } />
                    <UiInput
                        placeholder = 'Призвіще'
                        autoComplete = 'lastName'
                        error = { formState.errors.lastName }
                        register = { register('lastName') } />
                    <button className = 'loginSubmit' type = 'submit'>
                        Оновити профіль
                    </button>
                </div>
                <NavLink
                    to = '/profile/new-password'>
                    Змінити пароль →
                </NavLink>
            </div>
        </form>
    );
};
