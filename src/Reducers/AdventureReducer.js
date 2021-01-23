export default function AdventureReducer(state = {adventures: [], events: []}, action) {
    switch(action.type) {
        case "FETCH_ADVENTURES":
            return {adventures: action.payload}
            default:
                return state
}}
    //     case "FETCH_EVENTS":
    //         return {events: action.payload}
    //     case "ADD_ADVENTURE":
    //         return {...state, adventures: [...state.adventures, action.payload]}
    //     case "EDIT_ADVENTURE":
    //         let editedadventures = state.adventures.map(adventure => {
    //             if (adventure.id === action.payload.id) {
    //                 return action.payload
    //             } else {
    //                     return adventure
    //             }
    //         })
    //         return {...state, adventures: editedadventures}
    //     case "DELETE_ADVENTURE":
    //         let newadventures = state.adventures.filter(adventure => adventure.id !== action.payload.id)
    //         return {...state, adventures: newadventures}
    //     case "ADD_EVENT":
    //         let adventures = state.adventures.map(adventure => {
    //             if (adventure.id === action.payload.id) {
    //                 return action.payload
    //             } else {
    //                 return adventure
    //             }
    //         })
    //         return {...state, adventures: adventures}
    //     case "DELETE_EVENT":
    //         let adventuresTwo = state.adventures.map(adventure => {
    //             if (adventure.id === action.payload.id) {
    //                 return action.payload
    //             } else {
    //                 return adventure
    //             }
    //         }

        