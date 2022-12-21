import { HTMLProps, RefObject } from 'react'

export type InputProps = HTMLProps<HTMLInputElement> & {
  as?: undefined
  ref?: ((instance: HTMLInputElement | null) => void) | RefObject<HTMLInputElement> | null | undefined
}
