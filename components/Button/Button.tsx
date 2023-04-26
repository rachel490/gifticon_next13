"use client";

import { StyledButton } from "./button.styled";

const handleClick = () => {
  console.log("clicked");
};

export const Button = () => {
  return <StyledButton onClick={handleClick}>heww</StyledButton>;
};
