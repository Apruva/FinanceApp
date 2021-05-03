import React from 'react';
import { themeAction } from '../../../Redux/actions/themeAction';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness2Icon from '@material-ui/icons/Brightness2';
const ThemeButton = () => {
  const stateThemeMode = useSelector((state) => state.themeReducer.status);
  const dispatch = useDispatch();

  return (
    <Button
      color='primary'
      startIcon={stateThemeMode ? <Brightness2Icon /> : <WbSunnyIcon />}
      onClick={
        stateThemeMode
          ? () =>
              dispatch(
                themeAction({
                  type: 'dark',
                  primary: { main: '#1f2422' },
                  secondary: { main: '#3bf7cf' },
                  tertiary: { main: '#ffffff' },
                  fifthiary: { main: '#3bf7cf' },
                })
              )
          : () =>
              dispatch(
                themeAction({
                  type: 'light',
                  primary: { main: '#404873' },
                  secondary: { main: '#7482cc' },
                  tertiary: { main: '#ffffff' },
                  fifthiary: { main: '#58eda7' },
                })
              )
      }
    ></Button>
  );
};

export default ThemeButton;
