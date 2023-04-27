import { Button } from "@/components/Button/Button";
import Posts from "@/components/Posts/Posts";
import { getPosts } from "@/hooks/queries/posts";

export default async function Home() {
  const posts = await getPosts();

  return (
    <main>
      <h1> Welcome to Gifti Service App</h1>
      <Button />
      <Posts posts={posts} />
    </main>
  );
}
