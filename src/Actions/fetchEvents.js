export function Fetchadventures ()  {
    return (dispatch) => {
        fetch(`/adventures`)
        .then(resp => resp.json())
        .then(adventuresData => dispatch({
            type: 'LOADING_ADVENTURES',
            payload: adventuresData
        }));
    };
}