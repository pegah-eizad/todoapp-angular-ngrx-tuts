import Todo from '../../models/todo.model';
import { initializeTodoState, TodoListState, TodoState } from './todo.state';
import * as TodoActions from './todo.action';

export type Action = TodoActions.All;

const defaultTodoStates: TodoState[] = [
    {
        ...Todo.generateMockTodo(),
        ...initializeTodoState()
    }
]


const defaultState: TodoListState = {
    todos: defaultTodoStates,
    loading: false,
    pending: 0
}

export function TodoReducer(state = defaultState, action: Action) {
    console.log(state, action); //TEST
    switch (action.type) {
        case TodoActions.GET_TODOS: {
            return { ...state, loaded: false, loading: true };
        }
        case TodoActions.GET_TODOS_SUCCESS: {
            return {
                ...state,
                todos: [
                    ...action.payload,
                    defaultTodoStates[0]
                ],
                loading: false
            };
        }

    }
}