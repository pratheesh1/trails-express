import { Handler } from "express";
const logger = require("../config/logger.conf");
const Country = require("../models/country");

// handler functions for trail routes
const getCountries: Handler = async (req, res) => {
  try {
    let countries = await Country.find()
      .select("country country_id -_id")
      .sort({ country: 1 })
      .exec();
    res.status(200).send(countries);
  } catch (e) {
    res.status(500).send("Server encountered an internal error!");
    logger.error(e);
  }
};

const getDetailedCountry: Handler = async (req, res) => {
  try {
    let countries = await Country.find().exec();
    res.status(200).send(countries);
  } catch (e) {
    res.status(500).send("Server encountered an internal error!");
    logger.error(e);
  }
};

const getCountryById: Handler = async (req, res) => {
  try {
    const country = await Country.findOne({ country_id: req.params.id })
      .select("country country_id -_id")
      .exec();
    res.status(200).send(country);
  } catch (e) {
    res.status(500).send("Server encountered an internal error!");
    logger.error(e);
  }
};

export default {
  getCountries,
  getDetailedCountry,
  getCountryById,
};
