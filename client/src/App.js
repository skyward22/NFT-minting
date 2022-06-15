import { useState } from "react";
import "./App.css";
// import { Link, Route, Routes } from "react-router-dom";
import Mint from "./components/Mint";
import NavBar from "./components/NavBar";
// import Coin from "./components/Coin";

function App() {
  const [accounts, setAccounts] = useState([]);

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
        {/* <Social /> */}
        {/* <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/cryptomarket' element={<CryptoMarket/>}/>
        </Routes> */}
      </div>
    </div>
  );
}

export default App;
