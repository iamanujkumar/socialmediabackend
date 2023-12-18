

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const AuthRoute = require("./Routes/AuthRoute.js");
const UserRoute = require("./Routes/UserRoute.js");
const PostRoute = require("./Routes/PostRoute.js");
const UploadRoute = require("./Controllers/PostController.js");
const ChatRoute = require("./Routes/ChatRoute.js");
const MessageRoute = require("./Routes/MessageRoute.js");
const CommentRoute = require("./Routes/CommentRoute.js");

const express = require("express");

const app = express();

app.use(express.static('public'))
app.use('/images',express.static("images"))

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
dotenv.config()

mongoose
  .connect(
    process.env.MONGO_DB,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Listening at port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });



app.use('/auth',AuthRoute)
app.use('/user',UserRoute)
app.use('/post',PostRoute)
app.use('/upload',UploadRoute)
app.use('/chat',ChatRoute)
app.use('/message',MessageRoute)
app.use('/comment',CommentRoute)