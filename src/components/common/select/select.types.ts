import { ComponentBase } from 'components/common/types/component-base'
import { SelectHTMLAttributes } from 'react'
import { TodoStatus } from 'types/todo.interface'

export type OptionProps = {
	value: string
	label: TodoStatus
}
export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> &
	ComponentBase & {
		onChange?: (value: string) => void
		value?: string
		options: OptionProps[]
	}
