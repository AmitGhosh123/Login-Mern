
const dotenv = require("dotenv") //to acess the env file
const express = require("express")

const mongoose = require("mongoose")
const cors = require("cors")
const EmployeeModel = require('./models/Employee')

const app = express();
app.use(express.json())
app.use(cors())
dotenv.config(); //configuring env file

mongoose.connect(process.env.MONGO_CONNECTION_STRING).then(() => {  //mongodb connection setup
    console.log("mongoose connected");
}).catch((err) => {
    console.error("Failed to connect to mongoose:", err);
}); 

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    EmployeeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json({ status: "Success", message: "Login successful" });
                } else {
                    res.json({ status: "Error", message: "The password is incorrect" });
                }
            } else {
                res.json({ status: "Error", message: "No record exists" });
            }
        })
        .catch(err => {
            res.status(500).json({ status: "Error", message: "Server error" });
        });
}); 

app.post('/register',(req,res) => {
  EmployeeModel.create(req.body)
  .then(employees => res.json(employees))
  .catch(err => res.json(err))
})

 
app.listen (3001,() => {
    console.log("server is runinng")   //server connection setup
}) 