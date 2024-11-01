
export type TodoStatus = 'All' | 'Incompleted' | 'Completed'
export interface Todo {
	id: string
	title: string
	description: string
	date: string
	status: TodoStatus
}
