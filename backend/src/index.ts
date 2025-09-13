import express from "express";

const app = express();
const PORT = 5000;

app.get("/", (_req, res) => {
  res.send("Welcome to Agri-Marketplace Backend!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
