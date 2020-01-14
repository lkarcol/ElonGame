import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "./card";
import GameList from "./list";
import Input from "./input";
import { BOARD_WIDTH, BOARD_HEIGHT, MAX_CARDS, CARD_SIZE } from "./constants";

type GameState = {
  positionID: number;
  cardID: number;
  x: number;
  y: number;
};

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledBoard = styled.div`
  position: relative;
  width: ${BOARD_WIDTH}px;
  height: ${BOARD_HEIGHT}px;
  border: 1px solid red;
`;

const SuccesImage = styled.img`
  margin: auto;
  width: 100vw;
  height: 100vh;
`;

function renderCards(state: GameState[], OnCardClickCb, game: string) {
  return state.map(
    (boardState, k) =>
      boardState.cardID && (
        <Card
          key={k}
          game={game}
          cardSize={CARD_SIZE}
          onCardClickCb={OnCardClickCb}
          cardID={boardState.cardID}
          position={{ x: boardState.x, y: boardState.y }}
        />
      )
  );
}

function generateGameState(): GameState[] {
  let state: GameState[] = [];
  let cards = [1, 2, 3, 4, 5, 6, 7, 8, null];
  let id = 1;

  for (let i = 0; i < (MAX_CARDS + 1) / 3; i++) {
    for (let j = 0; j < (MAX_CARDS + 1) / 3; j++) {
      const cardID = cards[Math.floor(Math.random() * cards.length)];
      cards = cards.filter(p => p !== cardID);

      state = [
        ...state,
        {
          positionID: id,
          cardID,
          y: i * CARD_SIZE.h,
          x: j * CARD_SIZE.w
        }
      ];
      id++;
    }
  }
  return state;
}

function checkMove(empty: GameState, clicked: GameState): Boolean {
  return (
    (Math.abs(empty.positionID - clicked.positionID) === 1 &&
      empty.y === clicked.y) ||
    (Math.abs(empty.positionID - clicked.positionID) === 3 &&
      empty.x === clicked.x)
  );
}

function checkResult(state: GameState[]): Boolean {
  const finalPattern = "1,2,3,4,5,6,7,8,";
  return finalPattern === state.map(p => p.cardID).join();
}

function Game() {
  const [game, setGame] = useState<string>();
  const [gameState, setGameState] = useState<GameState[]>(generateGameState());
  const [succes, setSucces] = useState<boolean>(false);

  useEffect(() => {
    if (checkResult(gameState)) {
      setSucces(!succes);
    }
  }, [gameState]);

  const onGameClickCb = (game: string) => {
    setGame(game);
  };

  const onCardClickCb = (cardID: number) => {
    const state = [...gameState];
    const emptyBox = gameState.findIndex(p => p.cardID === null);
    const clickedCard = gameState.findIndex(p => p.cardID === cardID);

    if (checkMove(state[emptyBox], state[clickedCard])) {
      state[emptyBox].cardID = cardID;
      state[clickedCard].cardID = null;
      setGameState(state);
    }
  };

  const onInputChangeCb = (url: string) => {
    setGame(url);
  };

  return succes ? (
    <SuccesImage
      src={
        "https://media1.tenor.com/images/74e68f4e032eda142c96c886a9d5b716/tenor.gif"
      }
    />
  ) : (
    <GameContainer>
      <Input onInputChangeCb={onInputChangeCb} />
      <GameList onGameClickCb={onGameClickCb} />
      <StyledBoard>{renderCards(gameState, onCardClickCb, game)}</StyledBoard>
    </GameContainer>
  );
}

export default Game;
