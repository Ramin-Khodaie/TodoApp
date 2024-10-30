import  { FC } from 'react'
import { Todo } from 'types/todo.interface'

type Props = Todo
const TodoItem: FC<Props> = ({ title, description, date, status }) => {
	return (
		<div>
			<div>
				<h3>{title}</h3>
				<div>
					<p>{description}</p>
				</div>
      </div>
      {status === 'active' && (
        <div>
          <p>Status: Active</p>
        </div>
      )}
      {status === 'completed' && (
        <div>
          <p>Status: Completed</p>
        </div>
      )}
      <p>Date: {date}</p>
		</div>
	)
}

export { TodoItem }
