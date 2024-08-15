// import { User } from "../models/UserModel.js";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import nodemailer from "nodemailer";
// const privateKey = "gefeg3%#&9)_$##*GDRU";

// export const getUsers=async (req, res) => {
//     try {
//       const datas = await User.find({});
//       res.json(datas);
//     } catch (error) {
//       res.json({ message: error });
//     }
//   }
//   export const verifyUser= async (req, res) => {
//     try {
//       const { token } = req.params;
//       const verifyToken = jwt.verify(token, privateKey);
//       if (verifyToken) {
//         await User.findByIdAndUpdate(verifyToken.id, { isVerified: true });
//         res.redirect("http://localhost:5173/pleasure");
//       }
//     } catch (error) {
//       res.json({ message: error });
//     }
//   }
//   export const signUser= async (req, res) => {
//     try {
//       const { name, email, password, lastname } = req.body;
//       const hashedPassword = await bcrypt.hash(password, 10);
//       const data = new User({
//         email: email,
//         password: hashedPassword,
//         name: name,
//         lastname: lastname,
//       });
//       await data.save();
//       const token = jwt.sign(
//         { id: data._id, email: data.email, role: data.role, name: data.name },
//         privateKey,
//         { expiresIn: "2h" }
//       );
//       sendEmail(email, token);
//       console.log(token);
//       res.json(data);
//     } catch (error) {
//       res.json({ message: error });
//     }
//   }
  
// export const loginUser=async (req, res) => {
//     try {
//       const { email, password, name } = req.body;
//       const data = await User.findOne({ email: email });
//       if (!data) {
//         return res.status(404).send("İstifadəçi  tapılmadı!");
//       }
//       const isPassword = await bcrypt.compare(password, data.password);
//       if (!isPassword) {
//         return res.status(400).send("Parol səhvdir!");
//       }
//       if (!data.isVerified) {
//         return res.status(403).send("Hesab təsdiqlənməyib! Email yoxlayın.");
//       }
//       const token = jwt.sign(
//         { id: data._id, email: data.email, role: data.role, name: data.name },
//         privateKey,
//         { expiresIn: "2h" }
//       );
//       res.status(200).json({ token });
//     } catch (error) {
//       res.status(500).json({ message: error });
//     }
//   }
  
// export const postUser=async (req, res) => {
//     try {
//       const { name, image } = req.body;
//       const data = new User({ name: name, image: image });
//       await data.save();
//       res.json(data);
//     } catch (error) {
//       res.json({ message: error });
//     }
//   }
  
//   export const deleteUser=async (req, res) => {
//     try {
//       const { id } = req.params;
//       const data = await User.findByIdAndDelete(id);
//       res.json(data);
//     } catch (error) {
//       res.json({ message: error });
//     }
//   }


//   async function sendEmail(email, token) {
//     const transporter = nodemailer.createTransport({
//       host: "smtp.ethereal.email",
//       service: "gmail",
//       port: 465,
//       secure: true,
//       auth: {
//         user: "bd8cub8bd@code.edu.az",
//         pass: "yqya jkir cejk zmhh",
//       },
//       tls: {
//         rejectUnauthorized: false,
//       },
//     });
  
//     const mailData = {
//       from: "<bd8cub8bd@code.edu.az>",
//       to: email,
//       subject: "Verify your account (Pet&Co)",
//       text: "Hello world?",
//       html: `<b>Hello world?</b> Click to verify your account : http://localhost:3000/api/verify/${token} `,
//     };
  
//     await transporter.sendMail(mailData);
//   }