import { GET_GAMES } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const getGames = () => async (dispatch) => {
  try {
    const { data } = await api.fetchGames();
    dispatch({ type: GET_GAMES, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};