import { getTodos } from "@/hooks/queries/todos";
import getQueryClient from "@/lib/getQueryClient";
import { Hydrate, dehydrate } from "@tanstack/react-query";
import TodoList from "./TodoList";
import NewTodo from "./NewTodo";

async function TanstackTodos() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["todos"], getTodos);
  const dehydratedState = dehydrate(queryClient);

  return (
    <div>
      <h1>Tanstack Todos</h1>
      <Hydrate state={dehydratedState}>
        <TodoList />
        <NewTodo />
      </Hydrate>
    </div>
  );
}

export default TanstackTodos;
