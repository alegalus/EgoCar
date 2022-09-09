import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCarDetail, clearDetail } from "../../actions/action";
import { Nav } from "../Nav/Nav";
import s from "./CarDetail.module.css";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

export function CarDetail() {
  //guardo el usedispatch para poder diparar las acciones
  let dispatch = useDispatch();
  //guardo el id que viene por params
  let { id } = useParams();
  //con el use selector me traigo la parte que quiero del state del reducer
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
  //debido a que la api tiene alunos subniveles tengo que recorrelos primero para despues poder volver a recorrerlos y renderizarlos en
  //pantalla. hicimos el recorrido de dos formas distintas.
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
      {/* este es el sroll horizontal que usamos de la libreria react-horizontal-scrolling-menu*/}
      <ScrollMenu className={s.scroll}>
        {/*como pusimos antes, volvemos a recorrer los objetos internos para poder renderizarlos */}
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
              {/*la descripcion de algunos elementos tenia valores que no eran para mostrar en pantalla, con el slice eliminamos esosdatos. */ }
              {el.content.slice(26, el.content.length - 4)}
            </p>
          </div>
        </div>
      ))}
      <footer className={s.foot}></footer>
    </>
  );
}
