const fetch = require('node-fetch');
const fetchHelseregion = async () => {
  const baseUrl = process.env.URL_HELSEDIREKTORATET_BASE;
  const endpoint = process.env.HELSEDIREKTORATET_ENDPOINT_2;
  const url = baseUrl + endpoint;
  const key = process.env.KEY;
  const options = {
    method: 'GET',
    headers: { 'Ocp-Apim-Subscription-Key': key },
  };
  const response = await fetch(url, options);
  const json = await response.json();
  console.log(json);
};
// fetchHelseregion();

module.export = fetchHelseregion;
