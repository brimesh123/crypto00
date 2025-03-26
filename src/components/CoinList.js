import React from 'react';
import '../App.css';

function CoinList({ coins, onCoinClick, currency }) {
    const currencySymbol = currency === 'usd' ? '$' : '₹';

    return (
        <div className="coin-list">
            {coins.map(coin => (
                <div key={coin.id} className="coin-item" onClick={() => onCoinClick(coin.id)}>
                    <img src={coin.image} alt={coin.name} className="coin-image" />
                    <div className="coin-info">
                        <span className="coin-name">{coin.name}
                            <span className="coin-symbol">({coin.symbol.toUpperCase()})</span>
                        </span>
                        <div className="coin-price">{currencySymbol}{coin.current_price.toLocaleString()}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CoinList;
