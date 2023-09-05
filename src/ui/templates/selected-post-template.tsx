import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import LikeWhite from '../cards/card-img/likeSvg.svg';
import LikeBlack from '../cards/card-img/likeSvgBlack.svg';
import Dislike from '../cards/card-img/dislike.svg';
import DislikeBlack from '../cards/card-img/dislikeBlack.svg';
import Bookmark from '../cards/card-img/bookmark.svg';
import BookmarkSolid from '../cards/card-img/bookmark-solid.svg';
import MoreBtn from '../cards/card-img/ellipsis.svg';

type Props = {
  id?: React.ReactNode;
  image: React.ReactNode;
  text: React.ReactNode;
  date: React.ReactNode;
  lesson_num?: React.ReactNode;
  title: React.ReactNode;
  author?: React.ReactNode;
};

export const SelectedPostTemplate: React.FC<Props> = ({
  image,
  text,
  date,
  title,
}) => {
  const [activeLike, setActiveLike] = useState(false);
  const [activeDislike, setActiveDislike] = useState(false);
  const [activeBookmark, setActiveBookmark] = useState(false);

  return (
    <SelectedPostWrapper>
      <CardWrapper>
        <CardTopWrapper>
          <CardDate>{date}</CardDate>
          <CardTitle>{title}</CardTitle>
          <CardImgWrapper>{image}</CardImgWrapper>
          <CardText>{text}</CardText>
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
              <BookmarkText>Add to favorites</BookmarkText>
            </FooterBookmark>
          </FooterMoreWrapper>
        </CardFooterImg>
      </CardWrapper>
    </SelectedPostWrapper>
  );
};

const SelectedPostWrapper = styled.div`
  background-color: lightgrey;
`;

const CardWrapper = styled.div`
  width: 1200px;
  padding: 10px;
  margin: auto;
`;

const CardTopWrapper = styled.div`
  margin-bottom: 20px;
`;

const CardDate = styled.div`
  font-size: 14px;
  color: var(--text-secondary-color);
  margin: 30px 0 10px;
`;

const CardTitle = styled.h1`
  text-align: center;
  color: black;
  font-size: 56px;
  margin: 0 auto 10px;
`;

const CardText = styled.div`
  color: var(--text-secondary-color);
`;

const CardImgWrapper = styled.div`
  width: 800px;
  margin: 20px auto;

  img {
    width: 100%;
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
  width: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FooterLike = styled.button`
  display: flex;
  border: none;
  cursor: pointer;
  width: 70px;
  background-color: #b1b1b1;
  line-height: 40px;
  padding-left: 12px;
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
  width: 70px;
  background-color: #b1b1b1;
  border: none;
  cursor: pointer;
  line-height: 40px;
  padding-left: 15px;

  img {
    width: 20px;
  }
`;

const DislikeCount = styled.div`
  font-size: 14px;
`;

const FooterMoreWrapper = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
`;

const FooterBookmark = styled.button`
  cursor: pointer;
  background-color: lightgrey;
  width: 150px;
  border: none;
  display: flex;
  align-items: center;
  background-color: #b1b1b1;
  padding-left: 15px;
`;

const BookmarkImg = styled.img`
  width: 15px;
  margin-right: 10px;
`;

const BookmarkText = styled.p`
  color: var(--text-secondary-color);
`;
