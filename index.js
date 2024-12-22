import dotenv from "dotenv";
import express from "express";
import { sendEmail } from "./src/controllers/controllers.js"

import connectDB from "./src/db/index.js";
import router from "./src/routes/routes.js";
const app = express();

dotenv.config();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//routes
app.use("/api/v1", router);
app.post("/send-email", sendEmail);


connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB connection failed !!! ", err);
  });
