import { combineReducers } from 'redux'
import { cientistasReducer } from './cientistas'
import { counterReducer } from './counter'

/// é boa pratica criar um alias 
const rootReducer = combineReducers({
  cientistas: cientistasReducer,
  counter: counterReducer
})

export default rootReducer;