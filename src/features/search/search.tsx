import { useState } from 'react';
import styled from 'styled-components';
import searchIcon from '../../ui/menu/img/search.svg';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { search } from './search.slice';
import { DropDown } from './Drop-down';

export const Search: React.FC = () => {
  const [searchActive, setSearchAactive] = useState(false);
  const [searchedText, setSearchedText] = useState<string>('');
  const searchedPosts = useAppSelector((state) => state.search.searchedPosts);

  const dispatch = useAppDispatch();

  return (
    <>
      <MenuSearchWrapper>
        <MenuSearch
          type="input"
          value={searchedText}
          autoFocus={searchActive ? true : false}
          placeholder={searchActive ? 'Search...' : undefined}
          style={{
            backgroundColor: searchActive ? '#2d5394' : '#0000b4',
            cursor: searchActive ? 'auto' : 'not-allowed',
          }}
          readOnly={searchActive ? false : true}
          onChange={(event) => {
            setSearchedText(event.currentTarget.value);
            dispatch(search(event.currentTarget.value));
          }}
        ></MenuSearch>
        {searchActive ? (
          <DropDown
            posts={searchedPosts.results}
            searchedString={searchedText}
          ></DropDown>
        ) : null}
      </MenuSearchWrapper>
      <MenuSearchBtn
        type="button"
        onClick={() => setSearchAactive(!searchActive)}
      >
        <SearchImg src={searchIcon}></SearchImg>
      </MenuSearchBtn>
    </>
  );
};

const MenuSearchWrapper = styled.div`
  width: 90%;
  position: relative;
`;

const MenuSearch = styled.input`
  width: 100%;
  height: 100%;
  background-color: #2d5394;
  border: none;
  outline: none;
  font-size: 20px;
  color: var(--text-white-color);
  box-sizing: border-box;

  &::placeholder {
    color: var(--text-white-color);
  }
`;

const MenuSearchBtn = styled.button`
  width: 80px;
  min-height: 100%;
  background-color: #0000b4;
  border: none;
  cursor: pointer;
  color: var(--text-white-color);
  border-left: 2px solid #2d5394;
`;

const SearchImg = styled.img`
  width: 20px;
`;
