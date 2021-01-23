import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from 'redux-thunk';
import { AdventureReducer } from './Reducers/AdventureReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {};

const reducers = combineReducers({
  adventuresList:AdventuresReducer
})


export const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk))
)






