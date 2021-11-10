const INITIAL_STATE = {
    count: 0
}

function home(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'COUNTER':
            return {
                ...state,
                data: { counter: action.payload }
            }
        default:
            return state;
    }
}

export default home;