import * as React from "react";
import styled from "styled-components";

interface Props {
  onGameClickCb: () => void;
}

const gameIcons = [
  "https://media.giphy.com/media/5eFRL3jPLgbNj6iwPx/giphy.gif",
  "https://media.giphy.com/media/3PEHNKKT9aWWI/giphy.gif",
  "https://media.giphy.com/media/132WoEetMqxYly/giphy.gif",
  "https://media.giphy.com/media/LwyaWvUOyGSvmdLQ8l/giphy.gif"
];

const StyledGameList = styled.div`
  border: 2px solid green;
`;

const GameIcon = styled.img`
  object-fit: cover;
  margin-right: 5px;
  cursor: pointer;

  &:hover {
    transform: rotate(0.5turn);
  }
`;

function GamesList<Props>({ onGameClickCb }) {
  return (
    <StyledGameList>
      {gameIcons.map(game => (
        <GameIcon
          src={game}
          width={150}
          height={150}
          onClick={() => onGameClickCb(game)}
        />
      ))}
    </StyledGameList>
  );
}

export default GamesList;
