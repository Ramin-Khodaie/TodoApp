import axios, {
	AxiosRequestConfig,
	AxiosRequestHeaders,
	AxiosResponse
} from 'axios'
import { API_URL } from 'config'

const httpService = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json'
	}
})

httpService.interceptors.response.use(
	response => {
		return response
	},
	error => {
		console.log(error)
	}
)

async function apiBase<T>(
	url: string,
	options?: AxiosRequestConfig
): Promise<T> {
	const response: AxiosResponse<T> = await httpService(url, options)
	return response.data
}

async function getData<
	T,
	P extends Record<string, unknown> | unknown = unknown
>(url: string, params?: P, headers?: AxiosRequestHeaders): Promise<T> {
	const options: AxiosRequestConfig = {
		headers,
		method: 'GET',
		params
	}
	return await apiBase<T>(url, options)
}

async function postData<Model, Result>(
	url: string,
	data: Model,
	headers: AxiosRequestHeaders
) {
	const options: AxiosRequestConfig = {
		headers,
		method: 'POST',
		data: JSON.stringify(data)
	}

	return await apiBase<Result>(url, options)
}

async function updateData<TModel, TResult>(
	url: string,
	data: TModel,
	headers?: AxiosRequestHeaders
): Promise<TResult> {
	const options: AxiosRequestConfig = {
		method: 'PUT',
		headers,
		data: JSON.stringify(data)
	}

	return await apiBase<TResult>(url, options)
}

async function deleteData(
	url: string,
	headers?: AxiosRequestHeaders
): Promise<void> {
	const options: AxiosRequestConfig = {
		method: 'DELETE',
		headers
	}

	return await apiBase(url, options)
}

export { apiBase, getData, postData, updateData, deleteData }
