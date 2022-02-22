import React, { useEffect } from "react";
import CardNews from "../../components/Card/CardNews";
import BigNewCard from "../../components/Card/BigNewCard";
import { useStyleMainNews } from "./style";
import { ButtonHover } from "../../components/Button/Button";
import { loadNewData } from "../../redux/actions/newAction";
import { useDispatch, useSelector } from "react-redux";

function News() {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.NewReducer.new);
  const classes = useStyleMainNews();

  useEffect(() => {
    dispatch(loadNewData());
  }, []);

  return (
    <div className={classes.MainNews}>
      <div className={classes.MainContentNews}>
        {news.map((item, index) => {
          if (index === 0) {
            return (
              <BigNewCard
                key={item.id}
                id={item.id}
                date={item.postDate}
                title={item.postName}
                image={item.postImage}
              />
            );
          } else if (index > 0 && index < 4) {
            return (
              <CardNews
                key={item.id}
                id={item.id}
                date={item.postDate}
                title={item.postName}
                image={item.postImage}
              />
            );
          }
        })}
      </div>
      <div className={classes.buttonNews}>
        <ButtonHover backgroundColor={"#202020"}>Xem Thêm </ButtonHover>
      </div>
    </div>
  );
}

export default News;
