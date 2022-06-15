import React, { useEffect, useState } from "react";
import axios from "axios";

function Coin({ name, icon, price, symbol }) {
  const [listOfCoins, setListOfCoins] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coinstats.app/public/v1/coins?skip=0&limit=3")
      .then((response) => {
        console.log(response);
        setListOfCoins(response.data.coins);
      });
  }, []);

  return (
    <div className="crypto">
      <h1> Name: {name}</h1>
      <img src={icon} />
      <h3> Price: {price}</h3>
      <h3> Symbol: {symbol}</h3>
    </div>
  );
}

export default Coin;
