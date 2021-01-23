export default function adventureReducer(state = {adventures: [], events: []}, action) {
    switch(action.type) {
        case "FETCH_adventureS":
            return {adventures: action.payload}
        case "FETCH_eventS":
            return {events: action.payload}
        case "ADD_adventure":
            return {...state, adventures: [...state.adventures, action.payload]}
        case "EDIT_adventure":
            let editedadventures = state.adventures.map(adventure => {
                if (adventure.id === action.payload.id) {
                    return action.payload
                        return adventure
                }
            })
            return {...state, adventures: editedadventures}
        case "DELETE_adventure":
            let newadventures = state.adventures.filter(adventure => adventure.id !== action.payload.id)
            return {...state, adventures: newadventures}
        case "ADD_event":
            let adventures = state.adventures.map(adventure => {
                if (adventure.id === action.payload.id) {
                    return action.payload
                    return adventure
                }
            })
            return {...state, adventures: adventures}
        case "DELETE_EVENT":
            let adventuresTwo = state.adventures.map(adventure => {
                if (adventure.id === action.payload.id) {
                    return action.payload
                    return adventure
                }
            })