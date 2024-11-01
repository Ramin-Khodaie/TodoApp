import { Container } from 'components/common/container'
import { EditTodoModal } from 'components/edit-todo-modal'
import { Footer } from 'components/footer'
import { TodoFilter } from 'components/todo-filter'
import { TodoList } from 'components/todo-list'

function App() {
	return (
		<Container>
			<div className='flex flex-col h-screen py-6 px-3 dark:bg-base-black'>
				<h1 className='text-4xl font-bold text-center mb-2 dark:text-base-white'>Todo List</h1>
				<TodoFilter />
				<div className='flex flex-1 py-3'>
					<TodoList />
				</div>
				<Footer />
			</div>
			<EditTodoModal />
		</Container>
	)
}

export default App
