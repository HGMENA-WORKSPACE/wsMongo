const utils = require("./utils.middle");

module.exports = {
  find: async(dao, body) => {
    return await dao
      .find({ $or: [body] })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },
  getElements: async(dao) => {
    return await dao
      .find()
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },
  getElement: async(dao, req) => {
    return await dao
      .findById(req.params.id)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },
  createElement: async(dao, req) => {
    let body = Object.assign(req.body);
    if (body._id == undefined) {
      body._id = utils.generateUuid();
    }
    const d = new dao(body);
    return await d
      .save()
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },
  updateElement: async(dao, req) => {
    const body = Object.assign(req.body);
    return await dao
      .findByIdAndUpdate(req.params.id, { $set: body }, { new: true })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },
  deleteElement: async(dao, req) => {
    return await dao
      .findByIdAndRemove(req.params.id)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },
};