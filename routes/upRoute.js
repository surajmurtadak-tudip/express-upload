const express = require('express');
const upRouter = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
    destination : (req,file,callback)=>{
        return callback(null,"./uploads");
    },
    filename : (req,file,callback)=>{
        return callback(null,`${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({storage});

const upController = require("../controllers/upController");

upRouter.post("/upload",upload.single("upImage"),upController);

module.exports = upRouter;