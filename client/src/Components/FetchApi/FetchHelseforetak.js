import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import {
  fetchStart,
  fetchSuccess,
  fetchFail,
} from '../../Redux/actions/fetchActions';

export const FetchHelseforetak = (query, accessToken) => {
  return async (dispatch) => {
    dispatch(fetchStart());
    const opts = {
      method: 'GET',

      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    try {
      const _url = process.env.REACT_APP_SERVER_URL;
      const url = _url + query;
      console.log(url);
      const request = await fetch(url, opts);

      const response = await request.json();

      dispatch(fetchSuccess(response));
    } catch (e) {
      dispatch(fetchFail(e));
    }
  };
};
