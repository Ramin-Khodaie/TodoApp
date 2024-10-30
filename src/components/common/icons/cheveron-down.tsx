import { SVGProps } from 'react'
const CheveronDown = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={9}
		height={5}
		viewBox='0 0 9 5'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			d='M4.63077 4L1.26154 1'
			stroke='#F7F7F7'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 1L4.63077 4'
			stroke='#F7F7F7'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
)
export { CheveronDown }
