import React, { useState, useEffect } from 'react';
import { fetchCoins, fetchCoinDetails } from './api';
import CoinList from './components/CoinList';
import CoinDetails from './components/CoinDetails';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
    const [coins, setCoins] = useState([]);
    const [selectedCoin, setSelectedCoin] = useState(null);
    const [search, setSearch] = useState('');
    const [currency, setCurrency] = useState('usd'); // Add currency state

    useEffect(() => {
        const getCoins = async () => {
            const allCoins = await fetchCoins(currency); // Pass currency to API call
            setCoins(allCoins);
        };
        getCoins();
    }, [currency]); // Add currency as a dependency

    const handleSearchChange = (value) => {
        setSearch(value.toLowerCase());
    };

    const handleCoinClick = async (coinId) => {
        const coinData = await fetchCoinDetails(coinId);
        setSelectedCoin(coinData);
    };

    const handleCurrencyChange = (event) => {
        setCurrency(event.target.value);
    };

    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search) || coin.symbol.toLowerCase().includes(search)
    );

    return (
        <div className="App">
            <header className="App-header">
                <h1>Crypto Currency Tracker</h1>
                <SearchBar onChange={handleSearchChange} />
                <div className="c_filter">
                    <label>Select Currency: </label>
                    <select value={currency} onChange={handleCurrencyChange}>
                        <option value="usd">USD</option>
                        <option value="inr">INR</option>
                    </select>
                </div>
            </header>
            <center>{selectedCoin && <CoinDetails coin={selectedCoin} currency={currency} />}</center>
            <CoinList coins={filteredCoins} onCoinClick={handleCoinClick} currency={currency} />
        </div>
    );
}

export default App;
