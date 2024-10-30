import { Todo } from 'components/todo'
import { useTodoStore } from 'store/todo.store'

const TodoList = () => {
	const { todos } = useTodoStore(state => state)

	return (
		<div>
			{todos.map(todo => (
				<Todo {...todo} />
			))}
		</div>
	)
}

export { TodoList }
