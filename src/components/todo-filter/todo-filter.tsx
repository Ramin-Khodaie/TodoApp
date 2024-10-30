import { Button } from 'components/common/button'
import { Moon } from 'components/common/icons'
import { Input } from 'components/common/input'
import { Select } from 'components/common/select/select'

const options = [
	{
		label: 'All',
		value: 'all'
	},
	{
		label: 'Active',
		value: 'active'
	},
	{
		label: 'Completed',
		value: 'completed'
	}
]

const TodoFilter = () => {
	return (
		<div className='flex flex-col gap-3 lg:flex-row lg:justify-between w-full'>
			<Input
				placeholder='Add a task...'
				variant='primary'
				size='normal'
				className='lg:w-full'
			/>
			<div className='lg:flex lg:gap-2 lg:items-center '>
				<Select options={options} />
				<Button
					variant='primary'
					size='normal'
					shape='square'
					iconOnly
					className='hidden lg:flex'
				>
					<Moon />
				</Button>
			</div>
		</div>
	)
}

export { TodoFilter }
