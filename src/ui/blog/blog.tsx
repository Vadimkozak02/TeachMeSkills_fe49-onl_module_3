import styled from 'styled-components';
import { Tabs } from '../../features/tabs/Tabs';
import { CardPost } from '../../features/all-posts/all-posts';
import LeftArrow from '../templates/arrow-img/arrow-left.svg';
import RightArrow from '../templates/arrow-img/arrow-right.svg';
import { HeaderMenu } from '../../features/header-menu/header-menu';
import { useAppSelector } from '../../hooks';
import { FavoriteCards } from '#ui/cards/favorite-card/favorite-cards';
import { Link } from 'react-router-dom';
import { Pagination } from '#ui/pagination/pagination';

export const Blog: React.FC = () => {
  const isActive = useAppSelector((state) => state.tabs.activeTab);

  return (
    <BlogBg>
      <HeaderMenu></HeaderMenu>
      <BlogWrapper>
        <BlogTitleWrapper>
          <BlogTitle>Blog</BlogTitle>
          <Link to="/add-new-post">
            <AddNewPostBtn>Add post</AddNewPostBtn>
          </Link>
        </BlogTitleWrapper>
        <BlogTabs>
          <Tabs />
        </BlogTabs>
        {isActive === '2' ? <FavoriteCards /> : <CardPost></CardPost>}
        {/* <BlogOtherPages>
          <BlogLeftArrow>
            <LefrArrowBtn>
              <img src={LeftArrow} alt="left-arrow"></img>
              <LeftArrowText>Prev</LeftArrowText>
            </LefrArrowBtn>
          </BlogLeftArrow>
          
          <BlogRightArrow>
            <RightArrowBtn>
              <RightArrowText>Next</RightArrowText>
              <img src={RightArrow} alt="right-arrow"></img>
            </RightArrowBtn>
          </BlogRightArrow>
        </BlogOtherPages> */}
        <BlogFooter>
          <FooterYear>
            <FooterTextWrapper>
              <Year>©2022 Blogfolio</Year>
              <Rights>All rights reserved</Rights>
            </FooterTextWrapper>
          </FooterYear>
        </BlogFooter>
      </BlogWrapper>
    </BlogBg>
  );
};

const BlogBg = styled.div`
  background-color: var(--background-primary-color);
`;

const BlogWrapper = styled.div`
  width: 1120px;
  margin: auto;
`;

const BlogTitleWrapper = styled.div`
  width: 1120px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

const BlogTitle = styled.h1`
  color: var(--text-primary-color);
  margin: 50px 0 0;
`;

const AddNewPostBtn = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 10px;
  background-color: var(--burger-backkgorund-color);
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: var(--burger-hover-bg-color);
  }
`;

const BlogTabs = styled.div`
  margin-bottom: 20px;
`;
const BlogOtherPages = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0 30px;
`;

const BlogLeftArrow = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 15px;
    margin-right: 5px;
  }
`;

const LefrArrowBtn = styled.button`
  cursor: pointer;
  border: none;
  background-color: var(--background-primary-color);
  display: flex;
  align-items: center;
`;

const LeftArrowText = styled.div``;

const OtherPage = styled.ul`
  width: 150px;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
`;
const PageOne = styled.li``;
const PageOneLink = styled.a`
  text-decoration: none;
`;
const PageTwoLink = styled.a`
  text-decoration: none;
`;
const PageThreeLink = styled.a`
  text-decoration: none;
`;
const PageFourLink = styled.a`
  text-decoration: none;
`;
const PageEightLink = styled.a`
  text-decoration: none;
`;
const PageTwo = styled.li``;
const PageThree = styled.li``;
const PageFour = styled.li``;
const PageEight = styled.li``;

const BlogRightArrow = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 15px;
    margin-left: 5px;
  }
`;

const RightArrowBtn = styled.button`
  cursor: pointer;
  border: none;
  background-color: var(--background-primary-color);
  display: flex;
  align-items: center;
`;

const RightArrowText = styled.div``;

const BlogFooter = styled.div``;

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
