import { ComponentBase } from 'components/common/types/component-base'
import { SelectHTMLAttributes } from 'react'

export type OptionProps = {
	value: string
	label: string
}
export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> &
	ComponentBase & {
		onChange?: (value: string) => void
		value?: string
		options: OptionProps[]
	}
