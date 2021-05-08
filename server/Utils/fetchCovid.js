const fetch = require('node-fetch');

module.export = fetchCovid = async (endpoint) => {
  const baseUrl = process.env.URL_HELSEDIREKTORATET_BASE;
  const _endpoint = endpoint;
  const url = baseUrl + _endpoint;
  const key = process.env.KEY;
  const options = {
    method: 'GET',
    headers: { 'Ocp-Apim-Subscription-Key': key },
  };
  const response = await fetch(url, options);
  const json = await response.json();
  return json;
};
