import { ButtonHTMLAttributes } from 'react'

import { ComponentBase } from 'components/types/component-base'
import { LoadingBehavior } from 'components/types/loading-behavior.type'

export type ButtonShape = 'default' | 'wide' | 'full' | 'square' | 'circle'
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
	ComponentBase &
	LoadingBehavior & {
		isOutline?: boolean
		shape?: ButtonShape
		isLink?: boolean
		iconOnly?: boolean
		icon?: React.ReactNode
		animatedIcon?: boolean
	}
