import express from "express";
import Joi from "joi";
// import bcrypt from "bcrypt";
import Order from "../models/orderContent.js";

// import generateAuthToken from "../utils/generateAuthToken.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const schema = Joi.object({
    Date: Joi.string().required(),
    Customer_name: Joi.string().required(),
    Translator_name: Joi.string().required(),
    Job_description: Joi.string().allow(""),
    Customers_will_get: Joi.string().allow(""),
    Deadline: Joi.string().allow(""),
    Number_of_edits: Joi.string().allow(""),
    Order_type: Joi.string().allow(""),
    Price: Joi.string().allow(""),
    Status: Joi.string().allow(""),
    Send_to: Joi.string().allow(""),
    Review: Joi.string().allow(""),
  });

  try {
    const { error } = await schema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    // let user = await User.findOne({ name: req.body.Customer_name });
    const {
      Date,
      Translator_name,
      Customer_name,
      Job_description,
      Customers_will_get,
      Deadline,
      Number_of_edits,
      Price,
      Status,
      Send_to,
      Review,
      Order_type,
    } = await req.body;

    const order = await new Order({
      Date,
      Translator_name,
      Customer_name,
      Job_description,
      Customers_will_get,
      Deadline,
      Number_of_edits,
      Price,
      Status,
      Send_to,
      Review,
      Order_type,
    });

    await order.save();
    await res.status(200).json();
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
