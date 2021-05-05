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
                  primary: { main: '#1f202e' },
                  secondary: { main: '#ffffff' },
                  tertiary: { main: '#3bf7cf' },
                  fortiary: { main: '#363636' },
                  fifthiary: { main: '#292842' },
                  sixthiary: { main: '#000000' },

                  background: { default: '#121212' },
                })
              )
          : () =>
              dispatch(
                themeAction({
                  type: 'light',
                  primary: { main: '#393C75' },
                  secondary: { main: '#ffffff' },
                  tertiary: { main: '#7482cc' },
                  fortiary: { main: '#31348c' },
                  fifthiary: { main: '#2b296e' },
                  sixthiary: { main: '#ffffff' },
                  background: { default: '#FFFFFF' },
                })
              )
      }
    >
      {stateThemeMode ? 'Dark' : 'Light'}
    </Button>
  );
};

export default ThemeButton;
