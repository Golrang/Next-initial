type TPhoto = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export const getPhoto = (id: number) =>
  fetch(`https://jsonplaceholder.typicode.com/photos/${id}`).then((res) =>
    res.json()
  );

export const getPhotos = (): Promise<TPhoto[]> =>
  fetch("https://jsonplaceholder.typicode.com/photos").then((res) =>
    res.json()
  );
