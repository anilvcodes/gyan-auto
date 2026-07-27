const { z } = require("zod");

const enquiryValidator = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters"),

  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Phone number must be 10 digits"),

  email: z
    .email("Invalid email address"),

  course: z
    .string()
    .min(2, "Course is required"),

  message: z
    .string()
    .min(5, "Message must be at least 5 characters")
});

module.exports = enquiryValidator;
