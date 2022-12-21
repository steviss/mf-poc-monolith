import { HTMLProps, RefObject } from 'react'

export type ButtonProps = HTMLProps<HTMLButtonElement> & {
  as?: undefined
  type?: 'submit' | 'reset' | 'button' | undefined
  ref?: ((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null | undefined
}
