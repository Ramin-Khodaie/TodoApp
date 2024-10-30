import { create } from 'zustand'
import { Todo } from 'types/todo.interface'
import { persist, createJSONStorage } from 'zustand/middleware'

type TodoState = {
	todos: Todo[]
}

type TodoActions = {
	addTodo: (todo: Todo) => void
	updateTodo: (id: string, todo: Todo) => void
	deleteTodo: (id: string) => void
	changeStatus: (id: string) => void
	filterTodos: (status: 'active' | 'completed') => void
}

type TodoStore = TodoState & TodoActions
const useTodoStore = create<TodoStore>()(
	persist(
		set => ({
			todos: [],
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
							? { ...t, status: t.status === 'active' ? 'completed' : 'active' }
							: t
					)
				})),
			filterTodos: status =>
				set(state => ({ todos: state.todos.filter(t => t.status === status) }))
		}),
		{ name: 'todo-store', storage: createJSONStorage(() => localStorage) }
	)
)

export { useTodoStore }
