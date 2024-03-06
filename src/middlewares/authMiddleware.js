// middlewares/authMiddleware.js
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const User = require("../app/models/User")

dotenv.config();
const secretKey = process.env.JWT_SECRET;

async function authMiddleware(req, res, next) {
//   const token = req.header("Authorization");
//  console.log(token)
//  console.log(req.session)
const token=req.session.token;  
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token.replace("Bearer ", ""), secretKey);
    console.log(decoded);
    req.user = decoded;
    const user = await User.findById(decoded.userId).populate('roleId');
    console.log(user)
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid token" });
  }
}

module.exports = authMiddleware;