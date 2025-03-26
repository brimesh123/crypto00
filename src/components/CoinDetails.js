import React from 'react';
import '../App.css';

function CoinDetails({ coin, currency }) {
    if (!coin) return null;

    const currencySymbol = currency === 'usd' ? '$' : '₹';

    return (
        <div className="coin-details">
            <div className="coin-details-header">
                <h2>{coin.name}</h2>
                <img src={coin.image.large} alt={coin.name} />
            </div>
            <div className="coin-details-stats">
                <div className="stat-item">
                    <div className="stat-label">Current Price</div>
                    <div className="stat-value">{currencySymbol}{coin.market_data.current_price[currency].toLocaleString()}</div>
                </div>
                <div className="stat-item">
                    <div className="stat-label">Market Cap</div>
                    <div className="stat-value">{currencySymbol}{coin.market_data.market_cap[currency].toLocaleString()}</div>
                </div>
                <div className="stat-item">
                    <div className="stat-label">24h High</div>
                    <div className="stat-value">{currencySymbol}{coin.market_data.high_24h[currency].toLocaleString()}</div>
                </div>
                <div className="stat-item">
                    <div className="stat-label">24h Low</div>
                    <div className="stat-value">{currencySymbol}{coin.market_data.low_24h[currency].toLocaleString()}</div>
                </div>
            </div>
        </div>
    );
}

export default CoinDetails;
