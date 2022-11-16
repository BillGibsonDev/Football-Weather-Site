import { GET_GAMES } from '../constants/actionTypes';

const initialState = []

const reducer = (games = initialState, action) => {
  switch (action.type) {
    case GET_GAMES:
      return {
        ...games,
        games: action.payload
      };
    default:
      return {
        ...games
      };
    }
};

export default reducer;