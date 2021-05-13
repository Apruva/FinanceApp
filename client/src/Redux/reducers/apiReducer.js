const initState = {
  fetching: false,
  success: false,
  error: null,
  helseforetak: null,
  regioner: null,
  info: null,
  helseforetakData: null,
  helseregionData: null,
  nasjonaltData: null,
};
const apiReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCHING':
      return {
        ...state,
        fetching: !state.fetching,
      };
    case 'SUCCESS':
      return {
        ...state,
        // success: !state.success,
        // error: null,
        // fetching: !state.fetching,
        info: { ...action.payload },
      };
    case 'ERROR':
      return {
        ...state,
        success: !state.success,
        fetching: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default apiReducer;
