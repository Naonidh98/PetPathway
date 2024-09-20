const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");

require("dotenv").config();

//import routes
const testRoute = require("./routes/test");
const authRoute = require("./routes/authRoute");
const resetPasswordRoute = require("./routes/resetPassword");
const updateProfileRoute = require("./routes/updateProfile");

//import configuration function
const { dbConnect } = require("./config/Database");
const { cloudnairyconnect } = require("./config/Cloudinary");

const PORT = process.env.PORT || 8800;

//server
const app = express();

//functionalities
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(
  express.json({
    limit: "10mb",
  })
);
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
  })
);

//mounting routes
app.use("/api/v1", testRoute);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/user", resetPasswordRoute);
app.use("/api/v1/profile", updateProfileRoute);

//server listen
app.listen(PORT, () => {
  console.log("Server live at : ", PORT);
});

//db connect
dbConnect();

//cloudinary connect
cloudnairyconnect();
