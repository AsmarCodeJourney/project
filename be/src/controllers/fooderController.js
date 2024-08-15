import { Fooder } from "../models/FooderModel.js";

export const getAllFood = async (req, res) => {
  try {
    const datas = await Fooder.find({});
    res.json(datas);
  } catch (error) {
    res.json({ message: error });
  }
};

// export const getFoodById= async (req, res) => {
//   try {
//     const { id } = req.params;
//     const datas = await Fooder.findById(id);
//     res.json(datas);
//   } catch (error) {
//     res.json({ message: error });
//   }
// }

export const getFoodByCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const datas = await Fooder.find({ categoryId: id });
    res.json(datas);
  } catch (error) {
    console.log(error);
    res.json({ message: error });
  }
};
export const deleteFood = async (req, res) => {
  try {
    const { id } = req.params;
    const datas = await Fooder.findByIdAndDelete(id);
    res.json(datas);
  } catch (error) {
    res.json({ message: error });
  }
};

export const postFood = async (req, res) => {
  try {
    const obj = req.body;
    const datas = new Fooder(obj);
    await datas.save();
    res.json(datas);
  } catch (error) {
    res.json({ message: error });
  }
};
export const updateFood = async (req, res) => {
  try {
    const obj = req.body;
    const { id } = req.params;
    const datas = await Fooder.findByIdAndUpdate(id, obj);
    res.json(datas);
  } catch (error) {
    res.json({ message: error });
  }
};
