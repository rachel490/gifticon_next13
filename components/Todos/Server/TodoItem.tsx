/* eslint-disable @typescript-eslint/no-misused-promises */

"use client";

import { deleteTodo } from "@/hooks/queries/todos";
import { ITodoItem } from "@/types/todos";
import { useRouter } from "next/navigation";

interface IProps {
  data: { id: number; attributes: ITodoItem };
}

function TodoItem({ data }: IProps) {
  const router = useRouter();

  const handleDelete = async (targetId: number) => {
    const { id } = await deleteTodo(targetId);
    console.log("deleted Id", id);
    router.refresh();
  };

  return (
    <li>
      <button onClick={() => handleDelete(data.id)}>{data.attributes.title}</button>
    </li>
  );
}

export default TodoItem;
