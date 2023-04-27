import { IPostItem } from "@/types/posts";
import axios from "axios";

export const getPosts = async () => {
  const data = await axios.get<IPostItem[]>("https://jsonplaceholder.typicode.com/posts");
  return data.data;
};
