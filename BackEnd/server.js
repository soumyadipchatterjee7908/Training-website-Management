const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// env config
dotenv.config();

//routes
const userRoutes = require("./routes/userRoutes");
const courseRoutes = require("./routes/courseRoutes");

//mongodb connection
connectDB();
//rest object
const app = express();

//middlewaere
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/course", courseRoutes);

//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
  console.log(
    `server started on ${process.env.DEV_MODE} port ${PORT}`.bgCyan.white
  );
});
