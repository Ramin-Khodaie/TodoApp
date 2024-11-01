import { SVGProps } from 'react'
const Trash = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={18}
		height={18}
		viewBox='0 0 18 18'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			className={props.className}
			d='M3.87423 7.61505C3.80721 6.74386 4.49604 6 5.3698 6H12.6301C13.504 6 14.1928 6.74385 14.1258 7.61505L13.6065 14.365C13.5464 15.1465 12.8947 15.75 12.1109 15.75H5.88904C5.10523 15.75 4.45357 15.1465 4.39345 14.365L3.87423 7.61505Z'
			stroke='#CDCDCD'
			strokeWidth={1.5}
		/>
		<path
			className={props.className}
			d='M14.625 3.75H3.375'
			stroke='#CDCDCD'
			strokeWidth={1.5}
			strokeLinecap='round'
		/>
		<path
			className={props.className}
			d='M7.5 2.25C7.5 1.83579 7.83577 1.5 8.25 1.5H9.75C10.1642 1.5 10.5 1.83579 10.5 2.25V3.75H7.5V2.25Z'
			stroke='#CDCDCD'
			strokeWidth={1.5}
		/>
		<path
			className={props.className}
			d='M10.5 9V12.75'
			stroke='#CDCDCD'
			strokeWidth={1.5}
			strokeLinecap='round'
		/>
		<path
			className={props.className}
			d='M7.5 9V12.75'
			stroke='#CDCDCD'
			strokeWidth={1.5}
			strokeLinecap='round'
		/>
	</svg>
)
export default Trash
