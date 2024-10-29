import { cn } from 'lib/utils'
import { HTMLProps, PropsWithChildren } from 'react'

type ContainerProps = PropsWithChildren & HTMLProps<HTMLDivElement>

const Container = (props: ContainerProps) => {
	return (
		<div {...props} className={cn('mx-auto max-w-3xl', props.className)}>
			{props.children}
		</div>
	)
}

export { Container }
