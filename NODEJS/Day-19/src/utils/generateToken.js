import jwt from "jsonwebtoken";
import { config } from "../config/index.js";

export const generateToken = (payload) =>
  jwt.sign(payload, config.jwt.secret, { expiresIn: config.jwt.expiresIn });
