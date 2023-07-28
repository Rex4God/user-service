const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const userRouter = require("./routes/user");
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());



app.get('/', (req, res) => {
  res.json({
    message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
  });
});


//Route Middleware
app.use('/v1/user', userRouter);



const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});
