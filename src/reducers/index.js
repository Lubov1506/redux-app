
const initState = {
    count: 0,
    step: 1
  }
export const reducer = (state = initState, action) =>{
    switch(action.type){
      case 'INCREMENT_COUNT':{
        return {
          ...state,
          count: state.count+state.step
        }
      }
      case 'DECREMENT_COUNT':{
        return {
          ...state,
          count: state.count-state.step
        }
      }
      case 'SET_STEP': {
        return {
          ...state,
          step: action.value
        }
      }
    }
    return {...state}
  }
