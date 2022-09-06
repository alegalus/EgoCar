import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCars} from "../../actions/action";
import { Card } from "./Card";
import Order from "../Order/Order";
import FilterMobile from "../FilterMobile/FilterMobile";
import s from "./Home.module.css"

export function Home() {
  let dispatch = useDispatch();
  let cars = useSelector((state) => state.allCars);

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

 
  return (
    <div id={s.main}>
      <h2 className={s.tittle}>Descubrí todos los modelos </h2>
      <div id={s.barraFiltros}>
      <div id="filter">
        <FilterMobile/>
      </div>
      <div id="order">
        <Order/>
      </div>
      </div>
    <div id={s.carCardPos} >
      {cars?.map((car) => (
        <Card
          id={car.id}
          key={car.id}
          name={car.name}
          year={car.year}
          price={car.price}
          photo={car.photo}
        />
      ))}
      </div>
      <footer className={s.footer}></footer>
    </div>
  );
}
