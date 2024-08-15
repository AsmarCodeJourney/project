import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import bcrypt from "bcrypt";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
// import { userRouter } from "./src/routes/UserRoute.js";
import { fooderRouter } from "./src/routes/FooderRoute.js";
import { productRouter } from "./src/routes/ProductRoute.js";
import { categoryRouter } from "./src/routes/CategoryRoute.js";
// import "dotenv/config";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastname: { type: String },
  image: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  role: { type: String, default: "User" },
  isVerified: { type: Boolean, default: false },
});
const User = mongoose.model("User", userSchema);

// app.use("/", userRouter);
app.use("/", fooderRouter);
app.use("/", productRouter);
app.use("/", categoryRouter);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

const privateKey = "gefeg3%#&9)_$##*GDRU";

const shareSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
});

const Share = mongoose.model("Share", shareSchema);

app.post(
  "/upload",
  upload.fields([{ name: "image", maxCount: 1 }]),
  async (req, res) => {
    try {
      const obj = req.body;
      obj.image = `http://localhost:3000/uploads/${req.files["image"][0].filename}`;
      const pet = new Share(obj);
      await pet.save();
      res.send(pet);
    } catch (error) {
      res.status(500).send({ message: "Error saving data", error });
    }
  }
);

app.get("/upload/", async (req, res) => {
  try {
    const datas = await Share.find({});
    res.json(datas);
  } catch (error) {
    console.log(error);
    res.json({ message: error });
  }
});

app.get("/user", async (req, res) => {
  try {
    const datas = await User.find({});
    res.json(datas);
  } catch (error) {
    res.json({ message: error });
  }
});

app.get("/api/verify/:token", async (req, res) => {
  try {
    const { token } = req.params;
    const verifyToken = jwt.verify(token, privateKey);
    if (verifyToken) {
      await User.findByIdAndUpdate(verifyToken.id, { isVerified: true });
      res.redirect("http://localhost:5173/pleasure");
    }
  } catch (error) {
    res.json({ message: error });
  }
});

app.post("/signIn", async (req, res) => {
  try {
    const { name, email, password, lastname } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const data = new User({
      email: email,
      password: hashedPassword,
      name: name,
      lastname: lastname,
    });
    await data.save();
    const token = jwt.sign(
      { id: data._id, email: data.email, role: data.role, name: data.name },
      privateKey,
      { expiresIn: "2h" }
    );
    sendEmail(email, token);
    res.json(data);
  } catch (error) {
    res.json({ message: error });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password, name } = req.body;
    const data = await User.findOne({ email: email });
    if (!data) {
      return res.status(404).send("İstifadəçi  tapılmadı!");
    }
    const isPassword = await bcrypt.compare(password, data.password);
    if (!isPassword) {
      return res.status(400).send("Parol səhvdir!");
    }
    if (!data.isVerified) {
      return res.status(403).send("Hesab təsdiqlənməyib! Email yoxlayın.");
    }
    const token = jwt.sign(
      { id: data._id, email: data.email, role: data.role, name: data.name },
      privateKey,
      { expiresIn: "2h" }
    );
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

app.post("/user", async (req, res) => {
  try {
    const { name, image } = req.body;
    const data = new User({ name: name, image: image });
    await data.save();
    res.json(data);
  } catch (error) {
    res.json({ message: error });
  }
});

app.delete("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await User.findByIdAndDelete(id);
    res.json(data);
  } catch (error) {
    res.json({ message: error });
  }
});

app.get("/api/verify/:token", async (req, res) => {
  try {
    const { token } = req.params;
    const verifyToken = jwt.verify(token, privateKey);
    if (verifyToken) {
      await User.findByIdAndUpdate(verifyToken.id, { isVerified: true });
      res.redirect("http://localhost:5173/pleasure");
    }
  } catch (error) {
    res.json({ message: error });
  }
});

async function sendEmail(email, token) {
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
      user: "bd8cub8bd@code.edu.az",
      pass: "yqya jkir cejk zmhh",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailData = {
    from: "<bd8cub8bd@code.edu.az>",
    to: email,
    subject: "Verify your account (Pet&Co)",
    text: "Hello world?",
    html: `<b>Hello world?</b> Click to verify your account : http://localhost:3000/api/verify/${token} `,
  };

  await transporter.sendMail(mailData);
}

mongoose
  .connect("mongodb+srv://Esmer:esmer123@esmer.wq093rl.mongodb.net/")
  .then(() => console.log("Connected!"))
  .catch(() => console.log("Not Connected!"));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
