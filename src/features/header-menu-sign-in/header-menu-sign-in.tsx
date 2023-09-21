import { useState } from 'react';
import styled from 'styled-components';
import search from '../../ui/menu/img/search.svg';
import burgerMenu from '../../ui/menu/img/burger-menu.svg';
import closeMenu from '../../ui/menu/img/close-btn.svg';
import personLogo from '../../ui/menu/img/person-two.svg';
import { BackLink } from '../back-link/back-link';

let users = [
  {
    id: 1,
    fullName: 'Artem Malkin',
  },
];

let nameOfUsers = users.map((item) => item.fullName.split(' '));
let initials = nameOfUsers.map((item) => item[0].charAt(0) + item[1].charAt(0));
console.log(initials);

export const HeaderMenu: React.FC = () => {
  const [isOpened, setIsOpen] = useState(false);
  const [searchActive, setSearchAactive] = useState(false);

  return (
    <>
      <MenuWrap>
        <MenuBurger type="button" onClick={() => setIsOpen(!isOpened)}>
          <MenuImg src={isOpened ? closeMenu : burgerMenu} alt="menu" />
        </MenuBurger>
        <MenuSearch
          type="input"
          autoFocus={searchActive ? true : false}
          placeholder={searchActive ? 'Search...' : undefined}
          style={{
            backgroundColor: searchActive ? '#2d5394' : '#0000b4',
            cursor: searchActive ? 'auto' : 'not-allowed',
          }}
          readOnly={searchActive ? false : true}
        ></MenuSearch>
        <MenuSearchBtn
          type="button"
          onClick={() => setSearchAactive(!searchActive)}
        >
          <SearchImg src={search}></SearchImg>
        </MenuSearchBtn>
        <MenuPersonWrap>
          <PersonLogo>
            <PersonImg src={personLogo} alt="userImg"></PersonImg>
          </PersonLogo>
        </MenuPersonWrap>
      </MenuWrap>
      <Burger>
        <BurgerWrap style={{ display: isOpened ? 'flex' : 'none' }}>
          <BurgerTop>
            <BurgerPesonWrap>
              <BurgerPersonInitials>
                {initials.map((item, index) => (
                  <div key={index}>{item}</div>
                ))}
              </BurgerPersonInitials>
              <PersonName>
                {users.map(({ id, fullName }) => (
                  <li key={id}>{fullName}</li>
                ))}
              </PersonName>
            </BurgerPesonWrap>
            <BurgerHomeBtn>
              <BackLink />
            </BurgerHomeBtn>
            <BurgerAddPostBtn>Add post</BurgerAddPostBtn>
          </BurgerTop>

          <BurgerButtom></BurgerButtom>
        </BurgerWrap>
      </Burger>
    </>
  );
};

const MenuWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  line-height: 50px;
  background-color: #2674a0;
`;

const MenuBurger = styled.button`
  cursor: pointer;
  width: 60px;
  border: none;
  border-right: 2px solid #2d5394;
  background-color: #0000b4;
  font-size: 42px;
  text-align: center;
  outline: none;
  color: white;
  position: relative;

  &:active {
    background-color: #000072;
  }
`;

const MenuImg = styled.img`
  width: 30px;
`;

const MenuSearch = styled.input`
  width: 90%;
  background-color: #2d5394;
  border: none;
  outline: none;
  padding: 5px 15px;
  font-size: 20px;
  color: white;

  &::placeholder {
    color: white;
  }
`;

const MenuSearchBtn = styled.button`
  width: 60px;
  min-height: 100%;
  background-color: #0000b4;
  border: none;
  cursor: pointer;
  color: white;
  border-left: 2px solid #2d5394;
`;

const SearchImg = styled.img`
  width: 20px;
`;

const MenuPersonWrap = styled.div`
  width: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #0000b4;
  border-left: 2px solid #2d5394;
`;

const PersonLogo = styled.button`
  cursor: pointer;
  background-color: #0000b4;
  border: none;
`;

const PersonImg = styled.img`
  /* margin-top: 15px; */
  width: 25px;
  height: 25px;
`;

const Burger = styled.div`
  position: relative;
`;

const BurgerWrap = styled.div`
  position: absolute;
  width: 200px;
  line-height: 50px;
  background-color: #ffffff;
  border-top: 2px solid #2d5394;
  height: 100vh;
  flex-direction: column;
`;

const BurgerTop = styled.div``;

const BurgerPesonWrap = styled.div`
  display: flex;
  /* padding-left: 20px; */
  background-color: #0000b4;
  border-bottom: 2px solid #2d5394;
  padding: 10px 0 10px 30px;
`;

const BurgerPersonInitials = styled.div`
  width: 30px;
  text-align: center;
  color: white;
  margin-right: 15px;
`;

const PersonName = styled.div`
  width: 100%;
  color: white;
  list-style-type: none;
`;

const BurgerHomeBtn = styled.div`
  width: 100%;
  border-bottom: 2px solid var(--background-primary-color);
  cursor: pointer;

  div {
    margin: 10px auto;
    text-align: center;
    font-weight: 600;

    &:hover {
      color: var(--text-hover-color);
    }
  }
`;

const BurgerAddPostBtn = styled.div`
  font-weight: 600;
  padding: 10px;
  text-align: center;
  border-bottom: 2px solid var(--background-primary-color);
  cursor: pointer;

  &:hover {
    color: var(--text-hover-color);
  }
`;

const BurgerButtom = styled.div``;
