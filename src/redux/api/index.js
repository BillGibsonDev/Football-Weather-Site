import axios from 'axios';

export const fetchGames = () => axios.get(`https://nfl-weather-server-rxb4.onrender.com/games`);