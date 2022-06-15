const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  req(
    "https://api.coinstats.app/public/v1/coins?skip=0&limit=3",
    function (error, res, body) {
      if (!error && res.statusCode === 200) {
        let paredBody = JSON.parse(body);
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
