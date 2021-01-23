export const addEvent = (event, adventureId) => {
    return (dispatch) => {
        fetch(`/adventures/${adventureId}/events`, {
            headers: {
                'Content-Type' : 'application/json',
                'Accept': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(event)
        })
        .then(resp => resp.json()
        .then(adventure => {
            dispatch({type: "ADD_EVENT", playload: adventure})
            alert("SuccessFULLY ADDED")
        }))
    };
};