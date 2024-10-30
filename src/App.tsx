import { Button } from 'components/common/button/button'
import { Container } from 'components/common/container'
import { Moon, Plus } from 'components/common/icons'
import { Input } from 'components/common/input'

function App() {
	return (
		<Container>
			<div className='flex flex-col h-screen py-6 px-3'>
				<h1 className='text-4xl font-bold text-center mb-2'>Todo List</h1>
				<div className='flex flex-col gap-3 lg:flex-row'>
					<Input
						placeholder='Add a task...'
						variant='primary'
						size='normal'
						className='lg:w-full'
					/>
					<select className='bg-primary'>
						<option>All</option>
						<option>Active</option>
						<option>Completed</option>
					</select>
					<Button
						variant='primary'
						size='normal'
						shape='square'
						iconOnly
						className='hidden lg:flex'
					>
						<Moon />
					</Button>
				</div>
				<div className='flex flex-1'>tasks will go here...</div>
				<div className='flex justify-between relative'>
					<Button
						variant='primary'
						size='normal'
						shape='square'
						iconOnly
						className='lg:hidden'
					>
						<Moon />
					</Button>
					<Button
						variant='primary'
						shape='circle'
						size='normal'
						iconOnly
						className='lg:absolute lg:bottom-0 lg:right-0'
					>
						<Plus />
					</Button>
				</div>
			</div>
		</Container>
	)
}

export default App
