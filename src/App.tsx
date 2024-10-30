import { Container } from 'components/common/container'
import { Footer } from 'components/footer/footer'
import { TodoFilter } from 'components/todo-filter/todo-filter'

function App() {
	return (
		<Container>
			<div className='flex flex-col h-screen py-6 px-3'>
				<h1 className='text-4xl font-bold text-center mb-2'>Todo List</h1>
				<TodoFilter />
				<div className='flex flex-1 py-3'>tasks will go here...T</div>
				<Footer />
			</div>
		</Container>
	)
}

export default App
