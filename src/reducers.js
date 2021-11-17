function userReducer(state, action) {
    switch (action.type) {
        case 'LOGIN':
        case 'REGISTER':
            return {
                'username': action.username,
                'access_token': action.access_token
            }
        case 'LOGOUT':
            return {
                'username': undefined,
                'access_token': undefined
            }
        case 'FETCH_USERS':
            return action.users
        default:
            return state;
    }
}

function todoReducer(state, action) {
    switch (action.type) {
        case 'CREATE_TODO':
            const newTodo = {
                title: action.title,
                description: action.description,
                dateCreated: action.dateCreated,
                completed: action.completed,
                dateCompleted: action.dateCompleted,
                id: action.id,
                author: action.author
            }
            return [newTodo, ...state]
        case 'TOGGLE_TODO':
            return state.map((todo) => {
                if (todo.id === action.id && todo.completed) {
                    return { ...todo, completed: false, dateCompleted: '' }
                } else if (todo.id === action.id && !todo.completed) {
                    return { ...todo, completed: true, dateCompleted: Date(Date.now()).toString() }
                } else {
                    return todo;
                }
            }
            );
        case 'DELETE_TODO':
            return state.filter(todo =>
                todo.id !== action.id);
        case 'FETCH_TODOS':
            return action.todos
        default:
            return state;
    }
}

export default function appReducer(state, action) {
    return {
        user: userReducer(state.user, action),
        users: userReducer(state.users, action),
        todos: todoReducer(state.todos, action)
    }
}