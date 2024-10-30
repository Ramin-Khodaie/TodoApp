import { TodoItem } from 'components/todo'
import { useTodoStore } from 'store/todo.store'

const TodoList = () => {
	const { todos } = useTodoStore(state => state)

	return (
		<div>
			{todos.map(todo => (
				<TodoItem {...todo} />
			))}
		</div>
	)
}

export { TodoList }
