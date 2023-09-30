import React from 'react';
import styled from 'styled-components';
import { LikeDislike } from '../../../features/like-dislike/like-dislike';
import { ActiveBookmark } from '../../../features/activeBookmark/ActiveBookmark';

type Props = {
  id: number;
  image: React.ReactNode;
  text: React.ReactNode;
  date: React.ReactNode;
  lesson_num?: React.ReactNode;
  title: React.ReactNode;
  author?: React.ReactNode;
  LikeDislike: React.ComponentType<{ postId: number }>;
  isFavorite: boolean;
  setActive: () => void;
  setImg: () => void;
};

export const SmallCard: React.FC<Props> = ({
  id,
  image,
  date,
  title,
  setActive,
  setImg,
  isFavorite,
}) => {
  // const [activeBookmark, setActiveBookmark] = useState(false);

  return (
    <BigCardWrapper>
      <CardTopWrapper>
        <CardTextWrapper>
          <CardDate>{date}</CardDate>
          <CardTitle>{title}</CardTitle>
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

const CardImgButton = styled.button`
  cursor: pointer;
  border: none;
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
