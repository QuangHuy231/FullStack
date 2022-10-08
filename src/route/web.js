import express from "express";
import homeController from "../controller/homeController";
let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/nguyenquanghuy", (req, res) => res.send("hello hello"));
  router.get("/crud", homeController.getCrud);
  router.post("/post-crud", homeController.postCrud);

  return app.use("/", router);
};

module.exports = initWebRoutes;
