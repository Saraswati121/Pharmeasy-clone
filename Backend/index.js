const express = require("express");
const connect = require("./src/config/db");
const UserRoute = require("./src/controller/auth");
const CategoryController = require("./src/controller/category");
const ProductController = require("./src/controller/product");
const OtpController = require("./src/controller/otp.controller");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/user", UserRoute);
app.use("/category", CategoryController);
app.use("/products", ProductController);
app.use("/getotp", OtpController);


const OTP = require("./src/model/otp.model");
const nodemailer = require("nodemailer");
const { readFileSync } = require("fs");
const hbs = require("handlebars");

const EMAIL = "brisa24@ethereal.email";
const PASSWORD = "vCsNQvkKmjZQRzAAH3";

const transport = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: EMAIL,
    pass: PASSWORD,
  },
});

app.post("/getotp", async (req, res) => {
  const { email } = req.body;
  const sendOtp = Math.floor(1000 + Math.random() * 9000);
  const template = hbs.compile(readFileSync("./login.hbs", "utf-8"));
  transport
    .sendMail({
      from: "pharmeasy@gmail.com",
      to: email,
      subject: "otp",
      text: "your otp here",
      html: template({
        OTP: sendOtp,
      }),
    })
    .then((info) => {
      const data = new OTP({
        email: email,
        otp: sendOtp,
      });
      data.save();
      return res.send({ message: "mail sent succesfully", data });
    });
});

const port = process.env.PORT || 8080;

app.listen(port, async () => {
  await connect();
  console.log("server started on port 8080");
});
