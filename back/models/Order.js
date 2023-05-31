import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    phone: {
      type: String,
      required: true,
      match: [
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
        "Please fill a valid phone",
      ],
    },
    postIndex: {
      type: Number,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
    district: {
      type: String,
    },
    productId: {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: "Bike",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Order", OrderSchema);
