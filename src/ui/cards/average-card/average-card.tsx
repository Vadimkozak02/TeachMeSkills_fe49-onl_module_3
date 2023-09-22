import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import Bookmark from '../card-img/bookmark.svg';
import BookmarkSolid from '../card-img/bookmark-solid.svg';
import MoreBtn from '../card-img/ellipsis.svg';
import { LikeDislike } from '../../../features/like-dislike/like-dislike';

type Props = {
  id: number;
  image: React.ReactNode;
  text?: React.ReactNode;
  date: React.ReactNode;
  lesson_num?: React.ReactNode;
  title: React.ReactNode;
  author?: React.ReactNode;
  LikeDislike: React.ComponentType<{ postId: number }>;
};

export const AverageCard: React.FC<Props> = ({ id, image, date, title }) => {
  const [activeBookmark, setActiveBookmark] = useState(false);

  return (
    <AverageCardWrapper>
      <CardImgWrapper>{image}</CardImgWrapper>
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
        <FooterMoreWrapper>
          <FooterBookmark onClick={() => setActiveBookmark(!activeBookmark)}>
            <BookmarkImg
              src={activeBookmark ? BookmarkSolid : Bookmark}
              alt="bookmark"
            ></BookmarkImg>
          </FooterBookmark>
          <FooterMoreBtn>
            <FooterMoreImg src={MoreBtn} alt="More"></FooterMoreImg>
          </FooterMoreBtn>
        </FooterMoreWrapper>
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

const CardFooterImg = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  border-bottom: 1px solid #b4b4b477;
  padding-bottom: 25px;
`;

const BorderLine = styled.div``;

const FooterMoreWrapper = styled.div`
  width: 70px;
  display: flex;
  justify-content: space-between;
`;

const FooterBookmark = styled.button`
  cursor: pointer;
  background-color: var(--background-primary-color);
  width: 30px;
  border: none;
`;

const BookmarkImg = styled.img`
  width: 13px;
`;

const FooterMoreBtn = styled.button`
  cursor: pointer;
  background-color: var(--background-primary-color);
  width: 21px;
  border: none;
`;

const FooterMoreImg = styled.img`
  width: 15px;
`;
