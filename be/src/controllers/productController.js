import { Product } from "../models/ProductsModel.js";

export const productbycategory = async (req, res) => {
  try {
    const { id } = req.params;
    const datas = await Product.find({ categoryId: id });
    res.json(datas);
  } catch (error) {
    console.log(error);
    res.json({ message: error });
  }
};
export const productwithcategory = async (req, res) => {
  try {
    const datas = await Product.find().populate("categoryId");
    res.json(datas);
  } catch (error) {
    console.log(error);
    res.json({ message: error });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const datas = await Product.find({});
    res.json(datas);
  } catch (error) {
    res.json({ message: error });
  }
};
export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const datas = await Product.findById(id);
    res.json(datas);
  } catch (error) {
    res.json({ message: error });
  }
};
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const datas = await Product.findByIdAndDelete(id);
    res.json(datas);
  } catch (error) {
    res.json({ message: error });
  }
};
export const createProduct = async (req, res) => {
  try {
    const obj = req.body;
    const datas = new Product(obj);
    await datas.save();
    res.json(datas);
  } catch (error) {
    res.json({ message: error });
  }
};
export const updateProduct = async (req, res) => {
  try {
    const obj = req.body;
    const { id } = req.params;
    const datas = await Product.findByIdAndUpdate(id, obj);
    res.json(datas);
  } catch (error) {
    res.json({ message: error });
  }
};
