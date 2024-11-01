import { create } from 'zustand'
import { Todo, TodoStatus } from 'types/todo.interface'
import { persist, createJSONStorage } from 'zustand/middleware'

type TodoState = {
	todos: Todo[]
	filterStatus: TodoStatus,
	searchText: string
}

type TodoActions = {
	addTodo: (todo: Todo) => void
	updateTodo: (id: string, todo: Todo) => void
	deleteTodo: (id: string) => void
	changeStatus: (id: string) => void
	setFilterStatus: (status: TodoStatus) => void
	setSearchText: (text: string) => void
}

type TodoStore = TodoState & TodoActions
const useTodoStore = create<TodoStore>()(
	persist(
		set => ({
			todos: [],
			filterStatus: 'All',
			searchText: '',
			addTodo: todo => set(state => ({ todos: [...state.todos, todo] })),
			updateTodo: (id, todo) =>
				set(state => ({
					todos: state.todos.map(t => (t.id === id ? todo : t))
				})),
			deleteTodo: id =>
				set(state => ({ todos: state.todos.filter(t => t.id !== id) })),
			changeStatus: id =>
				set(state => ({
					todos: state.todos.map(t =>
						t.id === id
							? { ...t, status: t.status === 'Incompleted' ? 'Completed' : 'Incompleted' }
							: t
					)
				})),
			setFilterStatus: status => set(_state => ({ filterStatus: status })),
			setSearchText: text => set(_state => ({ searchText: text }))
		}),
		{ name: 'todo-store', storage: createJSONStorage(() => localStorage) }
	)
)

export { useTodoStore }
