import { combineReducers } from 'redux'
import { categoryesReducer } from './auditories.reducer'


export const rootReducer = combineReducers({
  auditories: categoryesReducer,
})
