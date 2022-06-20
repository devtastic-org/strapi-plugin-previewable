"use strict";

/**
 * config.js configuration service
 */

const { pluginId } = require("../utils");

module.exports = ({ strapi }) => {
  return {
    getConfig() {
      return {
        websiteUrl: strapi.plugin(pluginId).config("websiteUrl"),
      };
    },
  };
};
