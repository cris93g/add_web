const { addItem } = require("../controllers/itemController/itemController");
const {} = require("../controllers/userControllers/UserController");

module.exports = app => {
  app.post(`/api/newItem`, addItem);
};
