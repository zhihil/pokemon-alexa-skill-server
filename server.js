const express = require("express");
const Alexa = require("ask-sdk-core");
const handler = require("./handlers");

const app = express();

app.get("/", (req, res, next) => {
  res.status(200).send("Server is up and running!");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`The server is listening in on ${PORT}`));
