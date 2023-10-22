import React from 'react';
import styled from 'styled-components';
import { ActiveBookmark } from '../../../features/activeBookmark/active-bookmark';

type Props = {
  id: number;
  image: React.ReactNode;
  text: React.ReactNode;
  date: React.ReactNode;
  lesson_num?: React.ReactNode;
  title: React.ReactNode;
  author?: React.ReactNode;
  isFavorite: boolean;
  LikeDislike: React.ComponentType<{ postId: number }>;
  setActive: () => void;
  setImg: () => void;
  openSelectedPost: () => void;
};

export const BigCard: React.FC<Props> = ({
  id,
  image,
  text,
  date,
  title,
  isFavorite,
  LikeDislike,
  setActive,
  setImg,
  openSelectedPost,
}) => {
  return (
    <BigCardWrapper>
      <CardTopWrapper>
        <CardTextWrapper onClick={() => openSelectedPost()}>
          <CardDate>{date}</CardDate>
          <CardTitle>{title}</CardTitle>
          <CardText>{text}</CardText>
        </CardTextWrapper>
        <CardImgWrapper
          onClick={(event) => {
            event.stopPropagation();
            event.preventDefault();
            setImg();
          }}
        >
          <CardImgButton onClick={() => setActive()}>{image}</CardImgButton>
        </CardImgWrapper>
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
    </BigCardWrapper>
  );
};

const BigCardWrapper = styled.div`
  width: 736px;
  background-color: var(--background-primary-color);
`;

const CardTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const CardTextWrapper = styled.div`
  width: 60%;
`;

const CardDate = styled.div`
  font-size: 14px;
  color: grey;
  margin-bottom: 10px;
`;

const CardTitle = styled.h1`
  color: black;
  font-size: 34px;
  margin: 0 0 25px;

  &:hover {
    color: var(--text-hover-color);
  }
`;

const CardText = styled.div`
  color: grey;
  width: 448px;
  font-size: 17px;
`;

const CardImgWrapper = styled.div``;
const CardImgButton = styled.button`
  cursor: pointer;
  border: none;
`;

const CardFooterImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  padding-bottom: 25px;
  border-bottom: 1px solid #b4b4b477;
`;
