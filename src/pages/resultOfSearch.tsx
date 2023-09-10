import { RersultCard } from '#ui/cards/result-card/result-card';
import styled from 'styled-components';
import { HeaderMenu } from '../features/header-menu-sign-in/header-menu-sign-in';
import astronaut from '../ui/cards/card-img/astronaut_.jpg';
import LeftArrow from '../ui/templates/arrow-img/arrow-left.svg';
import RightArrow from '../ui/templates/arrow-img/arrow-right.svg';

const BigCardItem = [
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores recusandae adipisci deserunt eos quis quisquam libero aperiam perspiciatis odio, tempore eveniet possimus officiis sapiente voluptatum molestias praesentium odit cum tenetur! Laudantium perspiciatis reprehenderit fugit dolor nam porro corrupti libero beatae voluptate! Sint dolores nesciunt, amet tempore vero magni officiis asperiores quaerat, quasi in ad reprehenderit repudiandae maiores repellat perspiciatis laboriosam? Eaque temporibus vero nobis quis maiores tempore nihil. Quibusdam magni itaque optio quod, nisi, quam quas et nostrum, dignissimos placeat assumenda. Omnis voluptatibus, culpa ipsam rerum optio repudiandae velit aut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores recusandae adipisci deserunt eos quis quisquam libero aperiam perspiciatis odio, tempore eveniet possimus officiis sapiente voluptatum molestias praesentium odit cum tenetur! Laudantium perspiciatis reprehenderit fugit dolor nam porro corrupti libero beatae voluptate! Sint dolores nesciunt, amet tempore vero magni officiis asperiores quaerat, quasi in ad reprehenderit repudiandae maiores repellat perspiciatis laboriosam? Eaque temporibus vero nobis quis maiores tempore nihil. Quibusdam magni itaque optio quod, nisi, quam quas et nostrum, dignissimos placeat assumenda. Omnis voluptatibus, culpa ipsam rerum optio repudiandae velit aut.',
  },
  { date: 'April 20, 2021' },
  {
    title:
      'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
  },
];

export const ResultOfSearch: React.FC = () => {
  return (
    <ResultOfSearchBg>
      <HeaderMenu></HeaderMenu>
      <ResultOfSearchWrapper>
        <ResultTitle>Search results 'Astronauts'</ResultTitle>
        <ResultOfCardBody>
          <RersultCard
            image={<img src={astronaut} alt="astronaut"></img>}
            text={<div>{BigCardItem.map(({ text }) => text)}</div>}
            date={<div>{BigCardItem.map(({ date }) => date)}</div>}
            title={<div>{BigCardItem.map(({ title }) => title)}</div>}
          ></RersultCard>
          <RersultCard
            image={<img src={astronaut} alt="astronaut"></img>}
            text={<div>{BigCardItem.map(({ text }) => text)}</div>}
            date={<div>{BigCardItem.map(({ date }) => date)}</div>}
            title={<div>{BigCardItem.map(({ title }) => title)}</div>}
          ></RersultCard>
          <RersultCard
            image={<img src={astronaut} alt="astronaut"></img>}
            text={<div>{BigCardItem.map(({ text }) => text)}</div>}
            date={<div>{BigCardItem.map(({ date }) => date)}</div>}
            title={<div>{BigCardItem.map(({ title }) => title)}</div>}
          ></RersultCard>
          <RersultCard
            image={<img src={astronaut} alt="astronaut"></img>}
            text={<div>{BigCardItem.map(({ text }) => text)}</div>}
            date={<div>{BigCardItem.map(({ date }) => date)}</div>}
            title={<div>{BigCardItem.map(({ title }) => title)}</div>}
          ></RersultCard>
          <RersultCard
            image={<img src={astronaut} alt="astronaut"></img>}
            text={<div>{BigCardItem.map(({ text }) => text)}</div>}
            date={<div>{BigCardItem.map(({ date }) => date)}</div>}
            title={<div>{BigCardItem.map(({ title }) => title)}</div>}
          ></RersultCard>
          <RersultCard
            image={<img src={astronaut} alt="astronaut"></img>}
            text={<div>{BigCardItem.map(({ text }) => text)}</div>}
            date={<div>{BigCardItem.map(({ date }) => date)}</div>}
            title={<div>{BigCardItem.map(({ title }) => title)}</div>}
          ></RersultCard>
        </ResultOfCardBody>

        <ResultOfSearchOtherPages>
          <ResultOfSearchLeftArrow>
            <LefrArrowBtn>
              <img src={LeftArrow} alt="prev"></img>
              <LeftArrowText>Prev</LeftArrowText>
            </LefrArrowBtn>
          </ResultOfSearchLeftArrow>
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
          <ResultOfSearchRightArrow>
            <RightArrowBtn>
              <RightArrowText>Next</RightArrowText>
              <img src={RightArrow} alt="next"></img>
            </RightArrowBtn>
          </ResultOfSearchRightArrow>
        </ResultOfSearchOtherPages>

        <FooterYear>
          <FooterTextWrapper>
            <Year>{new Date().getFullYear()}</Year>
            <Rights>All rights reserved</Rights>
          </FooterTextWrapper>
        </FooterYear>
      </ResultOfSearchWrapper>
    </ResultOfSearchBg>
  );
};

const ResultOfSearchBg = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: var(--background-primary-color);
`;

const ResultOfSearchWrapper = styled.div`
  width: 930px;
  margin: auto;
`;

const ResultTitle = styled.h1`
  color: var(--text-primary-color);
  margin: 50px auto;
`;

const ResultOfCardBody = styled.div``;

const ResultOfSearchOtherPages = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0 30px;
`;

const ResultOfSearchLeftArrow = styled.div`
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
  background-color: var(--array-primary-color);
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
  color: var(--text-primary-color);
`;
const PageTwoLink = styled.a`
  text-decoration: none;
  color: var(--text-primary-color);
`;
const PageThreeLink = styled.a`
  text-decoration: none;
  color: var(--text-primary-color);
`;
const PageFourLink = styled.a`
  text-decoration: none;
  color: var(--text-primary-color);
`;
const PageEightLink = styled.a`
  text-decoration: none;
  color: var(--text-primary-color);
`;
const PageTwo = styled.li``;
const PageThree = styled.li``;
const PageFour = styled.li``;
const PageEight = styled.li``;

const ResultOfSearchRightArrow = styled.div`
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
  background-color: var(--array-primary-color);
  display: flex;
  align-items: center;
`;

const RightArrowText = styled.div``;

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
