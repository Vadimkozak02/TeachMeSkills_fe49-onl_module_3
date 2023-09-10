import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import LikeWhite from '../cards/card-img/likeSvg.svg';
import LikeBlack from '../cards/card-img/likeSvgBlack.svg';
import Dislike from '../cards/card-img/dislike.svg';
import DislikeBlack from '../cards/card-img/dislikeBlack.svg';
import Bookmark from '../cards/card-img/bookmark.svg';
import BookmarkSolid from '../cards/card-img/bookmark-solid.svg';
import LeftArrow from './arrow-img/arrow-left.svg';
import RightArrow from './arrow-img/arrow-right.svg';

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

        <CardArrows>
          <CardPrevArrow>
            <CardPrevWrapper>
              <CardPrevBtn>
                <img src={LeftArrow}></img>
              </CardPrevBtn>
              <CardPrevText>
                <CardPrevTitle>Prev</CardPrevTitle>
                <CardPrevDescription>
                  Lorem ipsum dolor sit amet
                </CardPrevDescription>
              </CardPrevText>
            </CardPrevWrapper>
          </CardPrevArrow>

          <CardNextArrow>
            <CardNextWrapper>
              <CardNextText>
                <CardNextTitle>Next</CardNextTitle>
                <CardNextDescription>
                  Maiores recusandae adipisci deserunt eos quis
                </CardNextDescription>
              </CardNextText>
              <CardNextBtn>
                <img src={RightArrow}></img>
              </CardNextBtn>
            </CardNextWrapper>
          </CardNextArrow>
        </CardArrows>

        <FooterYear>
          <FooterTextWrapper>
            <Year>{new Date().getFullYear()}</Year>
            <Rights>All rights reserved</Rights>
          </FooterTextWrapper>
        </FooterYear>
      </CardWrapper>
    </SelectedPostWrapper>
  );
};

const SelectedPostWrapper = styled.div`
  /* background-color: var(background-primary-color); */
  background-color: var(--background-primary-color);
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
  color: var(--text-primary-color);
  font-size: 56px;
  margin: 0 auto 10px;
`;

const CardText = styled.div`
  color: var(--text-secondary-color);
  margin-bottom: 30px;
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
  margin-bottom: 50px;
  padding-bottom: 50px;
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
  color: var(--text-secondary-color);
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
  color: var(--text-secondary-color);
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

const CardArrows = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;
const CardPrevArrow = styled.div``;
const CardPrevBtn = styled.button`
  width: 25px;
  background-color: var(--array-primary-color);
  border: none;
  cursor: pointer;
  margin-right: 10px;
`;
const CardPrevWrapper = styled.div`
  display: flex;
`;
const CardPrevText = styled.div``;
const CardPrevTitle = styled.div`
  color: var(--text-primary-color);
`;
const CardPrevDescription = styled.div`
  color: var(--text-secondary-color);
`;

const CardNextArrow = styled.div``;
const CardNextBtn = styled.button`
  width: 25px;
  background-color: var(--array-primary-color);
  border: none;
  cursor: pointer;
  margin-left: 10px;
`;
const CardNextWrapper = styled.div`
  display: flex;
`;
const CardNextText = styled.div``;
const CardNextTitle = styled.div`
  color: var(--text-primary-color);
  text-align: end;
`;
const CardNextDescription = styled.div`
  color: var(--text-secondary-color);
`;

const FooterYear = styled.footer`
  width: 100%;
  height: 50px;
  color: var(--text-secondary-color);
  border-top: 1px solid #b4b4b477;
  padding-top: 10px;
`;

const FooterTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Year = styled.div``;

const Rights = styled.div``;
