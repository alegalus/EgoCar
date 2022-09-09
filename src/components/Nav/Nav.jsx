import React, { useEffect, useState } from "react";
import s from "./Nav.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCarDetail } from "../../actions/action";
import "./burguer.css";

export function Nav() {
  //esta info la traigo para saber cuando detail tiene o no informacion, cuando no tiene voy a mostrar en el nav
  //que estoy en la pagina principal de modelos, cuando ingrese al detalle de un modelo al estar con datos va a mostrar
  //que estoy navegando en el detalle de un modelo en particular
  let dispatch = useDispatch();
  let detail = useSelector((state) => state.carsDetail);

  useEffect(() => {
    dispatch(getCarDetail());
  }, [dispatch]);

  //utilizo el window.innerWidth para poder cambiar la version de web a mobile
  const [screen, setScreen] = useState(window.innerWidth);
  //aca en el use efect agrego un evenlistener para que cada vez que se modifique el screen renderize de manera
  //automatica la version que corresponda
  useEffect(() => {
    const handleResize = () => setScreen(window.innerWidth);
    window.addEventListener("resize", handleResize);
  }, [screen]);

  // para cambiar burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // toggle para el cambio del menu
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <>
      <nav id={s.navigator}>
        <Link to={"/"}>
          <img
            className={s.egoLogo}
            src="https://i.ibb.co/4VCCwwN/ego.png"
            alt="ego"
            border="0"
          />
        </Link>
        {screen > 1000 && (
          <div className={s.tittles}>
            <h4 className={Object.entries(detail).length !== 0 ? "" : s.active}>
              Modelos
            </h4>
            <div
              className={
                Object.entries(detail).length !== 0 ? "" : s.rectangleOne
              }
            ></div>
            <h4
              id={s.tittleTwo}
              className={Object.entries(detail).length !== 0 ? s.active : ""}
            >
              Ficha de modelo
            </h4>
            <div
              className={
                Object.entries(detail).length !== 0 ? s.rectangleTwo : ""
              }
            ></div>
          </div>
        )}
        <div id="menuWeb">
          <p className="cerrar">
            {isMenuClicked ? "Cerrar" : screen > 1000 && "Menú"}
          </p>
          <div className="burger-menu" onClick={updateMenu}>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
          </div>
        </div>
      </nav>
      <div className={menu_class}>
        <ul className={s.list}>
          <Link id={s.link} to={"/"}>
            <li>Modelos</li>
          </Link>
          <li>Servicios y Accesorios</li>
          <li>Financiación</li>
          <li>Reviews y Comunidad</li>
        </ul>
        <ul className={s.list}>
          <li>Toyota Mobility Service</li>
          <li>Toyota Gazoo Racing</li>
          <li>Toyota Híbridos</li>
        </ul>
        <ul className={s.list}>
          <li>Concesionarios</li>
          <li>Test Drive</li>
          <li>Contacto</li>
        </ul>
        <ul className={s.list} id={s.lastList}>
          <li>Actividades</li>
          <li>Servicios al Cliente</li>
          <li>Ventas Especiales</li>
          <li>Innovación</li>
          <li>Prensa</li>
          <li>Acerca de...</li>
        </ul>
      </div>
    </>
  );
}
