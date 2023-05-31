import ContactModel from "../models/Contact.js";
import OrderModel from "../models/Order.js";

export const createContactMesssage = async (req, res) => {
  const { name, phone, email, message } = req.body;
  console.log(name, phone, email, message);

  try {
    const doc = new ContactModel({
      name,
      phone,
      email,
      message,
    });

    const post = await doc.save();
    return res.json({ ...post._doc });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Unable to receive message" });
  }
};


export const createOrder = async (req, res) => {
  const { name, phone, email, postIndex, number, street, district, productId } = req.body;
  
  try {
    const doc = new OrderModel({
      email,
      name,
      phone,
      postIndex,
      number,
      street,
      district,
      productId,
    });

    const post = await doc.save();
    return res.json({ ...post._doc });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Unable to receive message" });
  }
};