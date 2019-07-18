export const UPDATE_KLICKERS = 'klickers:updateKlickers'

export function updateKlickers(newKlickers) {
    return {
        type: UPDATE_KLICKERS,
        payload: newKlickers
    }
}