"use client";

import React, { useRef } from "react";
import { RootState } from "@/redux/store";
import { useAppDispatch, useAppSelector } from "@/hooks/redux/reduxHook";
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from "@/redux/slices/CouterSlice";

function Count() {
  const inputRef = useRef<HTMLInputElement>(null);
  const count = useAppSelector((state: RootState) => state.counterReducer.count);
  const dispatch = useAppDispatch();

  const handleAdd = () => {
    dispatch(increment());
  };

  const handleSubtract = () => {
    dispatch(decrement());
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>, type: "add" | "subtract") => {
    e.preventDefault();
    if (!inputRef || !inputRef.current) return;

    const number = Number(inputRef.current.value);

    if (type === "add") {
      dispatch(incrementByAmount(number));
    } else if (type === "subtract") {
      dispatch(decrementByAmount(number));
    }
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSubtract}>-</button>
      <form>
        <input type="number" placeholder="enter number" ref={inputRef} />
        <button type="submit" onClick={e => handleSubmit(e, "add")}>
          add
        </button>
        <button type="submit" onClick={e => handleSubmit(e, "subtract")}>
          subtract
        </button>
      </form>
    </div>
  );
}

export default Count;
