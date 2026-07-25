const Enquiry = require("../models/Enquiry");
const addEnquiry = async(req,res)=>{

    try{
        const enquiry= new Enquiry(req.body);
        await enquiry.save();
        res.json({
            success:true,
            message:"Enquiry Saved",
            data:enquiry
        });
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message

        })

    }
};
module.exports={addEnquiry};