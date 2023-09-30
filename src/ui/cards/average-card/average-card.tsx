import React from 'react';
import styled from 'styled-components';
import { LikeDislike } from '../../../features/like-dislike/like-dislike';
import { useAppSelector } from '../../../hooks';
import { ActiveBookmark } from '../../../features/activeBookmark/ActiveBookmark';

type Props = {
  id: number;
  image: React.ReactNode;
  text?: React.ReactNode;
  date: React.ReactNode;
  lesson_num?: React.ReactNode;
  title: React.ReactNode;
  author?: React.ReactNode;
  LikeDislike: React.ComponentType<{ postId: number }>;
  isFavorite: boolean;
  setActive: () => void;
  setImg: () => void;
};

export const AverageCard: React.FC<Props> = ({
  id,
  image,
  date,
  title,
  setActive,
  setImg,
  isFavorite,
}) => {
  const isOpen = useAppSelector((state) => state.previewPopUp.isModalOpen);
  const favoritesCards = useAppSelector((state) => state.activeBookmark);

  return (
    <AverageCardWrapper>
      <CardImgWrapper
        onClick={(event) => {
          event.stopPropagation();
          event.preventDefault();
          setImg();
        }}
      >
        <CardImgButton onClick={() => setActive()}>{image}</CardImgButton>
      </CardImgWrapper>
      <CardTopWrapper>
        <CardTextWrapper>
          <CardDate>{date}</CardDate>
          <CardTitle>{title}</CardTitle>
        </CardTextWrapper>
      </CardTopWrapper>
      <CardFooterImg
        onClick={(event) => {
          event.stopPropagation();
          event.preventDefault();
        }}
      >
        <LikeDislike postId={id}></LikeDislike>
        <ActiveBookmark id={id}></ActiveBookmark>
      </CardFooterImg>
      <BorderLine></BorderLine>
    </AverageCardWrapper>
  );
};

const AverageCardWrapper = styled.div`
  width: 352px;
  background-color: var(--background-primary-color);
`;

const CardTopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

const CardTextWrapper = styled.div`
  width: 100%;
`;

const CardDate = styled.div`
  font-size: 14px;
  color: grey;
  margin-bottom: 10px;
`;

const CardTitle = styled.h1`
  color: var(--text-primary-color);
  font-size: 17px;
  margin: 0;

  &:hover {
    color: var(--text-hover-color);
  }
`;

const CardImgWrapper = styled.div`
  margin-bottom: 17px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const CardImgButton = styled.button`
  cursor: pointer;
  border: none;
`;

const CardFooterImg = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  border-bottom: 1px solid #b4b4b477;
  padding-bottom: 25px;
`;

const BorderLine = styled.div``;
