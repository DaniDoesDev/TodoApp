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
        default:
            return state;
    }
}

function usersReducer(state, action) {
    switch (action.type) {
        case 'FETCH_USERS':
            console.log(action.users)
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
                _id: action._id,
                author: action.author
            }
            console.log(newTodo.id)
            return [newTodo, ...state]
        case 'TOGGLE_TODO':
            return state.map((todo) => {
                if (todo._id === action.id && todo.completed) {
                    return { ...todo, completed: false, dateCompleted: '' }
                } else if (todo._id === action.id && !todo.completed) {
                    return { ...todo, completed: true, dateCompleted: Date(Date.now()).toString() }
                } else {
                    return todo;
                }
            }
            );
        case 'DELETE_TODO':
            return state.filter((p) => p._id !== action.id)
        case 'FETCH_TODOS':
            console.log(action.todos)
            return action.todos
        default:
            return state;
    }
}

export default function appReducer(state, action) {
    return {
        user: userReducer(state.user, action),
        users: usersReducer(state.users, action),
        todos: todoReducer(state.todos, action)
    }
}