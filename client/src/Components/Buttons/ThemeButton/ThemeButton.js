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
      color='secondary'
      startIcon={stateThemeMode ? <Brightness2Icon /> : <WbSunnyIcon />}
      onClick={
        stateThemeMode
          ? () =>
              dispatch(
                themeAction({
                  type: 'dark',
                  primary: { main: '#000000' },
                  secondary: { main: '#ffffff' },
                  tertiary: { main: '#3bf7cf' },
                  fifthiary: { main: '#58eda7' },
                })
              )
          : () =>
              dispatch(
                themeAction({
                  type: 'light',
                  primary: { main: '#404873' },
                  secondary: { main: '#ffffff' },
                  tertiary: { main: '#7482cc' },
                  fifthiary: { main: '#58eda7' },
                })
              )
      }
    >
      {stateThemeMode ? 'Dark' : 'Light'}
    </Button>
  );
};

export default ThemeButton;
