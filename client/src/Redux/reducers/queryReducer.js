const initState = [
  {
    headline: '/helseforetak',
    comment: 'Statistikk for antall innlagte per helseforetak',
    httpMethod: 'GET',
    queries: '?helseforetak=Helse Møre og Romsdal',
    endpoint: 'https://www.api.domene.com/helseforetak',
  },
  {
    headline: '/helseregion',
    comment: 'Antall innlagte og antall i respirator for helseregioner',
    httpMethod: 'GET',
    queries: '?region=Vest',
    endpoint: 'https://www.api.domene.com/helseregion',
  },
  {
    headline: '/nasjonalt',
    comment: 'Statistikk på nasjonalt nivå',
    httpMethod: 'GET',
    queries: '?dato=2020-03-08 OR ?start=2020-03-08&end=2020-03-20',
    endpoint: 'https://www.api.domene.com/nasjonalt',
  },
];

const queryReducer = (state = initState, action) => {
  switch (action.type) {
    case 'UPDATE_QUERY':
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default queryReducer;
