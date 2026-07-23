const express =require("express");

const router = express.Router();

const { addEnquiry }=require("../controllers/enquiryController");

router.post("/enquiry",addEnquiry);

 module.exports = router;
 


