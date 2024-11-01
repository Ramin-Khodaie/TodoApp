import { EditTodoForm } from 'components/edit-todo-form'
import { useQueryState } from 'nuqs'
import { useEffect, useState } from 'react'

const EditTodoModal = () => {
	const [todoId, setTodoId] = useQueryState('id')
	const [open, setOpen] = useState(false)

	const handlClose = () => {
		setTodoId(null)
		setOpen(false)
	}

	useEffect(() => {
		if (todoId) setOpen(true)
	}, [todoId])

	return (
		<div
			className={`fixed inset-0 z-50 flex items-center justify-center px-3 ${
				open ? 'opacity-100' : 'opacity-0 pointer-events-none'
			} transition-opacity duration-300`}
		>
			<div className='fixed inset-0 bg-black opacity-50' onClick={handlClose} />
			<div
				className={`bg-white rounded-lg shadow-lg p-6 max-w-sm w-full z-10 transform transition-transform duration-300 ${
					open ? 'scale-100' : 'scale-95'
				}`}
			>
				{open && (
					<>
						<h2 className='text-xl font-semibold mb-4 text-center'>
							Edit Todo
						</h2>
						<EditTodoForm onClose={handlClose} todoId={todoId || ''} />
					</>
				)}
			</div>
		</div>
	)
}

export { EditTodoModal }
