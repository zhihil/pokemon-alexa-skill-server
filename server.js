const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("Your middleware is up and running!");
  next();
});

app.get("/", (req, res, next) => {
  res.status(200).send("Server is up and running!");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`The server is listening in on ${PORT}`));
