import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Coins from "./components/Coins";
import Navbar from "./components/Navbar";

function App() {
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en`;
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);

  return (
    <>
      <Navbar />
      <Coins coins={coins} />
    </>
  );
}

export default App;
