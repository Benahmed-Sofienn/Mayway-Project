
// import combine reducers
import {combineReducers} from 'redux'

import userReducer  from './userReducer'
import transportReducer  from './transportReducer'
import commentReducer  from './commentReducer'


const rootReducer = combineReducers ({userReducer, transportReducer,commentReducer })

export default rootReducer