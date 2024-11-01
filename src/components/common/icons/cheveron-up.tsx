import { SVGProps } from 'react'
const CheveronUp = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={9}
		height={5}
		viewBox='0 0 9 5'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			d='M4.63077 1L8 4'
			stroke={props.color ||'#F7F7F7'}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.26154 4L4.63077 1'
			stroke={props.color ||'#F7F7F7'}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
)
export { CheveronUp }
