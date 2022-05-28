import React from 'react';
import './tracker.css';
import axios, { } from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Coin from './Coin';


const Tracker = () => {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');
    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false').then((res) => {

            setCoins(res.data);
            //console.log(res.data);
        }).catch(error => console.log(error));
    }, []);

    const handleChange = (e) => {
        //    console.log(e.target.value);
        setSearch(e.target.value);
    }

    const filterCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <>
            <div className="coin-app">
                <div className="coin-search">
                    <h1 className="coin-text">Search a Currency</h1>
                    <form >
                        <input type="text" placeholder='search' className="coin-input" onChange={handleChange} />
                    </form>
                </div>
            </div>

            {
                filterCoins.map((coin) => {
                    return (
                        <Coin
                            key={coin.id}
                            name={coin.name}
                            image={coin.image}
                            symbol={coin.symbol}
                            price={coin.current_price}
                            volume={coin.total_volume}
                            rank={coin.market_cap_rank}
                            price_change={coin.price_change_percentage_24h}
                            market_cap={coin.market_cap}
                        />

                    )
                })
            }



        </>
    )
}


export default Tracker;