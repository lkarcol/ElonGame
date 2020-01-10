import * as React from "react";
import { render } from "react-dom";
import styled from "styled-components";

import { Game } from "./game";

const StyledApp = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("https://bitport.hu/images/content/201808/focus/elon_musk.jpg");
`;

function App() {
  return (
    <StyledApp>
      <Game />
    </StyledApp>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
