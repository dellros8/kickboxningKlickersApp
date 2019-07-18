import { UPDATE_PROTOKOLL } from '../actions/protokoll-actions';

export function protokollReducer(state = {}, { type, payload }) {
    switch (type) {
        case UPDATE_PROTOKOLL:
            return payload;
        default:
            return state
    }
}