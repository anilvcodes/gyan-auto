const Enquiry = require ("../controllers/enquiryController");
const addEnquiry = async(req,res)=>{

    try{
        const enquiry= new Enquairy(req.body);
        await enquiry.save();
        res.json({
            success:true,
            message:"Enquairy Saved",
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