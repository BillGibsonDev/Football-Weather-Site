import axios from 'axios';

export const fetchGames = () => axios.get(`https://nfl-weather.onrender.com/games`);