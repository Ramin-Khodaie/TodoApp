import { deleteData, getData, postData } from 'lib/http-service'

export const getToDo = () => {
	const url = '/tasks'
	return getData(url)
}

export const createToDo = (data: any) => {
	const url = '/tasks'
	return postData(url, data)
}

export const updateToDo = (id: string, data: any) => {
	const url = `tasks/${id}`
	return postData(url, data)
}

export const deletToDo = (id: string) => {
	const url = `tasks/${id}`
	return deleteData(url)
}
