
  module.exports = {
    getAllUsers(req, res) {
        const db = req.app.get("db");
        db.getAllUsers().then(users => {
          res.json(users);

        });
      }

    };

  
