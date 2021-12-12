const express = require("express");
const app = express();
const port = 8000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://joonwon:qwer@cluster0.d83v7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      //   useNewUrlparser: true,
      //   useUnifiedTopology: true,
      //   useCreateIndex: true,
      //   useFindAndModify: false,
    }
  )
  .then((res) => {
    console.log("MongoDB Connected...");
  })
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app lisitening on port ${port}!`));
