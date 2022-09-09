import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filter } from "../../actions/action";
import s from "./FilterWeb.module.css";

const FilterWeb = () => {
  let dispatch = useDispatch();
  const [filt, setFilt] = useState("Todos");
  //a traves de este handler envio el valor seleccionado para que se haga el dispatch de la action correspondiente
  //y tambien guardo en un estado local el valor para dejar marcada la opcion en pantalla.
  let handleFilter = (value) => {
    dispatch(filter(value));
    setFilt(value);
  };

  //en lugar de un select usamos botones ya que era los mas simple para lograr lo pedido en el diseño.
  return (
    <div id={s.filter}>
      <h3 className={s.filterTittle}>Filtrar por</h3>
      <div className={s.buttons}>
        <button
          id={filt === "Todos" ? s.active : ""}
          className={s.butt}
          onClick={() => handleFilter("Todos")}
        >
          Todos
        </button>
        <button
          id={filt === "Autos" ? s.active : ""}
          className={s.butt}
          onClick={() => handleFilter("Autos")}
        >
          Autos
        </button>
        <button
          className={s.butt}
          id={filt === "Pickups y Comerciales" ? s.active : ""}
          onClick={() => handleFilter("Pickups y Comerciales")}
        >
          Pickups y Comerciales
        </button>
        <button
          className={s.butt}
          id={filt === "SUVs y Crossover" ? s.active : ""}
          onClick={() => handleFilter("SUVs y Crossover")}
        >
          SUVs y Crossover
        </button>
      </div>
    </div>
  );
};

export default FilterWeb;
