import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCarDetail } from "../../actions/action";


export function CarDetail(){
    let dispatch = useDispatch()
    let {id} = useParams()
    let detail = useSelector((state) => state.carsDetail)
    useEffect(() => {
        dispatch (getCarDetail(id))
    }, [dispatch])
    return(
        <div>
            <h1>Car detail</h1>
            <h2>{detail.name}</h2>
            <p>{detail.segment}</p>
            <img src={detail.photo} alt={detail.name} />
        </div>
    )
}