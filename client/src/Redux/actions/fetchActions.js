export const fetchStart = () => {
  return {
    type: 'FETCHING',
  };
};

export const fetchSuccess = (payload) => {
  return {
    type: 'SUCCESS',
    payload: payload,
  };
};
export const fetchFail = (payload) => {
  return {
    type: 'FAIL',
    payload: payload,
  };
};
