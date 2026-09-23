import "dotenv/config";

import express from "express";
import cors from "cors";

console.log(
    "API key loaded:",
    process.env.RESEND_API_KEY ? "YES" : "NO"
);

import contactRoutes from "./routes/contactRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", contactRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});