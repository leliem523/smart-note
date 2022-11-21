const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routesMaster = require("./routes");
const cookieParser = require("cookie-parser");

dotenv.config();
const { PORT, MONGOOSE_CONNECT } = process.env;

// Connect db
mongoose.connect(MONGOOSE_CONNECT, () => {
  console.log("connected database success!!");
});

// configs
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cookieParser());

//Routes
app.use(routesMaster);

app.listen(PORT, () => console.log(`PORT is running ${PORT}`));
