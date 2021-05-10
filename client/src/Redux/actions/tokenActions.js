export const addToken = (payload) => {
  return {
    type: 'ADD_TOKEN',
    payload: payload,
  };
};

export const refreshToken = (payload) => {
  return {
    type: 'REFRESH_TOKEN',
    payload: payload,
  };
};
