const fetch = require('node-fetch');
const sanitize = require('mongo-sanitize');
const helseforetakModel = require('../Models/helseforetakModel');
async function fetchHelseforetak() {
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
  const clean = sanitize(json);
  clean.forEach(function (obj) {
    let update = new helseforetakModel(obj);
    update.save();
  });
}
module.exports = fetchHelseforetak;
