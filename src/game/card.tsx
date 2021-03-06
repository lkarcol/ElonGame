import * as React from "react";
import styled from "styled-components";
import Areas from "./areas";

type Position = {
  x: number;
  y: number;
};

type CardSize = {
  w: number;
  h: number;
};

interface Props {
  cardID: number;
  cardSize: CardSize;
  onCardClickCb: Function;
  position: Position;
  game: string;
}

const imageAreas = Areas();

const getArea = (props): string => {
  const { x, y } = imageAreas[props.cardID];
  return `${x}px ${y}px`;
};

const StyledCard = styled.div<{
  cardSize: CardSize;
  x: number;
  y: number;
  cardID: number;
  game: string;
}>`
  position: absolute;
  width: ${props => props.cardSize.w + "px"};
  height: ${props => props.cardSize.h + "px"};
  left: ${props => props.x + "px"};
  top: ${props => props.y + "px"};
  background-color: silver;
  font-size: 30px;
  text-align: center;
  cursor: pointer;
  background: url(${props => props.game}) ${props => getArea(props)} / 807px
    570px;
`;

function Card<Props>({ cardID, cardSize, onCardClickCb, position, game }) {
  const onCardClick = () => onCardClickCb(cardID);
  return (
    <StyledCard
      cardSize={cardSize}
      game={game}
      cardID={cardID}
      {...position}
      onClick={onCardClick}
    />
  );
}

export default Card;
