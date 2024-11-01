import { AddTodoForm } from 'components/add-todo-form'
import { Button } from 'components/common/button'
import { Plus } from 'components/common/icons'
import { FC, Fragment, useState } from 'react'

type Props = {}

const AddTodoModal: FC<Props> = () => {
	const [open, setOpen] = useState(false)
	return (
		<Fragment>
			<Button
				variant='primary'
				shape='circle'
				size='normal'
				iconOnly
				className='lg:absolute lg:bottom-0 lg:right-0'
				onClick={() => setOpen(true)}
			>
				<Plus />
			</Button>
			<div
				className={`fixed inset-0 z-50 flex items-center justify-center px-3  ${
					open ? 'opacity-100' : 'opacity-0 pointer-events-none'
				} transition-opacity duration-300`}
			>
				<div
					className='fixed inset-0 bg-black opacity-50'
					onClick={() => setOpen(false)}
				/>
				<div
					className={`bg-white dark:bg-base-black rounded-lg shadow-lg p-6 max-w-sm w-full z-10 transform transition-transform duration-300 ${
						open ? 'scale-100' : 'scale-95'
					}`}
				>
					{open && (
						<>
							<h2 className='text-xl dark:text-base-white font-semibold mb-4 text-center'>
								Add Todo
							</h2>
							<AddTodoForm onClose={() => setOpen(false)} />
						</>
					)}
				</div>
			</div>
		</Fragment>
	)
}

export { AddTodoModal }
