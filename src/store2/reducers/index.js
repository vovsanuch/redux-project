import {combineReducers} from 'redux'

import {todos} from './todos-reducer'
import {counter} from './counter-reducer'

export const rootReducer = combineReducers({
    todos,
    counter
})