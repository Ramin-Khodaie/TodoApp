import { z } from 'zod'

const todoSchema = z.object({
	title: z.string().min(1, { message: 'Title is required' }),
	description: z.string().min(1, { message: 'Description is required' }),
	date: z.string().refine(date => !isNaN(Date.parse(date)), {
		message: 'Invalid date format'
	})
})

export { todoSchema }
