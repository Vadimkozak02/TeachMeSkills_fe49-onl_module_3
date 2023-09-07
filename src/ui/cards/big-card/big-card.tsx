import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import LikeWhite from '../card-img/likeSvg.svg';
import LikeBlack from '../card-img/likeSvgBlack.svg';
import Dislike from '../card-img/dislike.svg';
import DislikeBlack from '../card-img/dislikeBlack.svg';
import Bookmark from '../card-img/bookmark.svg';
import BookmarkSolid from '../card-img/bookmark-solid.svg';
import MoreBtn from '../card-img/ellipsis.svg';

type Props = {
  id?: React.ReactNode;
  image: React.ReactNode;
  text: React.ReactNode;
  date: React.ReactNode;
  lesson_num?: React.ReactNode;
  title: React.ReactNode;
  author?: React.ReactNode;
};

export const BigCard: React.FC<Props> = ({ image, text, date, title }) => {
  const [activeLike, setActiveLike] = useState(false);
  const [activeDislike, setActiveDislike] = useState(false);
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
      <CardFooterImg>
        <FooterLikeWrapper>
          <FooterLike onClick={() => setActiveLike(!activeLike)}>
            <LikeWrapper>
              <LikeImg src={activeLike ? LikeBlack : LikeWhite} alt="like" />
              <LikeCount>{activeLike ? '11' : '10'}</LikeCount>
            </LikeWrapper>
          </FooterLike>
          <FooterDislike onClick={() => setActiveDislike(!activeDislike)}>
            <DislikeWrapper>
              <DislikeImg
                src={activeDislike ? DislikeBlack : Dislike}
                alt="dislike"
              />
              <DislikeCount>{activeDislike ? '6' : '5'}</DislikeCount>
            </DislikeWrapper>
          </FooterDislike>
        </FooterLikeWrapper>
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
  width: 600px;
  background-color: var(--background-primary-color);
  padding: 10px;
`;

const CardTopWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
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
  font-size: 28px;
  margin: 0 0 10px;
`;

const CardText = styled.div`
  color: grey;
  width: 300px;
`;

const CardImgWrapper = styled.div`
  width: 40%;
  margin-top: 20px;

  img {
    width: 240px;
  }
`;

const CardFooterImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #b4b4b477;
`;

const FooterLikeWrapper = styled.div`
  width: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FooterLike = styled.button`
  display: flex;
  border: none;
  cursor: pointer;
  width: 30px;
  background-color: var(--background-primary-color);
`;

const LikeWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LikeImg = styled.img`
  width: 20px;
  margin-right: 5px;
`;

const LikeCount = styled.div`
  font-size: 14px;
`;

const DislikeWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const DislikeImg = styled.img`
  margin-right: 5px;
`;

const FooterDislike = styled.button`
  display: flex;
  width: 30px;
  background-color: var(--background-primary-color);
  border: none;
  cursor: pointer;

  img {
    width: 20px;
  }
`;

const DislikeCount = styled.div`
  font-size: 14px;
`;

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
  width: 15px;
`;

const FooterMoreBtn = styled.button`
  cursor: pointer;
  background-color: var(--background-primary-color);
  width: 30px;
  border: none;
`;

const FooterMoreImg = styled.img`
  width: 15px;
`;
