const TodoSchema = require("../Models/Todo_Model");

exports.ResisterTodo = (req, res) => {
  TodoSchema.create(req.body, (err, data) => {
    if (err) throw err;
    else {
      res.status(200).json(data);
    }
  });
};

exports.Login = (req, res) => {
  TodoSchema.findOne({ email: req.body.email }, (err, user) => {
    if (err) throw err;
    if (!user) return res.status(404).json({ message: "User not" });
    if (user.password != req.body.password) return res.status(40);
    res.status(200).json(user);
    console.log(user);
  });
};
