const express = require("express");
const router = express.Router();
const config = require("../config");

config.controllers.forEach((controller) => {
  const ctrl = controller.split(".");
  const contrl = require(`../controllers/${controller}`);
  router.get(`/${ctrl[0]}/`, contrl.getElements);
  router.post(`/${ctrl[0]}/`, contrl.postElement);
  router.get(`/${ctrl[0]}/:id`, contrl.getElement);
  router.put(`/${ctrl[0]}/:id`, contrl.putElement);
  router.delete(`/${ctrl[0]}/:id`, contrl.deleteElement);
});
const ctrl = require("../middle/token.middle");
router.get("/token/", ctrl.getToken);

module.exports = router;