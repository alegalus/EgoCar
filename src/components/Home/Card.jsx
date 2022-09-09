import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import s from "./Card.module.css";

const Container = styled.div`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
`;
const DataContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;
  margin-bottom: -1em;
  margin-top: -1em;
`;
const Name = styled.h2`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 30px;
  color: black;
`;
const Paragraph = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: black;
  text-align: center;
`;
const Image = styled.img`
  width: ${(props) => (props.alerta ? "180px" : "240px")};
  height: 122px;
  object-fit: contain;
  cursor: pointer;
`;
const LinkProduct = styled(Link)`
  text-decoration: none;
`;
const But = styled.button`
  background: #191919;
  border-radius: 40px;
  font-family: "ToyotaType";
  font-size: 13px;
  line-height: 23px;
  text-align: center;
  letter-spacing: 0.073125px;
  color: #ffffff;
  cursor: pointer;
  padding: 0 1.5em;
  margin-top: -1em;
`;

export function Card(props) {
  const [show, setShow] = useState(false);
  let handleIn = () => {
    setShow(!show);
  };

  return (
    <Container key={props.id}>
      <Name id={show && s.active}>{props.name}</Name>
      <DataContainer>
        <Paragraph>{props.year}</Paragraph>
        <Paragraph>|</Paragraph>
        <Paragraph>${props.price.toLocaleString()}</Paragraph>
      </DataContainer>
      <Image
        onClick={handleIn}
        alerta={props.name.startsWith("Yaris") ? true : false}
        src={props.photo}
        alt={props.name}
      />
      <LinkProduct to={"detail/" + props.id}>
        {show && <But>Ver Modelo</But>}
      </LinkProduct>
    </Container>
  );
}
