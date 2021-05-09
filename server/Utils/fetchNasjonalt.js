const fetch = require('node-fetch');
const nasjonaltModel = require('../models/nasjonaltModel');
const fetchNasjonalt = async () => {
  const baseUrl = process.env.URL_HELSEDIREKTORATET_BASE;
  const endpoint = process.env.HELSEDIREKTORATET_ENDPOINT_3;
  const url = baseUrl + endpoint;
  const key = process.env.KEY;
  const options = {
    method: 'GET',
    headers: { 'Ocp-Apim-Subscription-Key': key },
  };
  const response = await fetch(url, options);
  const json = await response.json();
  const update = new nasjonaltModel(json);
  await update.save();
};
module.exports = fetchNasjonalt;
