export type arr = {
  id: number;
  image: string;
  text: string;
  date: string;
  lesson_num: number;
  title: string;
  description: string;
  author: number;
};

export type SelectedPostType = {
  id: number;
};

export type SelectedPostResponse = {
  id: number;
};

export type SelectResponse = {
  data: Array<{
    id: number;
    image: string;
    text: string;
    date: string;
    lesson_num: number;
    title: string;
    description: string;
    author: number;
  }>;
};
