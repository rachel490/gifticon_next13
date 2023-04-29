"use client";

import { useQuery } from "@tanstack/react-query";
import { getTodos } from "@/hooks/queries/todos";

function TodoList() {
  const { data: todos } = useQuery({ queryKey: ["todos"], queryFn: getTodos });

  return (
    <ul>
      {todos?.map(todo => (
        <li key={todo.id}>
          <button>{todo.attributes.title}</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
