import { IUserItem } from "@/types/users";
import axios from "axios";

export const getUsers = async () => {
  const data = await axios.get<IUserItem[]>("https://jsonplaceholder.typicode.com/users");
  return data.data;
};
