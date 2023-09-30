import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { AverageCard } from '#ui/cards/average-card/average-card';
import {
  setIsModalOpen,
  setPreviewImg,
} from '../../../features/preview-pop-up/preview-pop-up.slice';
import { LikeDislike } from '../../../features/like-dislike/like-dislike';

export const FavoriteCards: React.FC = () => {
  const favoritesCards = useAppSelector((state) => state.activeBookmark.arr);

  const dispatch = useAppDispatch();

  return (
    <div>
      {favoritesCards.map((el) => (
        <AverageCard
          key={el.id}
          id={el.id}
          image={<img src={el.image} alt="astronaut"></img>}
          text={el.text}
          date={el.date}
          title={el.title}
          LikeDislike={LikeDislike}
          setActive={() => dispatch(setIsModalOpen(true))}
          setImg={() => dispatch(setPreviewImg(el.image))}
          isFavorite={el.isFavorite}
        />
      ))}
    </div>
  );
};
