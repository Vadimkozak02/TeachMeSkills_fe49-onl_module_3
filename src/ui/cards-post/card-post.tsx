import React, { useState } from 'react';
import styled from 'styled-components';
import { AverageCard } from '../cards/average-card/average-card';
import { SmallCard } from '../cards/small-card/small-card';
import { LikeDislike } from '../../features/like-dislike/like-dislike';
import { mokieApi } from '../../mokie.api';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  setIsModalOpen,
  setPreviewImg,
} from '../../features/preview-pop-up/preview-pop-up.slice';
import closeBtn from '../../ui/menu/img/close_menu.svg';

import { PreviewPopUp } from '../../features/preview-pop-up/preview-pop-up';

export const CardPost: React.FC = () => {
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector((state) => state.previewPopUp.isModalOpen);
  const previewImg = useAppSelector((state) => state.previewPopUp.image);

  return (
    <CardPostW>
      <PostWrapper>
        <PostLeft>
          <LeftBottomWrapper>
            <LeftTop>
              {[1, 2, 3].map((el) => (
                <StyledLink to={`/posts/${el + 1}`}>
                  <AverageCard
                    id={mokieApi[el].id}
                    key={mokieApi[el].id}
                    image={<img src={mokieApi[el].image} alt="astronaut"></img>}
                    text={<div>{mokieApi[el].text}</div>}
                    date={<div>{mokieApi[el].date}</div>}
                    title={<div>{mokieApi[el].title}</div>}
                    LikeDislike={LikeDislike}
                    setActive={() => dispatch(setIsModalOpen(true))}
                    setImg={() => dispatch(setPreviewImg(mokieApi[el].image))}
                  ></AverageCard>
                  <PreviewPopUp
                    active={isModalOpen}
                    setActive={() => dispatch(setIsModalOpen)}
                  >
                    <PreviewWrapper>
                      <PreviewCloseBtnWrapper
                        onClick={(event) => {
                          event.stopPropagation();
                          event.preventDefault();
                        }}
                      >
                        <PreviewCloseBtn>
                          {<img src={previewImg} alt="astronaut"></img>}
                        </PreviewCloseBtn>
                      </PreviewCloseBtnWrapper>
                      <div
                        onClick={(event) => {
                          event.stopPropagation();
                          event.preventDefault();
                        }}
                      >
                        <PreviewImgWrapper
                          onClick={() => dispatch(setIsModalOpen(!isModalOpen))}
                        >
                          <PreviewCloseImg src={closeBtn}></PreviewCloseImg>
                          {/* {closeBtn} */}
                        </PreviewImgWrapper>
                      </div>
                    </PreviewWrapper>
                  </PreviewPopUp>
                </StyledLink>
              ))}
            </LeftTop>
            <LeftBottom>
              {[4, 5, 6].map((el) => (
                <StyledLink to={`/posts/${el + 1}`}>
                  <AverageCard
                    id={mokieApi[el].id}
                    key={mokieApi[el].id}
                    image={<img src={mokieApi[el].image} alt="astronaut"></img>}
                    text={<div>{mokieApi[el].text}</div>}
                    date={<div>{mokieApi[el].date}</div>}
                    title={<div>{mokieApi[el].title}</div>}
                    LikeDislike={LikeDislike}
                    setActive={() => dispatch(setIsModalOpen(true))}
                    setImg={() => dispatch(setPreviewImg(mokieApi[el].image))}
                  ></AverageCard>
                  <PreviewPopUp
                    active={isModalOpen}
                    setActive={() => dispatch(setIsModalOpen)}
                  >
                    <PreviewWrapper>
                      <PreviewCloseBtnWrapper
                        onClick={(event) => {
                          event.stopPropagation();
                          event.preventDefault();
                        }}
                      >
                        <PreviewCloseBtn>
                          {<img src={previewImg} alt="astronaut"></img>}
                        </PreviewCloseBtn>
                      </PreviewCloseBtnWrapper>
                      <div
                        onClick={(event) => {
                          event.stopPropagation();
                          event.preventDefault();
                        }}
                      >
                        <PreviewImgWrapper
                          onClick={() => dispatch(setIsModalOpen(!isModalOpen))}
                        >
                          <PreviewCloseImg src={closeBtn}></PreviewCloseImg>
                          {/* {closeBtn} */}
                        </PreviewImgWrapper>
                      </div>
                    </PreviewWrapper>
                  </PreviewPopUp>
                </StyledLink>
              ))}
            </LeftBottom>
          </LeftBottomWrapper>
        </PostLeft>
        <div>
          {[7, 8, 9, 10, 11, 12].map((el) => (
            <StyledLink to={`/posts/${el + 1}`}>
              <SmallCard
                id={mokieApi[el].id}
                key={mokieApi[el].id}
                image={<img src={mokieApi[el].image} alt="astronaut"></img>}
                text={<div>{mokieApi[el].text}</div>}
                date={<div>{mokieApi[el].date}</div>}
                title={<div>{mokieApi[el].title}</div>}
                LikeDislike={LikeDislike}
                setActive={() => dispatch(setIsModalOpen(true))}
                setImg={() => dispatch(setPreviewImg(mokieApi[el].image))}
              ></SmallCard>
              <PreviewPopUp
                active={isModalOpen}
                setActive={() => dispatch(setIsModalOpen)}
              >
                <PreviewWrapper>
                  <PreviewCloseBtnWrapper
                    onClick={(event) => {
                      event.stopPropagation();
                      event.preventDefault();
                    }}
                  >
                    <PreviewCloseBtn>
                      {<img src={previewImg} alt="astronaut"></img>}
                    </PreviewCloseBtn>
                  </PreviewCloseBtnWrapper>
                  <div
                    onClick={(event) => {
                      event.stopPropagation();
                      event.preventDefault();
                    }}
                  >
                    <PreviewImgWrapper
                      onClick={() => dispatch(setIsModalOpen(!isModalOpen))}
                    >
                      <PreviewCloseImg src={closeBtn}></PreviewCloseImg>
                    </PreviewImgWrapper>
                  </div>
                </PreviewWrapper>
              </PreviewPopUp>
            </StyledLink>
          ))}
        </div>
      </PostWrapper>
    </CardPostW>
  );
};

const StyledLink = styled(Link)`
  text-decoration: unset;
  position: relative;
`;

const CardPostW = styled.div`
  margin: auto;
`;

const PostWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--background-primary-color);
`;

const PostLeft = styled.div`
  margin-right: 20px;
`;

const LeftBottomWrapper = styled.div`
  display: flex;
  width: 736px;
  justify-content: space-between;
`;

const LeftTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const LeftBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PreviewWrapper = styled.div`
  width: 700px;
  height: 400px;
  background-color: var(--background-primary-color);
  margin: auto;
  padding-top: 100px;
  border-radius: 5px;
  /* pointer-events: none; */
`;

const PreviewCloseBtnWrapper = styled.div`
  margin: auto;
  width: 50%;
`;
const PreviewCloseBtn = styled.button`
  margin: auto;
  border: none;
`;

const PreviewImgWrapper = styled.div`
  position: absolute;
  top: 15px;
  right: 35px;
  width: 20px;
  cursor: pointer;
`;

const PreviewCloseImg = styled.img`
  width: 30px;
  height: 30px;
`;
