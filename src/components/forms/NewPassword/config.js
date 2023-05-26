// Core
import * as yup from 'yup';

// Instruments
import { ERROR_MESSAGES } from '../error-messages';

export const NewPasswordFormSchema = yup.object().shape({
    oldPassword: yup.string().required(ERROR_MESSAGES.required).min(6, ERROR_MESSAGES.password),
    newPassword: yup.string().required(ERROR_MESSAGES.required).min(6, ERROR_MESSAGES.password),
});
