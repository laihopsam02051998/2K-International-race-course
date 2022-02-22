import React, { useEffect, useState } from "react";
import { TiTlePage } from "./../../components/Typography";
import { NomalImage } from "../../components/Card/styled";
import { Paragraph } from "../../components/Paragraph";
import { Share } from "../../components/SVG";
import CarouselBanner from "../../components/Carousel/CarouselBanner";
import ShortVideo from "../../components/Video/ShortVideo";
import { useDispatch, useSelector } from "react-redux";
import { loadNewDataById } from "../../redux/actions/newAction";
import Carousel from "../../components/Carousel";
import getNews from "./../../data/news.json";

function NewDetail(props) {
  const dispatch = useDispatch();
  const newItems = useSelector((state) => state.NewReducer.new);
  const [stateNews, setNews] = useState(props.match.params.Id);
  useEffect(() => {
    dispatch(loadNewDataById(stateNews));
  }, [stateNews]);

  const changeNews = (id) => {
    setNews(id);
  };
  return (
    <div>
      <header
        style={{
          padding: "2rem 3.7rem",
        }}
      >
        <TiTlePage>{newItems[0].postName}</TiTlePage>
        <NomalImage src={newItems[0].postImage} height={"30rem"} />
      </header>
      <section
        style={{
          display: "flex",
          padding: "0rem 4rem",
          justifyContent: "space-between",
        }}
      >
        <p>{newItems[0].postDate}</p>

        {/* <FB />
        <Youtube /> */}
        <Share />
      </section>
      <section style={{ padding: "0rem 3rem" }}>
        <Carousel courseHome={getNews.post.postList} changeNew={changeNews} />
      </section>
      <section
        style={{
          padding: "0rem 3rem",
        }}
      >
        <Paragraph
          title={newItems[0].headerContent.title}
          question={newItems[0].headerContent.question}
          content={newItems[0].headerContent.content}
          key={newItems[0].id}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            overflow: "hidden",
          }}
        >
          {newItems[0].bodyImage.map((img) => {
            return <NomalImage src={img} height={"30rem"} margin={"0.5rem"} />;
          })}
        </div>
      </section>

      <section style={{ padding: "4rem 3.7rem" }}>
        {newItems[0].bodyContent.map((news) => {
          return (
            <Paragraph
              title={news.title}
              question={news.question}
              content={news.content}
              key={news.id}
            />
          );
        })}
      </section>

      <section
        style={{
          padding: "0rem 3.7rem",
        }}
      >
        {newItems[0].footerImage.map((img) => {
          return <NomalImage src={img} height={"35rem"} margin={"0.5rem"} />;
        })}

        <Paragraph
          title={newItems[0].footerContent.title}
          question={newItems[0].footerContent.question}
          content={newItems[0].footerContent.content}
          key={newItems[0].id}
        />
      </section>

      <section style={{ padding: "4rem 4rem" }}>
        <ShortVideo />
      </section>

      <section>
        <CarouselBanner Slider={newItems[0].slide} />
      </section>
    </div>
  );
}

export default NewDetail;
