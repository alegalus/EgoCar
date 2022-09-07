import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { filter } from "../../actions/action";
import s from "./FilterMobile.module.css";

const FilterMobile = () => {
  let dispatch = useDispatch();
  const [, /*order*/ setOrder] = useState("");
  let handleFilter = ({ value }) => {
    dispatch(filter(value));
    setOrder(value);
  };

  const options = [
    { value: "Todos", label: "Todos" },
    { value: "Autos", label: "Autos" },
    { value: "Pickups y Comerciales", label: "Pickups y Comerciales" },
    { value: "SUVs y Crossover", label: "SUVs y Crossover" },
  ];

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
    }),
  };
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
