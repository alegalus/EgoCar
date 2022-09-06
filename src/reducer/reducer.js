import {
  FILTER_CAR,
  GET_ALL_CARS,
  GET_CAR_DETAIL,
  ORDER_CAR,
} from "../actions/action";

const initialState = {
  allCars: [],
  original: [],
  carsDetail: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_CARS: {
      return {
        ...state,
        allCars: action.payload,
        original: action.payload,
      };
    }
    case GET_CAR_DETAIL: {
      return { ...state, carsDetail: action.payload };
    }
    case ORDER_CAR: {
      if (action.payload !== "Nada") {
        const filteredAux = [...state.allCars];

        filteredAux.sort((a, b) => {
          if (action.payload === "De menor a mayor precio")
            return a.price > b.price ? 1 : b.price > a.price ? -1 : 0;
          if (action.payload === "De mayor a menor precio")
            return a.price < b.price ? 1 : b.price < a.price ? -1 : 0;
          if (action.payload === "Mas nuevos primero") {
            return Number(a.year) < Number(b.year)
              ? 1
              : Number(b.year) < Number(a.year)
              ? -1
              : 0;
          }
          if (action.payload === "Mas viejos primero")
            return Number(a.year) > Number(b.year)
              ? 1
              : Number(b.year) > Number(a.year)
              ? -1
              : 0;
        });

        return {
          ...state,
          allCars: filteredAux,
        };
      }

      return {
        ...state,
        allCars: state.original,
      };
    }
    case FILTER_CAR: {
      if(action.payload === "Todos"){
        return {...state, allCars: state.original}
      }
      if(action.payload === "Autos"){
        let car = state.allCars?.filter((el) => el.segment === "Sedan")
        return {...state, allCars: car}
      }
      if(action.payload === "Pickups y Comerciales"){
        let pickups = state.allCars?.filter((el) => el.segment === action.payload)
        return {...state, allCars: pickups}
      }
      if(action.payload === "SUVs y Crossover" ){
        let suvs = state.allCars?.filter((el) => el.segment === "SUVs")
        let hatch = state.allCars?.filter((el) => el.segment === "Hatchback" )
        let all = [...suvs, ...hatch]
        return {...state, allCars: all}
      }
    }
    default:
      return state;
  }
}

export default rootReducer;
