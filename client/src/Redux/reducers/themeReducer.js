const initState = {
  status: true,
  palette: {
    type: 'light',
    primary: { main: '#404873' },
    secondary: { main: '#ffffff' },
    tertiary: { main: '#7482cc' },
    fortiary: { main: '#6c6ead' },
    background: { paper: '#ffffff' },
  },
  typography: {
    fontFamily: 'Segoe UI',
    fontWeight: 200,
    fontSize: 13,
    h3: {
      fontFamily: 'Segoe UI',
      fontWeight: 400,
      fontSize: 30,
    },
  },
  fullWidth: {
    maxWidth: 300,
  },
  props: {
    MuiButton: {
      color: 'primary',
    },
  },
  spacing: 5,
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
        disableRipple: true,
        color: 'primary',
        backgroundColor: 'primary',
      },
    },
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
