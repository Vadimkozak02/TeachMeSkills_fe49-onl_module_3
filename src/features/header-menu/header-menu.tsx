import { useState } from 'react';
import styled from 'styled-components';
import search from '../../ui/menu/img/search.svg';
import burgerMenu from '../../ui/menu/img/burger-menu.svg';
import closeMenu from '../../ui/menu/img/close-btn.svg';
import personLogo from '../../ui/menu/img/person-two.svg';
import { BackLink } from '../back-link/back-link';
import { ThemeSwitcher } from '../theme-switcher/theme-switcher';
import { SignIn } from '../../pages/sign-in';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setIsOpen } from './header-menu.slice';

// let users = [
//   {
//     id: 1,
//     fullName: 'Artem Malkin',
//   },
// ];

// let nameOfUsers = users.map((item) => item.fullName.split(' '));
// let initials = nameOfUsers.map((item) => item[0].charAt(0) + item[1].charAt(0));

export const HeaderMenu: React.FC = () => {
  const dispatch = useAppDispatch();
  const isOpened = useAppSelector((state) => state.headerMenu.isOpened);

  const [searchActive, setSearchAactive] = useState(false);
  const [isActive, setIsActive] = useState(true);

  const userInfo = useAppSelector((state) => state.aboutUser.name);
  const userName = userInfo.username;
  console.log('userName', userName);

  return (
    <>
      <MenuWrap>
        <MenuBurger
          type="button"
          onClick={() => dispatch(setIsOpen(!isOpened))}
        >
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
        <MenuPersonWrap style={{ width: !isActive ? '80px' : '250px' }}>
          {!isActive ? (
            <PersonLogo>
              <PersonImg src={personLogo} alt="userImg"></PersonImg>
            </PersonLogo>
          ) : (
            <BurgerPesonWrap>
              <BurgerPersonInitialsWrapper>
                <BurgerPersonInitials>
                  {userName ? (
                    <div>{userName}</div>
                  ) : (
                    <div>
                      <PersonImg src={personLogo} alt="userImg"></PersonImg>
                    </div>
                  )}
                </BurgerPersonInitials>
              </BurgerPersonInitialsWrapper>
              {/* <PersonName>{<li>{userName}</li>}</PersonName> */}
            </BurgerPesonWrap>
          )}
        </MenuPersonWrap>
      </MenuWrap>
      <Burger>
        <BurgerWrap style={{ display: isOpened ? 'flex' : 'none' }}>
          <BurgerTop>
            <BurgerPesonWrap>
              <BurgerPersonInitialsWrapper>
                <BurgerPersonInitials>
                  {userName ? (
                    <div>{userName}</div>
                  ) : (
                    <div>
                      <PersonImg src={personLogo} alt="userImg"></PersonImg>
                    </div>
                  )}
                </BurgerPersonInitials>
              </BurgerPersonInitialsWrapper>
              {/* <PersonName>{<div>{userName}</div>}</PersonName> */}
            </BurgerPesonWrap>
            <BurgerHomeBtn onClick={() => dispatch(setIsOpen(!isOpened))}>
              <BackLink />
            </BurgerHomeBtn>
            <Link
              to="/add-new-post"
              onClick={() => dispatch(setIsOpen(!isOpened))}
            >
              <BurgerAddPostBtn>Add post</BurgerAddPostBtn>
            </Link>
          </BurgerTop>

          <BurgerButtom>
            <ThemeSwitcher></ThemeSwitcher>
            <LogOutWrapper
              onClick={() => {
                setIsActive(!isActive);
                dispatch(setIsOpen(!isOpened));
              }}
            >
              {userName ? 'Log Out' : <Link to="/sign-in">Sign In</Link>}
            </LogOutWrapper>
          </BurgerButtom>
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
  width: 80px;
  border: none;
  border-right: 2px solid #2d5394;
  background-color: var(--burger-backkgorund-color);
  font-size: 42px;
  text-align: center;
  outline: none;
  color: var(--text-white-color);
  position: relative;
  padding: 12px;

  &:active {
    background-color: var(--burger-hover-bg-color);
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
  color: var(--text-white-color);

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
  background-color: var(--text-white-color);
  border-top: 2px solid #2d5394;
  min-height: 600px;
  flex-direction: column;
  justify-content: space-between;
`;

const BurgerTop = styled.div``;

const BurgerPesonWrap = styled.div`
  display: flex;
  align-items: center;
  background-color: #0000b4;
  justify-content: center;
  padding: 10px;
`;

const BurgerPersonInitialsWrapper = styled.div`
  text-align: center;
  color: var(--text-white-color);
  /* margin-right: 25px; */
`;

const BurgerPersonInitials = styled.div`
  width: 40px;
  line-height: 25px;
  border-radius: 3px;
`;

const PersonName = styled.div`
  color: var(--text-white-color);
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

const LogOutWrapper = styled.button`
  width: 100%;
  background-color: var(--logIn-Out-background-color);
  border: none;
  line-height: 70px;
  font-size: 18px;
  cursor: pointer;

  &:active {
    background-color: var(--logIn-Out--active-bg-color);
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
