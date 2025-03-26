import axios from 'axios'; 
// Import the axios library for making HTTP requests

const baseURL = 'http://api.coingecko.com/api/v3/';
// Define the base URL for the CoinGecko API

// Fetch a list of coins (top 50 by market cap) in a specific currency
export const fetchCoins = async (currency) => {
    try {
        // Make a GET request to CoinGecko's 'coins/markets' endpoint
        // with query parameters for sorting and pagination
        const response = await axios.get(`${baseURL}coins/markets`, {
            params: {
                vs_currency: currency,          // e.g., "usd", "eur", etc.
                order: 'market_cap_desc',       // sort by descending market cap
                per_page: 150,                   // limit to 50 coins
                page: 1,                        // return the first page
                sparkline: false                // disable sparkline data
            }
        });
        // On success, return the array of coin data
        return response.data;
    } catch (error) {
        // If there's any error during the request, log it to the console
        console.error('Error fetching coins:', error);
        // Re-throw the error so the calling code can handle it
        throw error;
    }
};

// Fetch detailed info about a single coin by its ID
export const fetchCoinDetails = async (coinId) => {
    try {
        // Make a GET request to fetch details about a specific coin
        const response = await axios.get(`${baseURL}coins/${coinId}`);
        // Return the detailed coin data
        return response.data;
    } catch (error) {
        // Log and re-throw any errors that occur
        console.error('Error fetching coin details:', error);
        throw error;
    }
};
