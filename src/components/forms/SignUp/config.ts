/* Core */
import * as yup from 'yup'

// Instruments
import { ERROR_MESSAGES } from '../error-messages'

export const SignUpFormSchema = yup.object().shape({
  name: yup.string().required(ERROR_MESSAGES.required).min(3, ERROR_MESSAGES.name),
  email: yup.string().required(ERROR_MESSAGES.required).email(ERROR_MESSAGES.email),
  password: yup.string().required(ERROR_MESSAGES.required).min(6, ERROR_MESSAGES.password),
  confirmPassword: yup.string().required(ERROR_MESSAGES.required).oneOf([yup.ref('password')], ERROR_MESSAGES.confirmPassword)
})
