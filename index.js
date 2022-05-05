const dotenv = require("dotenv");
dotenv.config();
const dbConnect = require("./config/db.config");
dbConnect();

const express = require("express");
const app = express();
app.use(express.json());


const userRouter = require("./routers/users.routes");
const musicRouter = require("./routers/music.routes");
app.use("/user", userRouter);
app.use("/music", musicRouter);

const artistasRouter = require("./routers/artistas.routes");
app.use("/artistas", artistasRouter);



app.listen(Number(process.env.PORT), () => {
  console.log("Server up! PORT:", process.env.PORT);
});
