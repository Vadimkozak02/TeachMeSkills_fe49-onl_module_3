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
  text: React.ReactNode;
  date: React.ReactNode;
  lesson_num?: React.ReactNode;
  title: React.ReactNode;
  author?: React.ReactNode;
  LikeDislike: React.ComponentType<{ postId: number }>;
};

export const SmallCard: React.FC<Props> = ({ id, image, date, title }) => {
  const [activeBookmark, setActiveBookmark] = useState(false);

  return (
    <BigCardWrapper>
      <CardTopWrapper>
        <CardTextWrapper>
          <CardDate>{date}</CardDate>
          <CardTitle>{title}</CardTitle>
        </CardTextWrapper>
        <CardImgWrapper>{image}</CardImgWrapper>
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
    </BigCardWrapper>
  );
};

const BigCardWrapper = styled.div`
  width: 352px;
  background-color: var(--background-primary-color);
`;

const CardTopWrapper = styled.div`
  display: flex;
  margin-bottom: 25px;
`;

const CardTextWrapper = styled.div``;

const CardDate = styled.div`
  font-size: 14px;
  color: grey;
  margin-bottom: 10px;
`;

const CardTitle = styled.h1`
  color: var(--text-primary-color);
  font-size: 21px;
  margin: 0;

  &:hover {
    color: var(--text-hover-color);
  }
`;

const CardImgWrapper = styled.div`
  img {
    width: 80px;
  }
`;

const CardFooterImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #b4b4b477;
  padding-bottom: 25px;
  margin-bottom: 25px;
`;

const BorderLine = styled.div`
  padding-top: 10px;
`;

const FooterMoreWrapper = styled.div`
  width: 70px;
  display: flex;
  justify-content: space-between;
`;

const FooterBookmark = styled.button`
  cursor: pointer;
  background-color: var(--background-primary-color);
  width: 40px;
  border: none;
`;

const BookmarkImg = styled.img`
  width: 11px;
`;

const FooterMoreBtn = styled.button`
  cursor: pointer;
  background-color: var(--background-primary-color);
  width: 20px;
  border: none;
`;

const FooterMoreImg = styled.img`
  width: 15px;
`;
