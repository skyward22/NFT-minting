const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const port = 4000;

const { getTopCryptos } = require("./controller");

app.get("/gettopcrypto", getTopCryptos);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
