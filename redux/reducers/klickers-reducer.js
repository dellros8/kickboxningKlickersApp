import { UPDATE_KLICKERS } from '../actions/klicker-actions';

export function klickersReducer(state = {}, { type, payload }) {
    switch (type) {
        case UPDATE_KLICKERS:
            return payload;
        default:
            return state
    }
}