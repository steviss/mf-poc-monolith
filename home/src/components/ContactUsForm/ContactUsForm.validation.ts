import * as yup from 'yup'

export const CONTACT_US_FORM_SCHEMA = yup.object({
  email: yup.string().email().required(),
  subject: yup.string().required(),
  content: yup.string().required(),
})
