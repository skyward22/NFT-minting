import { useState } from "react";
import "./App.css";
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import Mint from "./components/Mint";
import NavBar from "./components/NavBar";
import Coin from "./components/Coin";
// import CryptoMarket from "./components/CryptoMarket";

function App() {
  const [accounts, setAccounts] = useState([]);
  //accounts in hardhat

  return (
    <div className="overlay">
      <div className="App">
        <NavBar accounts={accounts} setAccounts={setAccounts} />

        <Mint accounts={accounts} setAccounts={setAccounts} />
        {/* <Coin
        name={crypto.name}
        icon={crypto.icon}
        price={crypto.price}
        symbol={crypto.symbol}
        /> */}
      </div>
      {/* <div>
        <BrowserRouter>
          <Route path="/cryptomarket" components={CryptoMarket} exact />
        </BrowserRouter>
      </div> */}
    </div>
  );
}

export default App;
