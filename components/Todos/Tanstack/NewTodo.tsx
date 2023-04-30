"use client";

import { addTodo } from "@/hooks/queries/todos";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useRef } from "react";

const getDate = () => {
  const currentDate = new Date();
  return currentDate.toISOString().split("T")[0];
};

function NewTodo() {
  const queryClient = useQueryClient();
  const inputRef = useRef<HTMLInputElement>(null);
  const addMutation = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputRef || !inputRef.current) return;
    const newTodo = inputRef.current.value;
    const newTodoPayload = {
      title: newTodo,
      desc: "",
      date: getDate(),
      isCompleted: false,
    };

    addMutation.mutate({ data: newTodoPayload });
    inputRef.current.value = "";
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input type="text" placeholder="add new todo" ref={inputRef} />
      <button type="submit">Add</button>
    </form>
  );
}

export default NewTodo;
