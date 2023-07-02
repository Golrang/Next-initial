"use client";

import { getQueryClient } from "@/app/provider/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type TBody = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const myPost = (body: TBody): any => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(body),
  });
};

export const AddPost = () => {
  const client = useQueryClient();
  const { mutate } = useMutation(myPost, {
    onMutate: (data) => {
      const oldData: any = client.getQueryData(["posts"], { exact: false });
      const newData = [data, ...oldData];
      client.setQueryData(["posts"], newData);
    },
  });

  return (
    <form
      onSubmit={(e: any) => {
        e.preventDefault();
        const value = e.target.body.value;
        console.log({ value });
        mutate({ title: "titleTest", userId: 1, id: 2, body: value });
      }}
    >
      <input className="text-black" name="body" type="text" />
      <button type="submit">Submit</button>
    </form>
  );
};
