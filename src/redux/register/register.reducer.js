import {RegisterTypes} from './register.types'

const INITIAL_STATE = {
      userDetails: null,
      registerIsPosting: true,
      registerMessage: null,
      registerStatus: null,
      registerError: null,
      registerErrorMessage: null

}

const registerReducer = (state = INITIAL_STATE, action) => {
      switch(action.type) {
            case RegisterTypes.REGISTER_USER_START:
                  return {
                        ...state,
                        userDetails: action.payload,
                  }

            case RegisterTypes.REGISTER_USER_SUCCESS:
                  console.log(action.payload)
                  // console.log(action)
                  return {
                        ...state,
                        registerMessage: action.payload.message,
                        registerStatus: action.payload.status,
                        registerIsPosting: false
                  }  
            case RegisterTypes.REGISTER_USER_FAILURE:
                  return {
                        ...state,
                        registerError: action.payload.error,
                        registerErrorMessage: action.payload.errorMessage
                  }     
            default:
                  return state;
      }
};

export default registerReducer;