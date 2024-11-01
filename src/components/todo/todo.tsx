import Edit from 'components/common/icons/edit'
import Trash from 'components/common/icons/trash'
import { Input } from 'components/common/input'
import { FC, useState } from 'react'
import { useTodoStore } from 'store/todo.store'
import { Todo } from 'types/todo.interface'
import { useQueryState } from 'nuqs'
import { CheveronUp } from 'components/common/icons'

type Props = Todo

const TodoItem: FC<Props> = ({ id, title, description, date, status }) => {
	const [, setTodoId] = useQueryState('id')
	const [expand, setExpand] = useState(false)

	const { deleteTodo, changeStatus } = useTodoStore(state => state)

	return (
		<div className='w-full p-3 border-b border-gray-200 flex flex-col'>
			<div className='flex flex-row justify-between items-center'>
				<div className='flex flex-row items-center'>
					<Input
						type='checkbox'
						checked={status === 'Completed'}
						className='mr-2'
						onChange={() => changeStatus(id)}
					/>
					<h3
						className={`dark:text-base-white text-base-black ${
							status === 'Completed' ? 'line-through' : ''
						}`}
					>
						{title}
					</h3>
				</div>
				<div className='flex flex-row items-center gap-2'>
					<span
						className='mr-2 cursor-pointer'
						onClick={() => setExpand(!expand)}
					>
						<CheveronUp
							width={16}
							height={16}
							color={expand ? '#6C63FF' : '#CDCDCD'}
							className={`transform transition-transform duration-450 ${
								expand ? '-rotate-180 ' : 'rotate-0'
							}`}
						/>
					</span>
					<span
						className='cursor-pointer'
						onClick={() => {
							setTodoId(id)
						}}
					>
						<Edit className='group group-hover:stroke-primary' />
					</span>
					<span className=' cursor-pointer' onClick={() => deleteTodo(id)}>
						<Trash className='group group-hover:stroke-red-600 ' />
					</span>
				</div>
			</div>
			<div
				className={`max-h-0 opacity-0 transition-opacity duration-500 [transition:500ms_max-height_ease] ${
					expand && 'max-h-12 opacity-100'
				}`}
			>
				<span className='text-base-black/50 dark:text-base-white'>
					Description:
					<div className='text-sm ml-1 flex justify-between'>
						<span>{description}</span>
						<span>{date}</span>
					</div>
				</span>
			</div>
		</div>
	)
}

export { TodoItem }
