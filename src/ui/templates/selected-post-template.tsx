import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import Bookmark from '../cards/card-img/bookmark.svg';
import BookmarkSolid from '../cards/card-img/bookmark-solid.svg';
import LeftArrow from './arrow-img/arrow-left.svg';
import RightArrow from './arrow-img/arrow-right.svg';
import { LikeDislike } from '../../features/like-dislike/like-dislike';
import { BackLink } from '../../features/back-link/back-link';

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

export const SelectedPostTemplate: React.FC<Props> = ({
  id,
  image,
  text,
  date,
  title,
}) => {
  const [activeBookmark, setActiveBookmark] = useState(false);

  return (
    <SelectedPostWrapper>
      <CardWrapper>
        <CardTopWrapper>
          <BackLinkWrapper>
            <BackLink />
            <NameOfPage>{`| Post ${id}`}</NameOfPage>
          </BackLinkWrapper>
          <CardTitle>{title}</CardTitle>
          <CardImgWrapper>{image}</CardImgWrapper>
          <CardText>{text}</CardText>
        </CardTopWrapper>
        <CardFooterImg>
          <LikeDislike postId={id}></LikeDislike>
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
                <img src={LeftArrow} alt="left-arrow"></img>
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
                <img src={RightArrow} alt="right-arrow"></img>
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
  background-color: lightgrey;
`;

const CardWrapper = styled.div`
  width: 1120px;
  padding: 10px;
  margin: auto;
`;

const CardTopWrapper = styled.div`
  margin-bottom: 20px;
`;

const BackLinkWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const NameOfPage = styled.div`
  margin-left: 5px;
  align-self: flex-end;
  color: var(--text-secondary-color);
`;

const CardTitle = styled.h1`
  text-align: left;
  color: black;
  font-size: 56px;
  margin: 0 auto 10px;
`;

const CardText = styled.div`
  color: var(--text-secondary-color);
  margin-bottom: 30px;
`;

const CardImgWrapper = styled.div`
  width: 800px;
  max-height: 400px;
  margin: 20px auto;
  display: flex;

  img {
    /* width: 100%;
    height: 100%; */
    margin: auto;
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
  background-color: lightgrey;
  border: none;
  cursor: pointer;
  margin-right: 10px;
`;
const CardPrevWrapper = styled.div`
  display: flex;
`;
const CardPrevText = styled.div``;
const CardPrevTitle = styled.div``;
const CardPrevDescription = styled.div`
  color: var(--text-secondary-color);
`;

const CardNextArrow = styled.div``;
const CardNextBtn = styled.button`
  width: 25px;
  background-color: lightgrey;
  border: none;
  cursor: pointer;
  margin-left: 10px;
`;
const CardNextWrapper = styled.div`
  display: flex;
`;
const CardNextText = styled.div``;
const CardNextTitle = styled.div`
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
