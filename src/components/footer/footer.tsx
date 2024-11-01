import { AddTodoModal } from 'components/add-todo-modal'
import { Button } from 'components/common/button'
import { Moon } from 'components/common/icons'
import { useDarkMode } from 'hooks/useDarkMode'

const Footer = () => {
	const { toggleDarkMode } = useDarkMode()
	return (
		<div className='flex justify-between relative'>
			<Button
				variant='primary'
				size='normal'
				shape='square'
				iconOnly
				className='lg:hidden'
				onClick={toggleDarkMode}
			>
				<Moon />
			</Button>
			<AddTodoModal />
		</div>
	)
}

export { Footer }
