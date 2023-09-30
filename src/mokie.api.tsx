import { LikeDislike } from './features/like-dislike/like-dislike';

import BigImgOne from './ui/image/Big-card-imgOne.png';

import AverageImgOne from './ui/image/average-card-imgOne.png';
import AverageImgTwo from './ui/image/average-card-imgTwo.png';
import AverageImgThree from './ui/image/average-card-imgThree.png';
import AverageImgFour from './ui/image/average-card-imgFour.png';

import SmallImgOne from './ui/image/small-card-imgOne.png';
import SmallImgTwo from './ui/image/small-card-imgTwo.png';
import SmallImgThree from './ui/image/small-card-imgThree.png';

export type TypeOfMockie = {
  id: number;
  image: string;
  text: string;
  date: string;
  title: string;
  author: number;
  LikeDislike: {
    likes: number;
    dislikes: number;
    userChoice: 'like' | 'dislike' | null;
  };
  isFavorite: boolean;
};

export const mokieApi: TypeOfMockie[] = [
  // Big Card start
  {
    id: 1,
    image: BigImgOne,
    text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
    date: 'April 20, 2021',
    title:
      'Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...',
    author: 1,
    LikeDislike: { likes: 18, dislikes: 3, userChoice: 'like' },
    isFavorite: false,
  },
  // Big Card end

  // Average Card start
  {
    id: 2,
    image: AverageImgOne,
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate laudantium provident, quibusdam modi nihil molestias nostrum rem error eos ipsa inventore ullam vitae explicabo magnam nobis ea expedita at doloribus!',
    date: 'April 20, 2021',
    title:
      'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
    author: 2,
    LikeDislike: { likes: 15, dislikes: 1, userChoice: 'like' },
    isFavorite: true,
  },
  {
    id: 3,
    image: AverageImgTwo,
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate laudantium provident, quibusdam modi nihil molestias nostrum rem error eos ipsa inventore ullam vitae explicabo magnam nobis ea expedita at doloribus!',
    date: 'April 20, 2021',
    title:
      'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
    author: 3,
    LikeDislike: { likes: 19, dislikes: 1, userChoice: 'dislike' },
    isFavorite: false,
  },
  {
    id: 4,
    image: AverageImgThree,
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate laudantium provident, quibusdam modi nihil molestias nostrum rem error eos ipsa inventore ullam vitae explicabo magnam nobis ea expedita at doloribus!',
    date: 'April 20, 2021',
    title:
      'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
    author: 4,
    LikeDislike: { likes: 21, dislikes: 1, userChoice: 'like' },
    isFavorite: true,
  },
  {
    id: 5,
    image: AverageImgFour,
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate laudantium provident, quibusdam modi nihil molestias nostrum rem error eos ipsa inventore ullam vitae explicabo magnam nobis ea expedita at doloribus!',
    date: 'April 20, 2021',
    title:
      'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
    author: 5,
    LikeDislike: { likes: 23, dislikes: 1, userChoice: 'like' },
    isFavorite: false,
  },
  {
    id: 6,
    image: AverageImgThree,
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate laudantium provident, quibusdam modi nihil molestias nostrum rem error eos ipsa inventore ullam vitae explicabo magnam nobis ea expedita at doloribus!',
    date: 'April 20, 2021',
    title:
      'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
    author: 6,
    LikeDislike: { likes: 17, dislikes: 1, userChoice: 'dislike' },
    isFavorite: false,
  },
  {
    id: 7,
    image: AverageImgOne,
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate laudantium provident, quibusdam modi nihil molestias nostrum rem error eos ipsa inventore ullam vitae explicabo magnam nobis ea expedita at doloribus!',
    date: 'April 20, 2021',
    title:
      'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
    author: 7,
    LikeDislike: { likes: 16, dislikes: 1, userChoice: 'like' },
    isFavorite: false,
  },
  // Average Card end

  // Small Card start
  {
    id: 8,
    image: SmallImgOne,
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate laudantium provident, quibusdam modi nihil molestias nostrum rem error eos ipsa inventore ullam vitae explicabo magnam nobis ea expedita at doloribus!',
    date: 'April 20, 2021',
    title:
      'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
    author: 8,
    LikeDislike: { likes: 31, dislikes: 3, userChoice: 'like' },
    isFavorite: true,
  },
  {
    id: 9,
    image: SmallImgTwo,
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate laudantium provident, quibusdam modi nihil molestias nostrum rem error eos ipsa inventore ullam vitae explicabo magnam nobis ea expedita at doloribus!',
    date: 'April 20, 2021',
    title:
      'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
    author: 9,
    LikeDislike: { likes: 15, dislikes: 2, userChoice: 'like' },
    isFavorite: false,
  },
  {
    id: 10,
    image: SmallImgThree,
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate laudantium provident, quibusdam modi nihil molestias nostrum rem error eos ipsa inventore ullam vitae explicabo magnam nobis ea expedita at doloribus!',
    date: 'April 20, 2021',
    title:
      'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
    author: 10,
    LikeDislike: { likes: 27, dislikes: 2, userChoice: 'dislike' },
    isFavorite: false,
  },
  {
    id: 11,
    image: SmallImgTwo,
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate laudantium provident, quibusdam modi nihil molestias nostrum rem error eos ipsa inventore ullam vitae explicabo magnam nobis ea expedita at doloribus!',
    date: 'April 20, 2021',
    title:
      'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
    author: 11,
    LikeDislike: { likes: 18, dislikes: 1, userChoice: 'like' },
    isFavorite: false,
  },
  {
    id: 12,
    image: SmallImgThree,
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate laudantium provident, quibusdam modi nihil molestias nostrum rem error eos ipsa inventore ullam vitae explicabo magnam nobis ea expedita at doloribus!',
    date: 'April 20, 2021',
    title:
      'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
    author: 12,
    LikeDislike: { likes: 10, dislikes: 1, userChoice: 'like' },
    isFavorite: true,
  },
  {
    id: 13,
    image: SmallImgOne,
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate laudantium provident, quibusdam modi nihil molestias nostrum rem error eos ipsa inventore ullam vitae explicabo magnam nobis ea expedita at doloribus!',
    date: 'April 20, 2021',
    title:
      'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
    author: 13,
    LikeDislike: { likes: 23, dislikes: 1, userChoice: 'like' },
    isFavorite: false,
  },
  // Small Card end
];

// id: number;
// image: React.ReactNode;
// text: React.ReactNode;
// date: React.ReactNode;
// lesson_num?: React.ReactNode;
// title: React.ReactNode;
// author?: React.ReactNode;
// LikeDislike: React.ComponentType<{ postId: number }>
