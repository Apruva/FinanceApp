const initState = {
  accessToken: null,
};
const userReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        ...state,
        accessToken: action.payload,
      };

    default:
      return state;
  }
};
export default userReducer;
