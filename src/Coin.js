import React from "react";
import "./Coin.css";

const Coin = ({
  name,
  image,
  symbol,
  price,
  volume,
  priceChange1h,
  priceChange24h,
  priceChange7d,
  priceChange14d,
  marketCap,
}) => {
  return (
    <div className="coin-container">
      <div className="coin_row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin_price">${price.toLocaleString()}</p>
          <p className="coin-volume">${volume.toLocaleString()}</p>
          {priceChange1h < 0 ? (
            <p className="coin-percent red">
              {priceChange1h && priceChange1h.toFixed(2)}%
            </p>
          ) : (
            <p className="coin-percent green">
              {priceChange1h && priceChange1h.toFixed(2)}%
            </p>
          )}
          {priceChange24h < 0 ? (
            <p className="coin-percent red">{priceChange24h.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green">{priceChange24h.toFixed(2)}%</p>
          )}
          {priceChange7d < 0 ? (
            <p className="coin-percent red">{priceChange7d.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green">{priceChange7d.toFixed(2)}%</p>
          )}
          {priceChange14d < 0 ? (
            <p className="coin-percent red">{priceChange14d.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green">{priceChange14d.toFixed(2)}%</p>
          )}
          <p className="coin-marketcap">
            Mkt Cap:$ {marketCap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
