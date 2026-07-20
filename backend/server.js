const express = require("express");

const app = express();


app.use(express.json());

app.get("/", (req, res) => {
  res.send("Gyan Auto Backend Running");
});

const PORT = 50;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
