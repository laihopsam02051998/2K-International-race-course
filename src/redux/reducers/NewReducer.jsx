import { FETCH_NEWS, FETCH_NEWS_ID } from "../types/newType";

const initialNew = {
  new: [],
};

const NewReducer = (state = initialNew, action) => {
  switch (action.type) {
    case FETCH_NEWS: {
      state.new = [...action.payload];
      return { ...state };
    }
    case FETCH_NEWS_ID: {
      state.new = [...action.payload];
      return { ...state };
    }
    default:
      break;
  }
  return { ...state };
};

export default NewReducer;
