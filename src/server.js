import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import connectDB from "./config/connectDB";
require("dotenv").config();

let port = process.env.PORT || 6969;
// port == undefined => port = 6969

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);

initWebRoutes(app);

connectDB();

app.listen(port, () => {
  //callback
  console.log("nodejs is running on the port:" + port);
});
