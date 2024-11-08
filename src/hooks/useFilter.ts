import { useEffect, useState } from 'react'
import { Todo } from 'types/todo.interface'
import { useSelector } from 'react-redux'
import { RootState } from 'store'

const useFilter = () => {
	const [filteredTodos, setFilteredTodos] = useState<Todo[]>([])
	// const { filterStatus, todos, searchText } = useTodoStore(state => state)
	const { filterStatus, todos, searchText } = useSelector(
		(state: RootState) => state
	)

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
