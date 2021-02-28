const User = require("../models/user");
const elementDao = require("../middle/element.dao");

module.exports = {
  getElements: async(req, res) => {
    const user = await elementDao.getElements(User);
    await res.json(user);
  },
  getElement: async(req, res) => {
    const user = await elementDao.getElement(User, req);
    await res.json(user);
  },
  postElement: async(req, res) => {
    const user = await elementDao.createElement(User, req);
    await res.json(user);
  },
  putElement: async(req, res) => {
    const user = await elementDao.updateElement(User, req);
    await res.json(user);
  },
  deleteElement: async(req, res) => {
    const user = await elementDao.deleteElement(User, req);
    await res.json(user);
  },
};