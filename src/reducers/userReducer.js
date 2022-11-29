import ACTION_TYPES from '../actions/actionTypes';

const initState = {
    users:[],
    error: null,
    isFetching: false
}

const userReducer = (state = initState, action) => {
  switch(action.type){
    case ACTION_TYPES.CREATE_USER_REQUEST :{

        return {
            ...state
        }
    }
    case ACTION_TYPES.CREATE_USER_SUCCESS :{

        return{
            ...state
        }
    }
    case ACTION_TYPES.CREATE_USER_ERROR :{

        return{
            ...state
        }
    }
    default:{
        return state
    } 

  }
};
export default userReducer;
