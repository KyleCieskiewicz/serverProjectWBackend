
  module.exports = {

    addUser(req, res) {
      const db = req.app.get("db");
      db.addUser([req.body.proteinBase, req.body.vege, req.body.fruit])
        .then(user => {
        res.json(user);
      });
    },
    getAllUsers(req, res) {
        const db = req.app.get("db");
        db.getAllUsers().then(users => {
          res.json(users);

        });
      }

    };

  
