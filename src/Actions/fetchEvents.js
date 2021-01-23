export const fetchEvents = (event, adventureId) =>  {
    return (dispatch) => {
        fetch(`/adventures/:${adventureId}/events`)
        