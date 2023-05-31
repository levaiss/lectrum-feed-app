// Core
import * as yup from 'yup'
import { type SchemaOf } from 'yup'
import { type newPasswordRequestData } from '../../../types/Api'

// Instruments
import { ERROR_MESSAGES } from '../error-messages'

export const NewPasswordFormSchema: SchemaOf<newPasswordRequestData> = yup.object().shape({
  oldPassword: yup.string().required(ERROR_MESSAGES.required).min(6, ERROR_MESSAGES.password),
  newPassword: yup.string().required(ERROR_MESSAGES.required).min(6, ERROR_MESSAGES.password)
})
