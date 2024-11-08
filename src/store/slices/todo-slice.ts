import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TodoStatus } from 'types/todo.interface'

interface Todo {
	id: string
	title: string
	description: string
	date: string
	status: TodoStatus
}

export interface TodoState {
	todos: Todo[]
	filterStatus: TodoStatus
	searchText: string
}

const initialState: TodoState = {
	todos: [],
	filterStatus: 'All',
	searchText: '',
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload)
    },
    updateTodo: (state, action: PayloadAction<{id: string, todo: Todo}>) => {
      const {todo} = action.payload
      const index = state.todos.findIndex(t => t.id === todo.id)
      state.todos[index] = todo
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      const id = action.payload
      state.todos = state.todos.filter(t => t.id !== id)
    },
    changeStatus: (state, action: PayloadAction<string>) => {
      const id = action.payload
      const todo = state.todos.find(t => t.id === id)
      if (todo) {
        todo.status = todo.status === 'Incompleted' ? 'Completed' : 'Incompleted'
      }
    },
    setFilterStatus: (state, action: PayloadAction<TodoStatus>) => {
      state.filterStatus = action.payload
    },
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload
    }
  }
})

export const { addTodo, updateTodo, deleteTodo, changeStatus, setFilterStatus, setSearchText } = todosSlice.actions

export default todosSlice.reducer