import { FC } from 'react'
import { ButtonProps } from './button.types'
import { cn } from 'lib/utils'
import { tv } from 'tailwind-variants'

export const buttonVariants = tv({
	variants: {
		variant: {
			primary: 'bg-primary text-base-white',
			secondary: 'bg-secondary text-base-white',
			accent: 'bg-accent text-base-white',
			neutral: 'bg-neutral text-base-white',
			ghost: 'bg-transparent text-base-black',
			info: 'bg-info text-base-white',
			success: 'bg-success text-base-white',
			warning: 'bg-warning text-base-white',
			error: 'bg-error text-base-white'
		},
		size: {
			tiny: 'text-xs h-6 px-2',
			small: 'text-sm h-8 px-3',
			normal: 'text-base h-12 px-4',
			large: 'text-lg h-16 px-6'
		},
		shape: {
			default: 'rounded-md',
			wide: 'rounded-xl',
			full: 'rounded-full',
			square: 'rounded-md w-12 h-12',
			circle: 'rounded-full w-12 h-12'
		},
		isOutline: {
			true: 'border border-base-black',
			false: 'border-transparent'
		},
		isDisabled: {
			true: 'opacity-50 cursor-not-allowed',
			false: ''
		},
		isLoading: {
			true: 'cursor-not-allowed',
			false: ''
		},
		iconOnly: {
			true: 'flex justify-center items-center',
			false: ''
		}
	},
	defaultVariants: {
		variant: 'neutral',
		size: 'normal',
		shape: 'default',
		isOutline: false,
		isDisabled: false,
		isLoading: false
	}
})

const Button: FC<ButtonProps> = ({
	variant,
	size = 'normal',
	isDisabled = false,
	isOutline = false,
	shape = 'default',
	isLoading = false,
	loadingType = 'spinner',
	loadingText = 'Loading...',
	type = 'button',
	isLink = false,
	iconOnly = false,
	icon,
	children,
	className,
	animatedIcon = false,
	...rest
}) => {
	return (
		<button
			type={type}
			disabled={isDisabled}
			{...rest}
			className={cn(
				buttonVariants({
					variant,
					size,
					shape,
					isDisabled,
					isLoading,
					iconOnly,
					className
				})
			)}
		>
			{isLoading ? loadingText : children}
		</button>
	)
}

export { Button }
