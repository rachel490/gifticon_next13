import strapiAxios from "@/lib/customAxios";
import { TTodoList, TTodoItem, ITodoPayload } from "@/types/todos";

export const getTodos = async () => {
  const { data } = await strapiAxios.get<TTodoList>(`/todos`);
  return data.data;
};

export const deleteTodo = async (todoId: number) => {
  const { data } = await strapiAxios.delete<TTodoItem>(`/todos/${todoId}`);
  return data.data;
};

export const addTodo = async (newTodo: ITodoPayload) => {
  const { data } = await strapiAxios.post<TTodoItem>(`/todos`, newTodo);
  return data.data;
};
