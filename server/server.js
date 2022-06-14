const express = require('express')
const app = express()

app.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=3", (req, res) =>  {
    (res) => {
        console.log(res)
        setListOfCoins(res.data.coins);
      }
    })
,[];

app.listen(5000, () => {console.log("Server started on port 5000")})