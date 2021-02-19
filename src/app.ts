import express from "express";

const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("The sedulous hyena ate the antelope!");
});
app.use("/ping", (_, res, next) => {
  res.send("pong!");
});
app.listen(port, () => {
  return console.log(`:rocket: server is listening on ${port}`);
});
