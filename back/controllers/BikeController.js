import BikeModel from "../models/Bike.js";

export const getOne = async (req, res) => {
  try {
    const postId = req.params.id;
    const doc = await BikeModel.findOne({
      _id: postId,
    });

    if (!doc) {
      return res.status(404).json({ msg: "Cant find this blog" });
    }

    return res.json(doc);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Unable to get a blog" });
  }
};

export const getAll = async (req, res) => {
  try {
    const doc = await BikeModel.find();

    if (!doc) {
      return res.status(404).json({ msg: "Cant find this blog" });
    }

    return res.json(doc);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Unable to get a blog" });
  }
};

export const create = async (req, res) => {
  const {
    bikeName,
    price,
    speed,
    target,
    weight,
    height,
    width,
    marches,
    wheel,
    motor,
    material,
    imgUrl
  } = req.body;

  try {
    const doc = new BikeModel({
      name: bikeName,
      price,
      speed,
      target,
      weight,
      height,
      width,
      marches,
      wheel,
      motor,
      material,
      imgUrl
    });

    const post = await doc.save();
    return res.json({ ...post._doc });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Unable to post a blog" });
  }
};
