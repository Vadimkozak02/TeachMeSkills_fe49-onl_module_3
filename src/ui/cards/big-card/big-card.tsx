import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import Bookmark from '../card-img/bookmark.svg';
import BookmarkSolid from '../card-img/bookmark-solid.svg';
import MoreBtn from '../card-img/ellipsis.svg';

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

export const BigCard: React.FC<Props> = ({
  id,
  image,
  text,
  date,
  title,
  LikeDislike,
}) => {
  const [activeBookmark, setActiveBookmark] = useState(false);

  return (
    <BigCardWrapper>
      <CardTopWrapper>
        <CardTextWrapper>
          <CardDate>{date}</CardDate>
          <CardTitle>{title}</CardTitle>
          <CardText>{text}</CardText>
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
    </BigCardWrapper>
  );
};

const BigCardWrapper = styled.div`
  width: 736px;
  background-color: var(--background-primary-color);
  /* padding: 10px; */
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
`;

const CardText = styled.div`
  color: grey;
  width: 448px;
  font-size: 17px;
`;

const CardImgWrapper = styled.div``;

const CardFooterImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  padding-bottom: 25px;
  border-bottom: 1px solid #b4b4b477;
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
  width: 15px;
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
