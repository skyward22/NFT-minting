const { default: axios } = require("axios");

module.exports = {
  getTopCryptos: (req, res) => {
    axios
      .get("https://api.coinstats.app/public/v1/coins?skip=0&limit=3")
      .then((response) => {
        console.log(response);
        res.status(200).send(response.data.coins);
      });
  },
};
