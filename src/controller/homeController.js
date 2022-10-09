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

let displayGetCrud = async (req, res) => {
  let data = await CRUDService.getAllUsers();
  return res.render("display-crud.ejs", {
    dataTable: data,
  });
};
let getEditCrud = async (req, res) => {
  let userId = req.query.id;
  if (userId) {
    let userData = await CRUDService.getUserInforById(userId);
    //check user data not found

    return res.render("edit-crud.ejs", {
      userData: userData,
    });
  } else {
    return res.send("user not found");
  }
};

let putCrud = async (req, res) => {
  let data = req.body;
  await CRUDService.updateUserData(data);
  return res.redirect("/get-crud");
};

let deleteCRUD = async (req, res) => {
  let userid = req.body.id;
  await CRUDService.deleteUserById(userid);
  return res.redirect("/get-crud");
};
module.exports = {
  getHomePage: getHomePage,
  getCrud: getCrud,
  postCrud: postCrud,
  displayGetCrud: displayGetCrud,
  getEditCrud: getEditCrud,
  putCrud: putCrud,
  deleteCRUD: deleteCRUD,
};
