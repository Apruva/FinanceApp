const initState = {
  status: true,
  palette: {
    type: 'light',
    primary: { main: '#404873' },
    secondary: { main: '#7482cc' },
    tertiary: { main: '#ffffff' },
    fifthiary: { main: '#58eda7' },
  },
};
const themeReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SWITCH_THEME':
      return {
        ...state,
        status: !state.status,
        palette: { ...action.payload },
      };
    default:
      return state;
  }
};
export default themeReducer;
