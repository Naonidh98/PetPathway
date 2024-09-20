require("dotenv").config();
const jwt = require("jsonwebtoken");

//auth middleware
exports.auth = async (req, res, next) => {
  try {
    //fetch token
    const token = req.cookies.token 
    || req.body.token 
    || req.header("Authorisation").replace("Bearer ", "");

    //missing token
    if (!token) {
      return res.status(403).json({
        success: false,
        message: "Token missing",
      });
    }

    //validate token
    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decode;
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: "Invalid token, Login again",
        error: err.message,
      });
    }

    next();
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: err.message,
    });
  }
};
