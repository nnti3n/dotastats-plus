import {
    REQUEST_MATCHES, RECEIVE_MATCHES
} from '../actions'

const matches = (state = {
    isFetching: false,
    listMatches: []
}, action) => {
    switch (action.type) {
        case REQUEST_MATCHES:
            return {
                ...state,
                isFetching: true,
            };
        case RECEIVE_MATCHES:
            return {
                ...state,
                isFetching: false,
                listMatches: action.listMatches,
                lastUpdated: action.receivedAt
            };
        default:
            return state
    }
}

export default matches