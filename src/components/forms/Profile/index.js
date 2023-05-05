// Core
import { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// Components
import { UiInput } from '../../Ui/UiInput';

// Hooks
import { useUpdateProfile } from '../../../hooks/useUpdateProfile';

// Instruments
import { UserContext } from '../../../lib/UserContext';
import { ProfileFormSchema } from './config';

export const Profile = () => {
    const [currentUser, setCurrentUser] = useContext(UserContext);
    const updateProfile = useUpdateProfile();
    const form = useForm({
        mode:          'onChange',
        resolver:      yupResolver(ProfileFormSchema),
        defaultValues: {
            firstName: '',
            lastName:  '',
        },
    });

    useEffect(() => {
        if (currentUser?.name) {
            const [firstName, lastName] = currentUser.name.split(' ');
            form.setValue('firstName', firstName);
            form.setValue('lastName', lastName);
        }
    }, [currentUser]);

    const submitForm = form.handleSubmit(async (profileInfo) => {
        try {
            const { data: updatedUser } = await updateProfile.mutateAsync(profileInfo);
            form.reset();
            setCurrentUser(updatedUser);
        } catch (error) {
            const { response: { data: { statusCode, message } } } = error;
            form.setError('root.serverError', {
                type: statusCode,
                message,
            });
        }
    });

    return (
        <form
            onSubmit = { submitForm }
            className = 'form'>
            <div className = 'wrapper'>
                <div>
                    <h1>Привіт, { currentUser?.name }</h1>
                    <img src = { currentUser?.avatar } alt = 'User avatar' />
                    <UiInput
                        placeholder = "Ім'я"
                        autoComplete = 'firstName'
                        error = { form.formState.errors.firstName }
                        register = { form.register('firstName') } />
                    <UiInput
                        placeholder = 'Призвіще'
                        autoComplete = 'lastName'
                        error = { form.formState.errors.lastName }
                        register = { form.register('lastName') } />
                    {
                        form.formState.errors.root?.serverError
                        && <div className = 'server-error'><p>{ form.formState.errors.root?.serverError.message }</p></div>
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
