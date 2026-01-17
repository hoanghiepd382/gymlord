const express = require('express');
const router = express.Router();
const multer = require("multer");
const upload = multer();
const uploadCloud = require('../../middlewares/admin/uploadCloud.middleware');
const userController = require("../../controllers/admin/user.controller");
const accountValidate = require("../../validates/admin/account.validate");

router.get("/", userController.index);
router.get("/create", userController.create);
router.post("/create", upload.single("avatar"), uploadCloud.upload, accountValidate.createAccount, userController.createPost);
router.patch("/changeStatus", userController.changeStatus);
router.patch("/delete", userController.delete);

module.exports = router;

