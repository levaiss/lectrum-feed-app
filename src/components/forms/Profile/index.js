// Core
import { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// Components
import { UiInput } from '../../Ui/UiInput';
import { UiAvatar } from '../../Ui/UiAvatar';

// Hooks
import { useUpdateProfile } from '../../../hooks/useUpdateProfile';

// Instruments
import { UserContext } from '../../../lib/UserContext';
import { ProfileFormSchema } from './config';

export const Profile = () => {
    const [currentUser, setCurrentUser] = useContext(UserContext);
    const updateProfile = useUpdateProfile();
    const {
        handleSubmit,
        formState,
        register,
        reset,
        setValue,
        setError,
    } = useForm({
        mode:          'onChange',
        resolver:      yupResolver(ProfileFormSchema),
        defaultValues: {
            firstName: '',
            lastName:  '',
        },
    });

    const submitForm = handleSubmit(async (profileInfo) => {
        const { data: updatedUser } = await updateProfile.mutateAsync(profileInfo, {
            onError: (error) => {
                const { response: { data: { statusCode, message } } } = error;
                setError('root.serverError', {
                    type: statusCode,
                    message,
                });
            },
        });
        reset();
        setCurrentUser(updatedUser);
    });

    useEffect(() => {
        if (currentUser?.name) {
            const [firstName, lastName] = currentUser.name.split(' ');
            setValue('firstName', firstName);
            setValue('lastName', lastName);
        }
    }, [currentUser]);

    return (
        <form
            onSubmit = { submitForm }
            className = 'form'>
            <div className = 'wrapper'>
                <div>
                    <h1>Привіт, { currentUser?.name }</h1>
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
                    {
                        formState.errors.root?.serverError
                        && <div className = 'server-error'><p>{ formState.errors.root?.serverError.message }</p></div>
                    }
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
