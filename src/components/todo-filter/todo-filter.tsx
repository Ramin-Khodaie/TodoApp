import { Button } from 'components/common/button'
import { Moon } from 'components/common/icons'
import { Input } from 'components/common/input'
import { Select } from 'components/common/select/select'
import { useDarkMode } from 'hooks/useDarkMode'
import { useTodoStore } from 'store/todo.store'
import { TodoStatus } from 'types/todo.interface'

const options: { label: TodoStatus; value: string }[] = [
	{
		label: 'All',
		value: 'All'
	},
	{
		label: 'Incompleted',
		value: 'Incompleted'
	},
	{
		label: 'Completed',
		value: 'Completed'
	}
]

const TodoFilter = () => {
	const { setFilterStatus, setSearchText } = useTodoStore(state => state)
	const {toggleDarkMode } = useDarkMode();

	return (
		<div className='flex flex-col gap-3 lg:flex-row lg:justify-between w-full'>
			<Input
				placeholder='Search a task...'
				variant='primary'
				size='normal'
				className='lg:w-full'
				onChange={e => setSearchText(e.target.value)}
			/>
			<div className='lg:flex lg:gap-2 lg:items-center '>
				<Select
					options={options}
					value={status}
					onChange={value => {
						setFilterStatus(value as TodoStatus)
					}}
				/>
				<Button
					variant='primary'
					size='normal'
					shape='square'
					iconOnly
					className='hidden lg:flex'
					onClick={toggleDarkMode}
				>
					<Moon />
				</Button>
			</div>
		</div>
	)
}

export { TodoFilter }
