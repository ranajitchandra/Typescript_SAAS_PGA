import publicAxiosApi from "@/Components/Hook/publicAxiosApi";
import type { Post } from "@/types/ApiTypes";


export const getPosts = async ({ pageParam = 0 }): Promise<Post[]> => {
  const res = await publicAxiosApi.get<Post[]>(
    `/posts?_start=${pageParam}&_limit=9`
  );

  return res.data;
};