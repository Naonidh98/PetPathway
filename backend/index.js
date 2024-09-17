const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

require("dotenv").config();

//import routes
const testRoute  = require("./routes/test")
const authRoute = require("./routes/authRoute")
const resetPasswordRoute = require("./routes/resetPassword")

//import configuration function
const {dbConnect} = require("./config/Database");
 
const PORT =  process.env.PORT || 8800;

//server
const app = express();

//functionalities
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(express.json({
    limit : '10mb'
}))
app.use(cookieParser());

//mounting routes
app.use("/api/v1",testRoute);
app.use("/api/v1/auth",authRoute);
app.use("/api/v1/user",resetPasswordRoute);

//server listen
app.listen(PORT, () => {
  console.log("Server live at : ", PORT);
});

//db connect
dbConnect();

//cloudinary connect
