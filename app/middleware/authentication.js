
const { isTokenValid } = require('../utils/jwt');
const{StatusCodes} =require("http-status-codes")

const authenticateUser = async (req, res, next) => {
  let token;
  // check header
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer')) {
    token = authHeader.split(' ')[1];
  }
  if (!token){
    return res.status(401).json({
      status: false,
      error: "Unauthorized",
      message: "Token has expired or invalid!",
})      
  }
  try {
    const payload = isTokenValid(token);

    // Attach the user and his permissions to the req object
    req.user = {
      userId: payload.user.userId,
      role: payload.user.role,
    };
    next();
  } catch (error) { res.status(401).json({
    status: false,
    error: "Unauthorized",
    message: "Token has expired or invalid!",
})
  }
};

const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
      status: false,
      error: "Unauthorized to access this resource",
      message: "Access denied"
  })
    }
    next();
  };
};

module.exports = { authenticateUser, authorizeRoles };
