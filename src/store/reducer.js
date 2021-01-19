import {combineReducers} from "redux";

function reducer(state= {}, action) {
  switch(action.type) {
    case "add":
      return {
        state
      }
    default:
      return state
  }
}

export default combineReducers({
  reducer
})