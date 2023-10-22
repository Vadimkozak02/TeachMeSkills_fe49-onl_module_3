import styled from 'styled-components';
import { toggleFavorites } from './active-bookmark.slice';
// import { SetActiveBookmark } from './isFavorite.slice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import BookmarkSolid from '../../ui/cards/card-img/bookmark-solid.svg';
import Bookmark from '../../ui/cards/card-img/bookmark.svg';
import MoreBtn from '../../ui/cards/card-img/ellipsis.svg';

type Props = {
  id: number;
};

export const ActiveBookmark: React.FC<Props> = ({ id }) => {
  const favoritesCards = useAppSelector((state) => state.activeBookmark.arr);

  let activeBookmark = false;
  if (favoritesCards.length !== 0) {
    activeBookmark = favoritesCards.some((el) => el.id === id);
  }

  const dispatch = useAppDispatch();
  return (
    <FooterMoreWrapper onClick={() => dispatch(toggleFavorites(id))}>
      <FooterBookmark
      // onClick={() => dispatch(SetActiveBookmark(!activeBookmark))}
      >
        <BookmarkImg
          src={activeBookmark ? BookmarkSolid : Bookmark}
          alt="bookmark"
        ></BookmarkImg>
      </FooterBookmark>
      <FooterMoreBtn>
        <FooterMoreImg src={MoreBtn} alt="More"></FooterMoreImg>
      </FooterMoreBtn>
    </FooterMoreWrapper>
  );
};

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
  width: 13px;
`;

const FooterMoreBtn = styled.button`
  cursor: pointer;
  background-color: var(--background-primary-color);
  width: 21px;
  border: none;
`;

const FooterMoreImg = styled.img`
  width: 15px;
`;
