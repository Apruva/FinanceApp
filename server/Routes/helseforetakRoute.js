const express = require('express');
const router = express.Router();
const sanitize = require('mongo-sanitize');
const Joi = require('joi');
const helseforetakModel = require('../Models/helseforetakModel');
const HELSEFORETAK = require('../Constants/HELSEFORETAK');
const customError = {
  error: 'something went wrong',
  validKeyValues: [...HELSEFORETAK],
};
router.get('/', async (req, res, next) => {
  const clean = sanitize(req.query);
  const helseforetak = sanitize(clean.helseforetak);
  const region = sanitize(clean.region);
  const help = sanitize(clean.help);
  console.log(helseforetak, region, help);
  if (helseforetak) {
    console.log(helseforetak);
    helseforetakModel.find(
      { helseforetakNavn: { $eq: helseforetak } },
      function (error, result) {
        if (error) return res.json(customError);
        return res.json(result);
      }
    );
  } else if (region) {
    helseforetakModel.find(
      { region: { $eq: region } },
      function (error, result) {
        if (error) return res.json(customError);
        return res.json(result);
      }
    );
  } else if (help) {
    const avaliableHelseforetak = [...HELSEFORETAK];
    return res.status(200).json({ helseforetak: avaliableHelseforetak });
  } else {
    helseforetakModel.find({}, function (error, result) {
      if (error)
        return res.json({
          error:
            'Something went from, apply the info key to get an overview of avaliable helseforetak',
        });
      return res.json(result);
    });
  }
});
module.exports = router;
