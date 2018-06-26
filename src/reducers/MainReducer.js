import { combineReducers } from 'redux'
import todos from './TodoReducer'
import visibilityFilter from './FilterReducer'

export default combineReducers({
  todos,
  visibilityFilter
})