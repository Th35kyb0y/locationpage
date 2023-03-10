// get express 
const express = require('express');
//body parser for parsing fetch request body, else it will show undefined

// jwt for storing token , for aut
const path = require("path");

const app = express();

let port = 5000||process.env.PORT;
app.use(express.static(path.join(__dirname, '../frontend/build')));
const multer = require('multer');


const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads/'); 
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)); // Rename file with current date and original extension
  }
});

// Initialize multer middleware
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }

});




app.post('/upload', upload.single('myFile'), (req, res) => {
  res.send('File uploaded successfully');
});

app.get("/", (req, res) =>{

}) 

app.listen(port,()=>{
    console.log("app is listening on" + port + " port")
    })