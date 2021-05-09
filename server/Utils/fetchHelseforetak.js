const fetch = require('node-fetch');
const helseforetakModel = require('../Models/helseforetakModel');
const fetchHelseforetak = async () => {
  const baseUrl = process.env.URL_HELSEDIREKTORATET_BASE;
  const endpoint = process.env.HELSEDIREKTORATET_ENDPOINT_1;
  const url = baseUrl + endpoint;
  const key = process.env.KEY;
  const options = {
    method: 'GET',
    headers: { 'Ocp-Apim-Subscription-Key': key },
  };
  const response = await fetch(url, options);
  const json = await response.json();
  const update = new helseforetakModel(json);
  await update.save();
};
module.exports = fetchHelseforetak;
