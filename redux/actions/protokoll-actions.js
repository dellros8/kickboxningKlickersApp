export const UPDATE_PROTOKOLL = 'protokoll:updateProtokoll'

export function updateProtokoll(newProtokoll) {
    return {
        type: UPDATE_PROTOKOLL,
        payload: newProtokoll
    }
}