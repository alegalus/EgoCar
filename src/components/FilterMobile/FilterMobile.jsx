import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { filter } from "../../actions/action";
import s from "./FilterMobile.module.css";

const FilterMobile = () => {
  //dividimos los filtros en version web y mobile, de acuero a lo solicitado
  let dispatch = useDispatch();
  const [, /*order*/ setOrder] = useState("");
  let handleFilter = ({ value }) => {
    dispatch(filter(value));
    setOrder(value);
  };
  //en esta version usamos la libreria react select, en donde definimos un objeto con los datos de las opsiones
  //que van a poder ser seleccionadas en el select
  const options = [
    { value: "Todos", label: "Todos" },
    { value: "Autos", label: "Autos" },
    { value: "Pickups y Comerciales", label: "Pickups y Comerciales" },
    { value: "SUVs y Crossover", label: "SUVs y Crossover", border: "none" },
  ];
  //estilos dentro del formato de la libreria.
  const customStyle = {
    control: (styles) => ({
      ...styles,
      background: "#f2f2f2",
      border: "none",
      width: "170px",
    }),
    option: (styles, state) => ({
      ...styles,
      borderBottom: "1px solid #D8D8D8",
      height: "26px",
      fontSize: "10px",
      background: state.isSelected ? "#D1D6D6" : "White",
      color: "#373737",
      border: state.data.border,
    }),
  };
  //en el elemento select de la libreria pasamos los datos que necesitamos para que funcione
  return (
    <Select
      id={s.select}
      styles={customStyle}
      defaultValue={{ label: "Filtrar por" }}
      name="Filtrar por"
      options={options}
      onChange={handleFilter}
    />
  );
};

export default FilterMobile;
