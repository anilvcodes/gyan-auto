const Enquiry = require("../models/Enquiry");
const enquiryValidator = require("../validators/enquiryValidator");


const addEnquiry = async (req, res) => {
  try {
    const result = enquiryValidator.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        errors: result.error.issues,
      });
    }

    const enquiry = new Enquiry(result.data);
    await enquiry.save();
    res.json({
      success: true,
      message: "Enquiry Saved",
      data: enquiry,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
module.exports = { addEnquiry };
