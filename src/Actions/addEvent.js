export const addEvent = (event, adventureId) => {
    return (dispatch) => {
        fetch(`/adventures/${adventureId}/events`, {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(event)
        })
        .then(resp => resp.json()
        .then(adventure => {
            dispatch({type: "ADD_EVENT", playload: adventure})
            alert("SuccessFULLY ADDED")
        }))
    };
};