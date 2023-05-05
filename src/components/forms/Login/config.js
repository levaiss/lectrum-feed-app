/* Core */
import * as yup from 'yup';

// Instruments
import { ERROR_MESSAGES } from '../error-messages';

export const LoginFormSchema = yup.object().shape({
    email:    yup.string().required(ERROR_MESSAGES.required).email(ERROR_MESSAGES.email),
    password: yup.string().required(ERROR_MESSAGES.required).min(6, ERROR_MESSAGES.password),
});
