const initState = {
  token: null,
};
const tokenReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_TOKEN':
      return {
        ...state,
        token: action.payload,
      };
    case 'REFRESH_TOKEN':
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};
export default tokenReducer;
