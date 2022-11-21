const jwt = require("jsonwebtoken");

const getJsonFormater = (data, notification, status) => {
  return {
    status,
    data,
    message: notification,
  };
};

const generateAccessToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      username: user.username,
    },
    process.env.PRIVATE_ACCESS_KEY,
    { expiresIn: "50s" }
  );
};

const generateRefreshToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      username: user.username,
    },
    process.env.PRIVATE_REFRESH_KEY,
    { expiresIn: "365d" }
  );
};

const storeRefreshTokenAtCookie = (res, refreshToken) => {
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    path: "/",
    secure: false,
    sameSite: "Strict",
  });
};

module.exports = { getJsonFormater, generateAccessToken, generateRefreshToken, storeRefreshTokenAtCookie };
