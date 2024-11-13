const express = require("express");
const app = express();
const PORT = 4002;
const db = require("./config/btb24config");
app.use(express.json());
app.listen(PORT, () => {
  console.log(`Sever is live on http://localhost:${PORT}`);
});
app.get("/", (req, res) => {
  res.send("this is server");
});

const CategoryNameRoute = require("./router/CategoryNameRoute");

app.use("/category-name", CategoryNameRoute);
