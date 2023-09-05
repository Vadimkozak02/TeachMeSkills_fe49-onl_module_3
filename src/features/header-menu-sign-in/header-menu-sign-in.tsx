import { useState } from 'react';
import styled from 'styled-components';
import search from '../../ui/menu/img/white.svg';
import burgerMenu from '../../ui/menu/img/burger_menu.svg';
import closeMenu from '../../ui/menu/img/close_white.svg';
import personLogo from '../../ui/menu/img/person.svg';

let users = [
  {
    id: 1,
    fullName: 'Artem Malkin',
  },
  {
    id: 2,
    fullName: 'Max Jordan',
  },
  {
    id: 3,
    fullName: 'Kris Smith',
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
        <BurgerPersonWrap style={{ display: isOpened ? 'flex' : 'none' }}>
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
        </BurgerPersonWrap>
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

const PersonName = styled.div`
  width: 100;
  color: white;
  list-style-type: none;
`;

const Burger = styled.div`
  position: relative;
`;

const BurgerPersonWrap = styled.div`
  position: absolute;
  width: 200px;
  display: flex;
  justify-content: space-around;
  line-height: 50px;
  align-items: center;
  background-color: #0000b4;
  border-top: 2px solid #2d5394;
`;

const BurgerPersonInitials = styled.div`
  width: 30px;
  text-align: center;
  color: white;
`;
