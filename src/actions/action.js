export const GET_ALL_CARS = "GET_ALL_CARS";
export const GET_CAR_DETAIL = "GET_CAR_DETAIL";
export const ORDER_CAR = "ORDER_CAR"
export const FILTER_CAR = "FILTER_CAR"
const axios = require("axios").default;

export function getAllCars() {
  return async function (dispatch) {
    let json = await axios.get("https://challenge.agenciaego.tech/api/models/");
    return dispatch({
      type: GET_ALL_CARS,
      payload: json.data,
    });
  };
}

export function getCarDetail (id) {
  return async function(dispatch){
    let json = await axios.get("https://challenge.agenciaego.tech/api/models/" + id)
    return dispatch({
      type: GET_CAR_DETAIL,
      payload: json.data
    })
  }
}

export function orderCar(payload){
  return {type: ORDER_CAR, payload}
}

export function filter(payload){
  return {type: FILTER_CAR, payload}
}


