import { FC } from 'react'
import { TextboxProps } from './input.type'
import { tv } from 'tailwind-variants'

const inputVariants = tv({
	variants: {
		variant: {
			primary: 'border border-primary focus:outline-none text-primary',
			secondary: 'border-secondary tex-secondary',
			ghost: 'border-transparent text-base-black',
			accent: 'border-accent text-accent',
			neutral: 'border-neutral text-neutral',
			info: 'border-info text-info',
			success: 'border-success text-success',
			warning: 'border-warning text-warning',
			error: 'border-error text-red-500'
		},
		size: {
			tiny: 'text-xs h-6 px-2 rounded-xs',
			small: 'text-sm h-8 px-3 rounded-sm',
			normal: 'text-base h-12 px-4 rounded-md',
			large: 'text-lg h-16 px-6 rounded-xl'
		}
	},
	defaultVariants: {
		variant: 'ghost',
		size: 'normal'
	}
})

const Input: FC<TextboxProps> = ({
	variant = 'primary',
	type = 'text',
	className,
	size = 'normal',
	...rest
}) => {
	return (
		<input
			type={type}
			className={inputVariants({ variant, size, className })}
			{...rest}
		/>
	)
}

export { Input }
