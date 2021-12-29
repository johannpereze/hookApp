
export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case "add":
            return [...state, action.payload];
        case 'delete':
            return state.filter(todo => todo.id !== action.payload)
        case 'toggle':
            const indexToToggle = state.findIndex((e) => e.id === action.payload)
            const newState = [...state];
            newState[indexToToggle].done = !newState[indexToToggle].done
            return newState

        default:
            return state
    }
}