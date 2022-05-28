import React from 'react';
import './coin.css'

const Coin = ({ name, image, symbol, price, volume, rank, price_change , market_cap }) => {
    return (
        <>
            <div className="coin-container">
                <div className="coin-row">
                    <div className="coin">
                        <img src={image} alt="crypto" />
                        <h1> {name} </h1>
                        <p className="coin-symbol"> {symbol} </p>
                    </div>
                    <div className="coin-data">
                        <p className="coin-price">${price} </p>
                        <p className="coin-volume">${volume} </p>
                        <p className="coin-rank">{rank} </p>
                        {
                            price_change < 0 ? (
                                <p className="coin-percentage-red"> {price_change.toFixed(2)}% </p>
                            ) : (
                                    <p className="coin-percentage-green"> {price_change.toFixed(2)}% </p>
                                )
                        }
                        <p className="market_cap">MKC: {market_cap}  </p>
                    </div>
                </div>
            </div>
        </>
    )
}



export default Coin;