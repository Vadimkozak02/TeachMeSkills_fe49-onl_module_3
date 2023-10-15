import React, { useEffect } from 'react';
import styled from 'styled-components';
import { AverageCard } from '../../ui/cards/average-card/average-card';
import { SmallCard } from '../../ui/cards/small-card/small-card';
import { LikeDislike } from '../like-dislike/like-dislike';
import { mokieApi } from '../../mokie.api';
import { Link, Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  setIsModalOpen,
  setPreviewImg,
} from '../preview-pop-up/preview-pop-up.slice';
import closeBtn from '../../ui/menu/img/close_menu.svg';

import { PreviewPopUp } from '../preview-pop-up/preview-pop-up';
import { getAllPosts } from './all-post.slice';
import { setSelectedPost } from '../selected-post/selected-post.slice';

export const CardPost: React.FC = () => {
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector((state) => state.previewPopUp.isModalOpen);
  const previewImg = useAppSelector((state) => state.previewPopUp.image);
  const data = useAppSelector((state) => state.allPost.allPost);
  const newData = data;
  const smallCardData = data.concat(newData);
  useEffect(() => {
    dispatch(
      getAllPosts({ limit: 3, offset: 0, ordering: 'asc', search: 'post' })
    );
  }, []);

  return (
    <CardPostW>
      <PostWrapper>
        <PostLeft>
          <LeftBottomWrapper>
            <LeftTop>
              {data.map((el) => (
                <StyledLink to={`/posts/${el.id}`}>
                  <AverageCard
                    key={el.id}
                    id={el.id}
                    image={<img src={el.image} alt="astronaut"></img>}
                    text={<div>{el.text}</div>}
                    date={<div>{el.date}</div>}
                    title={<div>{el.title}</div>}
                    LikeDislike={LikeDislike}
                    setActive={() => dispatch(setIsModalOpen(true))}
                    setImg={() => dispatch(setPreviewImg(el.image))}
                    isFavorite={mokieApi[0].isFavorite}
                    openSelectedPost={() => dispatch(setSelectedPost(el.id))}
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
              {data.map((el) => (
                <StyledLink to={`/posts/${el.id}`}>
                  <AverageCard
                    key={el.id}
                    id={el.id}
                    image={<img src={el.image} alt="astronaut"></img>}
                    text={<div>{el.text}</div>}
                    date={<div>{el.date}</div>}
                    title={<div>{el.title}</div>}
                    LikeDislike={LikeDislike}
                    setActive={() => dispatch(setIsModalOpen(true))}
                    setImg={() => dispatch(setPreviewImg(el.image))}
                    isFavorite={mokieApi[1].isFavorite}
                    openSelectedPost={() => dispatch(setSelectedPost(el.id))}
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
          {smallCardData.map((el) => (
            <StyledLink to={`/posts/${el.id}`}>
              <SmallCard
                key={el.id}
                id={el.id}
                image={<img src={el.image} alt="astronaut"></img>}
                text={<div>{el.text}</div>}
                date={<div>{el.date}</div>}
                title={<div>{el.title}</div>}
                LikeDislike={LikeDislike}
                setActive={() => dispatch(setIsModalOpen(true))}
                setImg={() => dispatch(setPreviewImg(el.image))}
                isFavorite={mokieApi[2].isFavorite}
                openSelectedPost={() => dispatch(setSelectedPost(el.id))}
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

const AddNewPostBtn = styled.button`
  width: 100px;
  height: 50px;
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
  margin-left: 20%;
`;
const PreviewCloseBtn = styled.button`
  margin: auto;
  border: none;

  img {
    width: 400px;
    height: 300px;
  }
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
