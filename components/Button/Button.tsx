"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { StyledButton } from "./button.styled";

const handleClick = () => {
  console.log("clicked");
};

const getTodos = async () => {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
};

export const Button = () => {
  const { data } = useQuery({ queryKey: ["todos"], queryFn: getTodos });
  console.log("data", data?.data);

  return <StyledButton onClick={handleClick}>heww</StyledButton>;
};
