import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { orderCar } from "../../actions/action";
import s from "./Order.module.css";

const Order = () => {
  let dispatch = useDispatch();
  const [, /*order*/ setOrder] = useState("");
  function handleOrder({ value }) {
    dispatch(orderCar(value));
    setOrder(value);
  }

  const options = [
    { value: "Nada", label: "Nada" },
    { value: "De menor a mayor precio", label: "De menor a mayor precio" },
    { value: "De mayor a menor precio", label: "De mayor a menor precio" },
    { value: "Mas nuevos primero", label: "Mas nuevos primero" },
    { value: "Mas viejos primero", label: "Mas viejos primero", border: "none" },
  ];

  const customStyle = {
    control: (styles) => ({
      ...styles,
      background: "#f2f2f2",
      border: "none",
      width: "180px",
    }),
    option: (styles) => ({
        ...styles,
        borderBottom: "1px solid #D8D8D8",
        height: "26px",
      }),
  };
  return (
    <Select
      id={s.select}
      styles={customStyle}
      defaultValue={{ label: "Ordenar por" }}
      name="Ordenar por"
      options={options}
      onChange={handleOrder}
    />
  );
};

export default Order;
