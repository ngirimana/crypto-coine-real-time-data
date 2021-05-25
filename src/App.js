import React, { useState, useEffect } from "react";
import axios from "axios";
import Coin from "./Coin";
import "./App.css";
import Spinner from "./Spinner";

function App() {
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C12h%2C24h%2C7d%2C14d%2C21%2C18d";
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      axios
        .get(url)
        .then((res) => {
          setCoins(res.data);
        })
        .catch((error) => console.log(error));
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => setSearch(e.target.value);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a currency</h1>
        <form>
          <input
            type="text"
            placeholder="Search"
            className="coin-input"
            onChange={handleChange}
          />
        </form>
      </div>
      <React.Fragment>
        <div className="coin-container">
          <div className="coin_row">
            <div className="coin">
              <h1>name</h1>
              <p className="coin-symbol">symbol</p>
            </div>
            <div className="coin-data">
              <p className="coin_price">price</p>
              <p className="coin-volume">volume</p>

              <p className="coin-percent ">Change in 1h</p>

              <p className="coin-percent ">Change in 24h</p>

              <p className="coin-percent ">Change in 7d</p>

              <p className="coin-percent "> Change in14d </p>

              <p className="coin-marketcap">Market Capital</p>
            </div>
          </div>
        </div>
        {coins.length ? (
          filteredCoins.map((coin) => {
            return (
              <Coin
                key={coin.id}
                name={coin.name}
                image={coin.image}
                symbol={coin.symbol}
                marketCap={coin.market_cap}
                price={coin.current_price}
                priceChange1h={coin.price_change_percentage_1h_in_currency}
                priceChange24h={coin.price_change_percentage_24h_in_currency}
                priceChange7d={coin.price_change_percentage_7d_in_currency}
                priceChange14d={coin.price_change_percentage_14d_in_currency}
                volume={coin.total_volume}
              />
            );
          })
        ) : (
          <Spinner />
        )}
      </React.Fragment>
    </div>
  );
}

export default App;
