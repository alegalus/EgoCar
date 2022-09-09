export const GET_ALL_CARS = "GET_ALL_CARS";
export const GET_CAR_DETAIL = "GET_CAR_DETAIL";
export const ORDER_CAR = "ORDER_CAR";
export const FILTER_CAR = "FILTER_CAR";
export const CLEAR_DETAIL = "CLEAR_DETAIL";
const axios = require("axios").default;
// las actions nos van a servir para disparar las acciones que van a modificar mi state
// get all Cars me va a conectar con el get de todoslos elementos para renderizar  en pantalla
export function getAllCars() {
  return async function (dispatch) {
    let json = await axios.get("https://challenge.agenciaego.tech/api/models/");
    return dispatch({
      type: GET_ALL_CARS,
      payload: json.data,
    });
  };
}
//este actions es para traer la informacion de cada modelo details, el id lo traigo por params desde la route 
export function getCarDetail(id) {
  return async function (dispatch) {
    let json = await axios.get(
      "https://challenge.agenciaego.tech/api/models/" + id
    );
    return dispatch({
      type: GET_CAR_DETAIL,
      payload: json.data,
    });
  };
}
// estas son actions para que el reducer las tome y haga las acciones relacionadas a las mismas.
export function clearDetail() {
  return { type: CLEAR_DETAIL };
}

export function orderCar(payload) {
  return { type: ORDER_CAR, payload };
}

export function filter(payload) {
  return { type: FILTER_CAR, payload };
}
