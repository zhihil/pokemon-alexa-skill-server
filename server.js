const express = require("express");
const adapter = require("./handlers");

const app = express();

app.use((req, res, next) => {
  console.log(`Got a ${req.method} request`);
  next();
});

app.get("/", (req, res) => {
  res.status(200).send("Server is now up and running");
});

app.post('/', adapter.getRequestHandlers());

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`The server is listening in on ${PORT}`));
