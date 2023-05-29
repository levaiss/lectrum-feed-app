/* Core */
import * as yup from 'yup'

// Instruments
import { ERROR_MESSAGES } from '../error-messages'

export const ProfileFormSchema = yup.object().shape({
  firstName: yup.string().required(ERROR_MESSAGES.required).min(3, ERROR_MESSAGES.name),
  lastName: yup.string().required(ERROR_MESSAGES.required).min(3, ERROR_MESSAGES.name)
})
