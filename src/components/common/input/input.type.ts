import { ComponentBase } from 'components/common/types/component-base'
import { InputHTMLAttributes } from 'react'

type TextboxType = 'text' | 'number' | 'email' | 'password' | 'date' | 'checkbox'

export type TextboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> &
	ComponentBase & {
		type?: TextboxType
	}
