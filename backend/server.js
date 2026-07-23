const express = require("express");

const connectDB = require("./config/db");

const enquiryRoutes = require("./routes/enquiryRoutes");

const app = express();

app.use(express.json());

connectDB();

app.use("/api", enquiryRoutes);

app.get("/",(req,res) =>{
  res.json({
    msg:"gayn automation"
  })
});

app.listen(3000, () => {

    console.log("Server Running");

});