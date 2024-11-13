const express = require("express");
const app = express();
const PORT = 4002;
app.use(express.json());
app.listen(PORT, () => {
  console.log(`Sever is live on http://localhost:${PORT}`);
});
app.get("/", (req, res) => {
  res.send("this is server");
});
app.get("/hello", (req, res) => {
  res.send("this is server");
});
app.get("/moon", (req, res) => {
  res.send("amar sonar bangla");
});
