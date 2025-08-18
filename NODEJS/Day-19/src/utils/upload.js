import multer from "multer";
import fs from "fs";
import path from "path";
import { config } from "../config/index.js";

const dir = path.join(process.cwd(), config.uploadDir);
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, dir),
  filename: (_req, file, cb) => {
    const uniq = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniq + "-" + file.originalname.replace(/\s+/g, "_"));
  }
});

export const upload = multer({ storage });
export const staticUploads = dir;
