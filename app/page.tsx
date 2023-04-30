import { Button } from "@/components/Button/Button";
import Count from "@/components/Count/Count";
import Posts from "@/components/Posts/Posts";
import Todos from "@/components/Todos/Server/Todos";
import TanstackTodos from "@/components/Todos/Tanstack/TanstackTodos";
import Users from "@/components/Users/Users";
import { getPosts } from "@/hooks/queries/posts";
import { FaBeer } from "react-icons/fa";

export default async function Home() {
  const posts = await getPosts();

  return (
    <main style={{ padding: "3rem" }}>
      <h1> Welcome to Gifti Service App</h1>
      <Button />
      <Posts posts={posts} />
      {/* @ts-expect-error Async Server Component */}
      <Users />
      {/* @ts-expect-error Async Server Component */}
      <Todos />
      {/* @ts-expect-error Async Server Component */}
      <TanstackTodos />
      <Count />
      <FaBeer />
    </main>
  );
}
