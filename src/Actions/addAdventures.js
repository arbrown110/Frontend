export const addAdventure = (adventure) => {
    return (dispatch) => {
        fetch(`/adventures`, {
            headers: {
                'Content-Type' : 'application/json',
                'Accept': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(book)
        })
        .then(resp => resp.json()
        .then(adventure => {
            dispatch({type: "ADD_ADVENTURE", playload: adventure})
            alert("Success")
        }))
    };
};