const jwt = require("jsonwebtoken");
const Visitor = require("../models/users.model");

module.exports.checkAuth = (req, res, next) => {
  console.log(req.headers);
  // 1 - extract JWT from Authorization Header
  const token = req.headers?.authorization;
  // 2 - verify JWT signature (jwt.verify)
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: err.message });
    }

    // 3 - extract "sub" from jwt payload
    const sub = decoded.sub;

    // 4 - load user from databse
    User.findById(sub)
      .then((visitor) => {
        if (visitor) {
          // 5 - save user on request (req.user)
          req.visitor = visitor;
          // 6 - next
          next();
        } else {
          res.status(401).json({ message: "Unauthorized" });
        }
      })
      .catch(next);
  });
};
