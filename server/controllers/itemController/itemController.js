module.exports = {
  addItem(req, res) {
    const db = req.app.get("db");
    const {
      name,
      seller_id,
      description,
      picture,
      price,
      phone,
      item_adress
    } = req.body;
    db.addItem([
      name,
      seller_id,
      description,
      picture,
      price,
      phone,
      item_adress
    ])
      .then(response => {
        res.status(200).send(response);
      })
      .catch(console.log);
  }
};
