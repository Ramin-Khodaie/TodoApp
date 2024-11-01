import { FC, useEffect, useRef, useState } from 'react'
import { SelectProps } from './select.types'
import { tv } from 'tailwind-variants'
import { Button } from '../button'
import { CheveronUp } from '../icons'
import { cn } from 'lib/utils'
import { useTodoStore } from 'store/todo.store'

const buttonVariants = tv({
	base: 'rounded-md py-2 px-4 outline-none w-full flex items-center justify-between min-w-48',
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
		}
	},
	defaultVariants: {
		variant: 'primary'
	}
})

const dropdownStyles = tv({
	base: 'absolute z-10 mt-1 w-full bg-base-white rounded-lg shadow-lg border border-primary opacity-0 transition-opacity duration-450 ease-in-out visible opacity-100'
})

const optionStyles = tv({
	base: 'px-4 py-2 cursor-pointer hover:bg-primary/10  text-primary transition'
})

const Select: FC<SelectProps> = ({
	variant = 'primary',
	options,
	onChange
}) => {
	const { filterStatus} = useTodoStore(state => state)
	const [isOpen, setIsOpen] = useState(false)
	const [status, setStatus] = useState(filterStatus)

	const selectRef = useRef<HTMLDivElement>(null)

	const handleSelect = (value: string) => {
		onChange?.(value)
		setIsOpen(false)
	}

	const handleClickOutside = (event: MouseEvent) => {
		if (
			selectRef.current &&
			!selectRef.current.contains(event.target as Node)
		) {
			setIsOpen(false)
		}
	}

	useEffect(() => {
		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside)
		} else {
			document.removeEventListener('mousedown', handleClickOutside)
		}
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [isOpen])
	return (
		<div className='relative' ref={selectRef}>
			<Button
				shape='wide'
				className={buttonVariants({ variant })}
				onClick={() => setIsOpen(!isOpen)}
			>
				{status}
				<CheveronUp
					width={16}
					height={16}
					className={`transform transition-transform duration-450 ${
						isOpen ? '-rotate-180' : 'rotate-0'
					}`}
				/>
			</Button>
			<div
				className={cn(
					dropdownStyles(),
					isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
				)}
			>
				{options.map(option => (
					<div
						key={option.value}
						className={optionStyles()}
						onClick={() => {
							handleSelect(option.value)
							setStatus(option.label)
						}}
					>
						{option.label}
					</div>
				))}
			</div>
		</div>
	)
}

export { Select }
