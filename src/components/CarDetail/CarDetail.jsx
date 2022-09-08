import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCarDetail, clearDetail } from "../../actions/action";
import { Nav } from "../Nav/Nav";
import s from "./CarDetail.module.css"


export function CarDetail(){
    let dispatch = useDispatch()
    let {id} = useParams()
    let detail = useSelector((state) => state.carsDetail)
    useEffect(() => {
        dispatch (getCarDetail(id))
    }, [dispatch])
    //cuando desmonto el componente limpio los datos para que no sigan estando cuando vuelva
  useEffect(() => {
    return () => {
      dispatch(clearDetail());
    };
  }, []);
    return(
      <>
      <Nav/>
        <div>
            <h1>Car detail</h1>
            <h2>{detail.name}</h2>
            <p>{detail.segment}</p>
            <img src={detail.photo} alt={detail.name} />
        </div>
        </>
    )
}