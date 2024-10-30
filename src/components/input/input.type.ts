import { ComponentBase } from 'components/types/component-base'
import { InputHTMLAttributes } from 'react'

type TextboxType = 'text' | 'number' | 'email' | 'password'

export type TextboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> &
	ComponentBase & {
		type?: TextboxType
	}
