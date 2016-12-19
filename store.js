import { combineReducers,createStore } from 'redux'

const reducers =  combineReducers({
  message:require('./redux/MessageRedux').reducer
})

export default createStore(reducers)
