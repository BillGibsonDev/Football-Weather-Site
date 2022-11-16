import axios from 'axios';

export const fetchGames = () => axios.get(`https://nfl-weather-server.onrender.com/games`);