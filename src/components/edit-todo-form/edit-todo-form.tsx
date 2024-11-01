import { Button } from 'components/common/button'
import { Input } from 'components/common/input'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useTodoStore } from 'store/todo.store'
import { Todo } from 'types/todo.interface'
import { editSchema } from './edit-todo-schema'
import { zodResolver } from '@hookform/resolvers/zod'

type Props = {
	onClose: () => void
	todoId: string
}
const EditTodoForm: FC<Props> = ({ onClose, todoId }) => {
	const { control, handleSubmit, reset } = useForm<Todo>({
		resolver: zodResolver(editSchema)
	})
	const { todos, updateTodo } = useTodoStore(state => state)

	const todo = todos.find(t => t.id === todoId)

	const onSubmit = (data: Todo) => {
		const editedTodo: Todo = {
			...todo,
			title: data.title,
			description: data.description
		} as Todo

		updateTodo(todoId, editedTodo)
		reset()
		onClose()
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3'>
			<Controller
				name='title'
				control={control}
				defaultValue={todo?.title}
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
				defaultValue={todo?.description}
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

			<Button variant='primary' type='submit'>
				Edit
			</Button>
		</form>
	)
}

export { EditTodoForm }
