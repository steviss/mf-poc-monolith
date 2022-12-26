import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Button } from 'ui_library/atoms'
import { FormInputField } from 'ui_library/molecules'

import { CONTACT_US_FORM_DEFAULT_VALUES } from './ContactUsForm.consts'
import { ContactUsFormProps } from './ContactUsForm.interface'
import { CONTACT_US_FORM_SCHEMA } from './ContactUsForm.validation'

const ContactUsForm: React.FC = () => {
  const methods = useForm<ContactUsFormProps>({
    defaultValues: CONTACT_US_FORM_DEFAULT_VALUES,
    mode: 'onChange',
    resolver: yupResolver(CONTACT_US_FORM_SCHEMA),
  })

  const { handleSubmit } = methods
  const onSubmit = handleSubmit(async (data) => {
    console.log('submitted', data)
  })
  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <FormInputField name="email" label="E-mail" />
        <FormInputField name="subject" label="Subject" />
        <FormInputField name="content" label="Content" />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  )
}

export default ContactUsForm
