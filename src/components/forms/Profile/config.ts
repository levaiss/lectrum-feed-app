/* Core */
import * as yup from 'yup'
import { type SchemaOf } from 'yup'
import { type updateProfileRequestData } from '../../../types/Api'

// Instruments
import { ERROR_MESSAGES } from '../error-messages'

export const ProfileFormSchema: SchemaOf<updateProfileRequestData> = yup.object().shape({
  firstName: yup.string().required(ERROR_MESSAGES.required).min(3, ERROR_MESSAGES.name),
  lastName: yup.string().required(ERROR_MESSAGES.required).min(3, ERROR_MESSAGES.name)
})
