import { createAction } from ".";
import { FETCH_NEWS, FETCH_NEWS_ID } from "../types/newType";
import news from "../../data/news.json";

export const loadNewData = () => {
  const newData = news.post.postList;

  return (dispatch) => {
    dispatch(createAction(FETCH_NEWS, newData));
  };
};

export const loadNewDataById = (id) => {
  const newData = news.post.postList;
  const filterData = newData.filter((items) => items.id === id);
  return (dispatch) => {
    dispatch(createAction(FETCH_NEWS_ID, filterData));
  };
};
