import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
export const app = express();

import { connection } from "./database/dbconnection.js";
import { errorMiddleware } from "./middlewares/error.js";
import userRouter from "./routes/userRoutes.js";
import { removeUnverifiedAccounts } from "./automation/removeunverifiedaccount.js";

// Load environment variables
config({ path: "./config.env" });

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRouter);

removeUnverifiedAccounts();
connection();

app.get("/", (req, res) => {
    res.send("Backend is running!");
});

app.use(errorMiddleware);

// ✅ Export for Vercel (important)
export default app;
