import {
  FILTER_CAR,
  GET_ALL_CARS,
  GET_CAR_DETAIL,
  ORDER_CAR,
  CLEAR_DETAIL,
} from "../actions/action";
//el initial state es en donde voy a almacenar la informacion a renderizar en el front.
const initialState = {
  allCars: [],
  original: [],
  carsDetail: {},
};

function rootReducer(state = initialState, action) {
  //switcheamos segun el action type(desde action van a venir las type que es que accion va a ocurrir y el payload(la informacion))
  switch (action.type) {
    //Se guarda la info nueva, siempre trayendo lo que ya tenga el state guardado.
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
    //dejamos el state vacio cuando se desmonta el componente para que cuando vuelva a renderizar no me muestre info anterior
    case CLEAR_DETAIL: {
      return { ...state, carsDetail: {} };
    }
    case ORDER_CAR: {
      //creamos un auxiliar para poder ordenar de acuerdo a lo que necesitamos
      //para el ordenamiento utilizamos una funcion sort
      if (action.payload !== "Nada") {
        const orderAux = [...state.allCars];

        orderAux.sort((a, b) => {
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
        //retornamos siempre ese auxiliar ordenado segun la opcion seleccionada.
        return {
          ...state,
          allCars: orderAux,
        };
      }

      return {
        ...state,
        allCars: state.original,
      };
    }
    //para filtrar es similar al orden, guardamos una variable auxiliar y todos los filtros siempre van a ser desde esa variable
    //esto nos va a permitir filtrar seguido las distintas opciones, ya que si filtramos de allCars directamente no es posible esto
    case FILTER_CAR: {
      const aux = [...state.original];
      //siempre que seleccionamos todos recargamos allcars con todos los datos.
      if (action.payload === "Todos") {
        return { ...state, allCars: state.original };
      }
      if (action.payload === "Autos") {
        let car = aux?.filter((el) => el.segment === "Sedan");
        return { ...state, allCars: car };
      }
      if (action.payload === "Pickups y Comerciales") {
        let pickups = aux?.filter((el) => el.segment === action.payload);
        return { ...state, allCars: pickups };
      }
      if (action.payload === "SUVs y Crossover") {
        let suvs = aux?.filter((el) => el.segment === "SUVs");
        let hatch = aux?.filter((el) => el.segment === "Hatchback");
        let all = [...suvs, ...hatch];
        return { ...state, allCars: all };
      }
    }
    default:
      return state;
  }
}

export default rootReducer;
