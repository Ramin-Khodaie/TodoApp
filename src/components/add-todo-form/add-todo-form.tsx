import { Button } from 'components/common/button'
import { Input } from 'components/common/input'
import { FC, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Todo } from 'types/todo.interface'
import { todoSchema } from './todo-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch } from 'react-redux'
import { addTodo } from 'store/slices'

type Props = {
	onClose: () => void
}
const AddTodoForm: FC<Props> = ({ onClose }) => {
	const { control, handleSubmit, reset } = useForm<Todo>({
		resolver: zodResolver(todoSchema)
	})
	const dispatch = useDispatch()

	const onSubmit = (data: Todo) => {
		const todoItem: Todo = {
			...data,
			id: uuidv4(),
			status: 'Incompleted'
		}
		dispatch(addTodo(todoItem))
		reset()
		onClose()
	}

	useEffect(() => {
		return () => {
			reset()
		}
	}, [reset])

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3'>
			<Controller
				name='title'
				control={control}
				defaultValue=''
				render={({ field, fieldState: { error } }) => (
					<>
						<Input
							type='text'
							placeholder='title'
							className='w-full'
							{...field}
						/>
						{error && <p className='text-red-500'>{error.message}</p>}
					</>
				)}
			/>
			<Controller
				name='description'
				control={control}
				defaultValue=''
				render={({ field, fieldState: { error } }) => (
					<>
						<Input
							type='text'
							placeholder='description'
							className='w-full'
							{...field}
						/>
						{error && <p className='text-red-500'>{error.message}</p>}
					</>
				)}
			/>
			<Controller
				name='date'
				control={control}
				defaultValue=''
				render={({ field, fieldState: { error } }) => (
					<>
						<Input type='date' className='w-full' {...field} />
						{error && <p className='text-red-500'>{error.message}</p>}
					</>
				)}
			/>
			<Button variant='primary' type='submit'>
				Add Todo
			</Button>
		</form>
	)
}

export { AddTodoForm }
