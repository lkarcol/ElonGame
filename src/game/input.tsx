import * as React from "react";
import styled from "styled-components";

interface Props {
  onInputChangeCb: (url: string) => void;
}

const StyledInput = styled.input`
  height: 40px;
  width: 80%;
  margin-bottom: 10px;
`;

function Input({ onInputChangeCb }) {
  const internalOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInputChangeCb(e.currentTarget.value);
  };

  return (
    <StyledInput
      placeholder="Custom image/gif"
      onChange={internalOnChange}
      value=""
    />
  );
}

export default Input;
