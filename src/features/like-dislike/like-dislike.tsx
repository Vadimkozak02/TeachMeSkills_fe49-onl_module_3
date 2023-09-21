import LikeWhite from '../../ui/cards/card-img/likeSvg.svg';
import LikeBlack from '../../ui/cards/card-img/likeSvgBlack.svg';
import Dislike from '../../ui/cards/card-img/dislike.svg';
import DislikeBlack from '../../ui/cards/card-img/dislikeBlack.svg';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { init, setActiveDislike, setActiveLike } from './like-dislike.slice';
import { useEffect } from 'react';
import { mokieApi } from '../../mokie.api';

type Props = {
  postId: number;
};

export const LikeDislike: React.FC<Props> = ({ postId }) => {
  const dispatch = useAppDispatch();
  const rating = useAppSelector((state) => state.likeDislike[postId]);
  const activeLike = rating.userChoice === 'like';

  const activeDislike = rating.userChoice === 'dislike';

  useEffect(() => {
    setTimeout(() => {
      const obj = Object.fromEntries(
        mokieApi.map((item) => [item.id, item.LikeDislike])
      );
      dispatch(init(obj));
    }, 3000);
  }, []);

  return (
    <>
      <FooterLikeWrapper>
        <FooterLike
          onClick={() => {
            dispatch(setActiveLike({ postId }));
          }}
        >
          <LikeWrapper>
            <LikeImg src={activeLike ? LikeBlack : LikeWhite} alt="like" />
            <LikeCount>{rating.likes}</LikeCount>
          </LikeWrapper>
        </FooterLike>
        <FooterDislike
          onClick={() => {
            dispatch(setActiveDislike({ postId }));
          }}
        >
          <DislikeWrapper>
            <DislikeImg
              src={activeDislike ? DislikeBlack : Dislike}
              alt="dislike"
            />
            <DislikeCount>{rating.dislikes}</DislikeCount>
          </DislikeWrapper>
        </FooterDislike>
      </FooterLikeWrapper>
    </>
  );
};

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
