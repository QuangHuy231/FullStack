import express from "express";
import homeController from "../controller/homeController"
let router = express.Router();

let initWebRoutes = (app)=>{
    router.get('/',homeController.getHomePage);
    router.get('/nguyenquanghuy',(req,res)=> res.send('hello hello'));

    return app.use("/",router);
}

module.exports = initWebRoutes;