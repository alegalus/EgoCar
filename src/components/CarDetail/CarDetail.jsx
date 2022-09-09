import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCarDetail, clearDetail } from "../../actions/action";
import { Nav } from "../Nav/Nav";
import s from "./CarDetail.module.css";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

export function CarDetail() {
  let dispatch = useDispatch();
  let { id } = useParams();
  let detail = useSelector((state) => state.carsDetail);

  useEffect(() => {
    dispatch(getCarDetail(id));
  }, [dispatch]);
  //cuando desmonto el componente limpio los datos para que no sigan estando cuando vuelva
  useEffect(() => {
    return () => {
      dispatch(clearDetail());
    };
  }, []);

  let arrHighlights = [];
  for (const item in detail.model_highlights) {
    let data = detail.model_highlights[item];
    arrHighlights.push(data);
  }
  let features = detail.model_features?.map((el) => {
    return {
      title: el.name,
      content: el.description,
      image: el.image,
    };
  });

  let allExtra = arrHighlights.concat(features);

  return (
    <>
      <Nav />
      <div className={s.section}>
        <div className={s.details}>
          <h2 className={s.carName}>{detail.name}</h2>
          <h3 className={s.carTitle}>{detail.title}</h3>
          <p className={s.carParagraph}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto quia
            error, dolores eaque dolore nobis ad minus hic modi magni aliquid
            eligendi.
          </p>
        </div>
        <img className={s.carImage} src={detail.photo} alt={detail.name} />
      </div>

      <ScrollMenu className={s.scroll}>
        {features?.map((el) => (
          <div className={s.scrollH}>
            <img className={s.scrollImage} src={el.image} alt={el.title} />
            <div className={s.scrollTitleContainer}>
              <h2 className={s.scrollTitle}>{el.title}</h2>
            </div>
          </div>
        ))}
        {arrHighlights?.map((el) => (
          <div className={s.scrollH}>
            <img className={s.scrollImage} src={el.image} alt={el.title} />
            <div className={s.scrollTitleContainer}>
              <h2 className={s.scrollTitle}>{el.title}</h2>
            </div>
          </div>
        ))}
        {features?.map((el) => (
          <div className={s.scrollH}>
            <img className={s.scrollImage} src={el.image} alt={el.title} />
            <div className={s.scrollTitleContainer}>
              <h2 className={s.scrollTitle}>{el.title}</h2>
            </div>
          </div>
        ))}
      </ScrollMenu>

      {arrHighlights?.map((el) => (
        <div key={el.title} className={s.extraSection}>
          <img className={s.extraImage} src={el.image} alt={el.title} />
          <div className={s.extraDetails}>
            <h2 className={s.extraTitle}>{el.title}</h2>

            <p className={s.extraParagraph}>
              {el.content.slice(26,el.content.length-4)}
            </p>
          </div>
        </div>
      ))}
      <footer className={s.foot}></footer>
    </>
  );
}
