import React from 'react'
import { useController } from 'react-hook-form'

import { InputField } from 'src/components/molecules'

import { FormInputFieldProps } from './FormInputField.interface'

const FormInputField: React.FC<FormInputFieldProps> = (props) => {
  const {
    field: { ref, name, onChange, onBlur, value },
    fieldState: { error },
  } = useController(props)
  return (
    <InputField
      {...props}
      ref={ref}
      onChange={onChange}
      onBlur={onBlur}
      id={name}
      name={name}
      value={value || ''}
      error={Boolean(error)}
      errorMessage={error?.message}
    />
  )
}

export default FormInputField
