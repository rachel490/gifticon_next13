"use client";

import { getPosts } from "@/hooks/queries/posts";
import { IPostItem } from "@/types/posts";
import { useQuery } from "@tanstack/react-query";

function Posts({ posts }: { posts: IPostItem[] }) {
  const { data } = useQuery({ queryKey: ["posts"], queryFn: getPosts, initialData: posts });
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
