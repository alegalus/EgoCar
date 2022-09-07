import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCars } from "../../actions/action";
import { Card } from "./Card";
import Order from "../Order/Order";
import FilterMobile from "../FilterMobile/FilterMobile";
import FilterWeb from "../FilterWeb/FilterWeb";
import s from "./Home.module.css";
import { Footer } from "../Footer/Footer";

export function Home() {
  let dispatch = useDispatch();
  let cars = useSelector((state) => state.allCars);

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  //utilizo el window.innerWidth para poder cambiar la version de web a mobile
  const [screen, setScreen] = useState(window.innerWidth);
  //aca en el use efect agrego un evenlistener para que cada vez que se modifique el screen renderize de manera
  //automatica la version que corresponda
  useEffect(() => {
    const handleResize = () => setScreen(window.innerWidth);
    window.addEventListener("resize", handleResize);
  }, [screen]);

  return (
    <div id={s.main}>
      <h2 className={s.tittle}>Descubrí todos los modelos </h2>
      <div id={s.filters}>
        {screen < 1200 && <FilterMobile />}
        {screen > 1200 && <FilterWeb />}
        <div id="order">
          <Order />
        </div>
      </div>
      <div id={s.carCardPos}>
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
      <div>
        <Footer />
      </div>
    </div>
  );
}
