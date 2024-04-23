import express from "express";
import cors from "cors";

import { BikeController, OrderController } from "./controllers/index.js";
import mongoose from "mongoose";
import 'dotenv/config';

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => console.log("Connected DB"))
  .catch((err) => console.log(err));

const app = express();

app.use(express.json());
app.use(cors());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.post("/product", BikeController.create);
app.post("/contacts", OrderController.createContactMesssage);
app.post("/order", OrderController.createOrder);

app.get("/product", BikeController.getAll);
app.get("/product/:id", BikeController.getOne);

app.listen(process.env.PORT, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log("Connected Server");
});
