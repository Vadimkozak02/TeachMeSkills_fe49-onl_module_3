import { MenuSite } from '#ui/menu/menu-site';
import styled from 'styled-components';
import { Tabs } from '../../features/tabs/Tabs';
import { CardPost } from '#ui/cards-post/card-post';
import LeftArrow from '../templates/arrow-img/arrow-left.svg';
import RightArrow from '../templates/arrow-img/arrow-right.svg';

export const Blog: React.FC = () => {
  return (
    <BlogBg>
      <MenuSite></MenuSite>
      <BlogWrapper>
        <BlogTitle>Blog</BlogTitle>
        <BlogTabs>
          <Tabs />
        </BlogTabs>
        <CardPost></CardPost>
        <BlogOtherPages>
          <BlogLeftArrow>
            <LefrArrowBtn>
              <img src={LeftArrow}></img>
              <LeftArrowText>Prev</LeftArrowText>
            </LefrArrowBtn>
          </BlogLeftArrow>
          <OtherPage>
            <PageOne>
              <PageOneLink href="#">1</PageOneLink>
            </PageOne>
            <PageTwo>
              <PageTwoLink href="#">2</PageTwoLink>
            </PageTwo>
            <PageThree>
              <PageThreeLink href="#">3</PageThreeLink>
            </PageThree>
            <PageFour>
              <PageFourLink href="#">...</PageFourLink>
            </PageFour>
            <PageEight>
              <PageEightLink href="#">8</PageEightLink>
            </PageEight>
          </OtherPage>
          <BlogRightArrow>
            <RightArrowBtn>
              <RightArrowText>Next</RightArrowText>
              <img src={RightArrow}></img>
            </RightArrowBtn>
          </BlogRightArrow>
        </BlogOtherPages>
        <BlogFooter>
          <FooterYear>
            <FooterTextWrapper>
              <Year>{new Date().getFullYear()}</Year>
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
  width: 930px;
  margin: auto;
`;
const BlogTitle = styled.h1`
  margin: 50px 0 0;
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
