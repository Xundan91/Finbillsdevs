import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const SECRET_KEY = "your_secret_key"; 


export const signupController = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: { email, password: hashedPassword, name },
    });
    res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Failed to create user" });
  }
};


export const loginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: "1h" });
    res.json({ message: "Login successful", token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Failed to log in" });
  }
};


export const logoutController = (req, res) => {
  res.json({ message: "Logout successful" });
};


export const checkAuthController = (req, res) => {
  res.json({ message: "Authenticated", user: req.user });
};


export const forgetPassController = async (req, res) => {

  res.json({ message: "Forget password logic not implemented" });
};


export const resetPassController = async (req, res) => {

  res.json({ message: "Reset password logic not implemented" });
};


export const verifyEmailController = async (req, res) => {
  
  res.json({ message: "Email verification logic not implemented" });
};

export const verifyEmailVerificationCodeController = async (req, res) => {
  res.json({ message: "Email code verification logic not implemented" });
};

export const deleteUserAccount = async (req, res) => {
  try {
    const userId = req.user.id;
    await prisma.user.delete({ where: { id: userId } });
    res.status(200).json({ message: "User account deleted successfully" });
  } catch (error) {
    console.error("Delete account error:", error);
    res.status(500).json({ message: "Failed to delete account" });
  }
};
