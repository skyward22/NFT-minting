import React from "react";

function Coin({ name, icon, price, symbol, priceChange }) {
  return (
    <div className="crypto">
      <h1>{name}</h1>
      <img src={icon} />
      <h3> Price: ${price.toFixed(2).toLocaleString()}</h3>
      <h3> Symbol: {symbol}</h3>
      {/* {priceChange < 0 ? (
        <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
      ) : (
        <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
      )} */}
    </div>
  );
}

export default Coin;
