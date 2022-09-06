import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;

`;
const DataContainer = styled.div`
  display: flex;
  
 
  gap: 8px;
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
`;
const Image = styled.img`
  width: ${(props) => (props.alerta ? "180px" : "240px")};
  height: 122px;
  object-fit: contain;
`;
const LinkProduct = styled(Link)`
  text-decoration: none;
`;

export function Card(props) {
  return (
    <Container key={props.id}>
      <Name>{props.name}</Name>
      <DataContainer>
        <Paragraph>{props.year}</Paragraph>
        <Paragraph>|</Paragraph>
        <Paragraph>${props.price.toLocaleString()}</Paragraph>
      </DataContainer>
      <LinkProduct to={"detail/" + props.id}>
        <Image
          alerta={props.name.startsWith("Yaris") ? true : false}
          src={props.photo}
          alt={props.name}
        />
      </LinkProduct>
    </Container>
  );
}
