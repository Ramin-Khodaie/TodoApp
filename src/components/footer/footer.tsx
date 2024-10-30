import { AddTodoModal } from 'components/add-todo-modal/add-todo-modal'
import { Button } from 'components/common/button'
import { Moon, Plus } from 'components/common/icons'

const Footer = () => {
	return (
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
			<AddTodoModal />
		</div>
	)
}

export { Footer }
