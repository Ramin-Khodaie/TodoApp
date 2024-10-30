import  { FC } from 'react'
import { Todo } from 'types/todo.interface'

type Props = Todo
const Todo: FC<Props> = ({ title, description, date, status }) => {
	return (
		<div>
			<div>
				<h3>{title}</h3>
				<div>
					<p>{description}</p>
				</div>
			</div>
		</div>
	)
}

export { Todo }
