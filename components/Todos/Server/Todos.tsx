import { getTodos } from "@/hooks/queries/todos";
import TodoItem from "./TodoItem";

async function Todos() {
  const todos = await getTodos();

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} data={todo} />
        ))}
      </ul>
    </div>
  );
}

export default Todos;
