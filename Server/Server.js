import express from "express";
import mysql2 from "mysql2";
import cookieParser from "cookie-parser";
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// creating connection
const db = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "Collines2@",
  database: "signup",
});
// creating registe API
app.post("/register", (req, res) => {
  const sql = "INSERT INTO login (`name`, `email`, `password`) VALUES (?)";
  const values =[
    req.bosy.name,
    req.body.email,
    req.body.password
  ]
});
// Starting the server
app.listen(8081, () => {
  console.log("Server Running Successfully! ...");
});
