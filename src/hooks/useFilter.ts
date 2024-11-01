import { useEffect, useState } from 'react'
import { useTodoStore } from 'store/todo.store'
import { Todo } from 'types/todo.interface'

const useFilter = () => {
	const [filteredTodos, setFilteredTodos] = useState<Todo[]>([])
	const { filterStatus, todos, searchText } = useTodoStore(state => state)

	useEffect(() => {
		if (filterStatus === 'All') {
			return setFilteredTodos(todos.filter(t => t.title.includes(searchText)))
		}
		setFilteredTodos(
			todos.filter(
				t => t.status === filterStatus && t.title.includes(searchText)
			)
		)
	}, [filterStatus, todos, searchText])

	return { filteredTodos }
}

export { useFilter }
