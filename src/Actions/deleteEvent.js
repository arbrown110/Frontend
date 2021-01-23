export const deleteEvent = (adventureId, eventId) => {
    return (dispatch) => {
        return fetch(`/adventures/${adventureId}/events/${eventId}`, {
            method: 'DELETE'
        })
        .then(resp => resp.json())
        .then(adventure => dispatch({type: 'DELETE_EVENT', payload: adventure}))
    }
    
};