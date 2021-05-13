const express = require('express');
const router = express.Router();
const sanitize = require('mongo-sanitize');
const Joi = require('joi');
const helseforetakModel = require('../Models/helseforetakModel');
const HELSEFORETAK = require('../Constants/HELSEFORETAK');
const REGIONS = require('../Constants/REGIONS');

const schema = Joi.object({
  helseforetak: Joi.string().equal(...HELSEFORETAK),
  region: Joi.string().equal(...REGIONS),
  info: Joi.string().equal('info'),
}).max(1);

router.get('/', async (req, res) => {
  const clean = sanitize(req.query);
  const { error, value } = schema.validate(clean);
  if (error) return res.status(400).json(error);
  const queryKey = Object.keys(value)[0];
  const queryValue = Object.values(value)[0];

  if (queryKey === 'helseforetak') {
    await helseforetakModel.find(
      { helseforetakNavn: { $eq: queryValue } },
      function (error, result) {
        if (error) return res.status(400).json(error);
        return res.status(200).json(result);
      }
    );
  } else if (queryKey === 'region') {
    await helseforetakModel.find(
      { region: { $eq: queryValue } },
      function (error, result) {
        if (error) return res.status(400).json(error);
        return res.status(200).json(result);
      }
    );
  } else if (queryKey === 'info') {
    try {
      res
        .status(200)
        .json({ helseforetak: [...HELSEFORETAK], region: [...REGIONS] });
    } catch (e) {
      res.status(400).json(e);
    }
  } else {
    await helseforetakModel.find({}, function (error, result) {
      if (error) return res.status(400).json(error);
      return res.status(200).json(result);
    });
  }
});
module.exports = router;
