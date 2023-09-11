const path = require("path")

const homeController = (req,res)=>{
    res.sendFile(path.join(__dirname,"../public","/home.html"));
};

module.exports = homeController;