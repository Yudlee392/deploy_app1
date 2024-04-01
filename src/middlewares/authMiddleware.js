// middlewares/authMiddleware.js
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const User = require("../app/models/User")

dotenv.config();
const secretKey = process.env.JWT_SECRET;

async function authMiddleware(req, res, next) {
    console.log("from authMiddleware", req.session);
    const token = req.session.token;
    if (!token) {
        // return res.status(401).json({ message: "Unauthorized" });
        return res.redirect('/login');
    }

    try {
        const decoded = jwt.verify(token.replace("Bearer ", ""), secretKey);
        const user = await User.findById(decoded.userId).populate('roleId');
        if (!user) {
            return res.status(403).json({ message: "User not found" });
        }

        // Check user's role
        const role = user.roleId.name; // Assuming roleId contains the role name

        // Check if the user's role is allowed
        if (role == 'student' || role == 'manager' || role == 'admin' || role == 'coordinator') {
            // Set user role in request for further processing
            req.role = role;
            next();
        } else {
            return res.status(403).json({ message: "Unauthorized role" });
        }
    } catch (err) {
        return res.status(403).json({ message: "Invalid token ", token: token, error: err });
    }
}

module.exports = authMiddleware;