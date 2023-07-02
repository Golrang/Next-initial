type TPosts = { body: string; id: number; title: string; userId: number }[];

export const getPosts = (): Promise<TPosts> =>
  fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json());
