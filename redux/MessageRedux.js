export const types = {
  ATTEMPT_COMPOSE_MESSAGE: 'ATTEMPT_COMPOSE_MESSAGE',
  COMPOSE_MESSAGE_SUCCESS: 'COMPOSE_MESSAGE_SUCCESS',
  COMPOSE_MESSAGE_FAILED: 'COMPOSE_MESSAGE_FAILED',
  SET_VALIDATION_ERROR: 'SET_VALIDATION_ERROR',
  FETCH_MESSAGES: 'FETCH_MESSAGES',
  FETCH_MESSAGES_SUCCESS: 'FETCH_MESSAGES_SUCCESS',
  FETCH_MESSAGES_FAILED: 'FETCH_MESSAGES_FAILED'
}


const actions = {
  attemptComposeMessage(){
    return {
      type: types.ATTEMPT_COMPOSE_MESSAGE
    }
  },
  composeMessageSuccess(message){
    return {
      type: types.COMPOSE_MESSAGE_SUCCESS,
      message
    }
  },
  composeMessageFailure(error){
    return {
      type: types.COMPOSE_MESSAGE_FAILED,
      error
    }
  },
  setValidationError(error){
    return {
      type: types.SET_VALIDATION_ERROR,
      error
    }
  },


}

export default actions;

const initialState = {
  error: null,
  fetching: false,
  messages: [],
  title: 'initial message'
}
export const reducer = (state=initialState, action) => {

  switch (action.type) {
    case types.ATTEMPT_COMPOSE_MESSAGE :
      return {...state, fetching: true, error: null}
    case types.COMPOSE_MESSAGE_SUCCESS :
      return Object.assign({...state},
        {
          fetching: false,
          error: null,
          messages: state.messages.concat(action.message)
        })
    case types.COMPOSE_MESSAGE_FAILED :
      return {...state, fetching: false, error: action.error}
    case types.SET_VALIDATION_ERROR :
      return {...state, error: action.error}
    case types.FETCH_MESSAGES_SUCCESS :
      return {...state, messages: action.messages}
    case types.FETCH_MESSAGES_FAILED :
      return {...state, error: action.error}
    default:
      return state;
  }
}