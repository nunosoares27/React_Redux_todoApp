import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE, SET_VISIBILITY_FILTER} from '../actions/actionsTypes'

const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter