import express from "express";
import router from "./routes/index.js";
const app = express();
app.use(express.json());
app.use("/", router);
app.listen(3000, () => {
    console.log("Server is runing port", 3000);
});