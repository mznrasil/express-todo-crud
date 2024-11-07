import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import routes from "./routes";
import {errorHandler} from "./middlewares/errorHandler";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.use("/v1", routes)

// Error handler should be at last
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

mongoose.connect(process.env.DB_CONNECTION_STRING!).then(() => {
    console.log("Connected to database");
}).catch((e) => {
    console.log("Failed to connect to database", e);
})