import db from "../models/index";
import CRUDService from "../services/CRUDService";
let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();

    return res.render("homePage.ejs", {
      data: JSON.stringify(data),
    });
  } catch (e) {
    console.log(e);
  }
};

let getCrud = (req, res) => {
  return res.render("crud.ejs");
};

let postCrud = async (req, res) => {
  let message = await CRUDService.createNewUser(req.body);
  console.log(message);
  // console.log(req.body);
  return res.send("post crud");
};
module.exports = {
  getHomePage: getHomePage,
  getCrud: getCrud,
  postCrud: postCrud,
};
