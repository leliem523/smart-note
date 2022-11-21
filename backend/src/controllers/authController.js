const { User, Token } = require("../models");
const Bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  generateAccessToken,
  generateRefreshToken,
  storeRefreshTokenAtCookie,
} = require("../configs");

const authController = {
  register: async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username });
      if (!!user) {
        return res.status(200).json("Username already exist!");
      }
      const salt = await Bcrypt.genSalt(10);
      const passwordHash = await Bcrypt.hash(req.body.password, salt);
      const newUser = await new User({
        ...req.body,
        password: passwordHash,
      }).save();
      return res.status(200).json(newUser);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  login: async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username });
      if (!user) {
        return res.status(404).json("Username or password is not valid!");
      }
      const passwordCompare = await Bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!passwordCompare) {
        return res.status(404).json("Username or password is not valid!");
      }

      const accessToken = generateAccessToken(user);
      const refreshToken = generateRefreshToken(user);

      const newRefreshToken = new Token({ tokenKey: refreshToken });
      await newRefreshToken.save();

      storeRefreshTokenAtCookie(res, refreshToken);

      return res.status(200).json({ user, authToken: accessToken });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  refreshAuthenticate: async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      return res.status(401).json("You're not authenticated!");
    }
    const token = await Token.findOne({ tokenKey: refreshToken });
    if (!token) {
      return res.status(404).json("Token is not valid!");
    }
    jwt.verify(token, process.env.PRIVATE_REFRESH_KEY, async (err, user) => {
      if (err) {
        return res.status(401).json("You're not authenticated");
      }
      // Delete old token
      await token.delete();

      // Create new access token, refresh token
      const newAccessToken = generateAccessToken(user);
      const newRefreshToken = generateRefreshToken(user);

      storeRefreshTokenAtCookie(res, newRefreshToken);
      res.status(200).json({ authToken: newAccessToken });
    });
  } catch (error) {
    return res.status(500).json(error);
  }
  },
};

module.exports = authController;
