import { HTMLProps, RefObject } from 'react'

export type InputLabelProps = HTMLProps<HTMLLabelElement> & {
  as?: undefined
  ref?: ((instance: HTMLLabelElement | null) => void) | RefObject<HTMLLabelElement> | null | undefined
}
