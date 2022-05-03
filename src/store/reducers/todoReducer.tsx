import {createTodo, getAllBoards} from "../../service/todoService";

/**
 * 상태 변화의 2가지
 * sync
 * 	setCount
 * async
 * 	request - pending - success
 * 										- failure
 */


const REQUEST_ALL_TODOS = 'REQUEST_ALL_TODOS'
const SUCCESS_ALL_TODOS = 'SUCCESS_ALL_TODOS'
const FAILURE_ALL_TODOS = 'FAILURE_ALL_TODOS'
const SET_ALL_TODOS = 'SET_ALL_TODOS'

const REQUEST_ADD_TODO = 'REQUEST_ADD_TODO'
const SUCCESS_ADD_TODO = 'SUCCESS_ADD_TODO'
const FAILURE_ADD_TODO = 'FAILURE_ADD_TODO'

const setAllTodos = (payload: any) => {
	return {
		type: SUCCESS_ALL_TODOS,
		payload
	}
}
export const requestAllTodos: any = () => (dispatch: any) => {
	dispatch({ type: REQUEST_ALL_TODOS });
	getAllBoards().then(res => dispatch(setAllTodos(res))).catch(() => dispatch({ type: FAILURE_ALL_TODOS }))
}

export const requestAddTodo: any = (description: string | undefined) => (dispatch: any) => {
	dispatch({ type: REQUEST_ADD_TODO });
	return createTodo(description).then(() => dispatch(requestAllTodos())).catch(() => dispatch({ type: FAILURE_ADD_TODO }))
}

const INITIAL_STATE = {
	items: []
}

export const todoReducer = (state = INITIAL_STATE, action: any) => {
	switch (action.type) {
		case SUCCESS_ALL_TODOS:
		case SET_ALL_TODOS:
			return {
				...state,
				items: action.payload
			}
		default:
			return state
	}
}
