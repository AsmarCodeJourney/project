import { Category } from "../models/CategoryModel.js";

export const getCategory = async (req, res) => {
  try {
    const datas = await Category.find({});
    res.json(datas);
  } catch (error) {
    console.log(error);
    res.json({ message: error });
  }
};
export const createCategory = async (req, res) => {
  try {
    const obj = req.body;
    const datas = new Category(obj);
    await datas.save();
    res.json(datas);
  } catch (error) {
    res.json({ message: error });
  }
};
export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const datas = await Category.findByIdAndDelete(id);
    res.json(datas);
  } catch (error) {
    res.json({ message: error });
  }
};
