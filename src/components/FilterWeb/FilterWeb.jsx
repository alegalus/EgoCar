import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filter } from "../../actions/action";
import s from "./FilterWeb.module.css";

const FilterWeb = () => {
  let dispatch = useDispatch();
  const [, /*filter*/ setFilter] = useState("");
  let handleFilter = (value) => {
    dispatch(filter(value));
    setFilter(value);
  };

  return (
    <div id={s.filter}>
    <h3 className={s.filterTittle}>Filtrar por</h3>
    <div className={s.buttons}>
      <button className={s.butt} onClick={() => handleFilter("Todos")}>
        Todos
      </button>
      <button className={s.butt} onClick={() => handleFilter("Autos")}>
        Autos
      </button>
      <button
        className={s.butt}
        onClick={() => handleFilter("Pickups y Comerciales")}
      >
        Pickups y Comerciales
      </button>
      <button
        className={s.butt}
        onClick={() => handleFilter("SUVs y Crossover")}
      >
        SUVs y Crossover
      </button>
    </div>
  </div>
  );
};

export default FilterWeb;