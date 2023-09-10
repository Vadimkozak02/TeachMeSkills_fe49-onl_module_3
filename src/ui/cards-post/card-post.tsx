import React from 'react';
import styled from 'styled-components';
import { BigCard } from '../cards/big-card/big-card';
import { AverageCard } from '../cards/average-card/average-card';
import { SmallCard } from '../cards/small-card/small-card';
import astronaut from '../cards/card-img/astronautAverage.jpg';
import averageAstronaut from '../cards/card-img/astronaut_.jpg';
import smallAstronaut from '../cards/card-img/astronautSmall.jpg';

const BigCardItem = [
  {
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate laudantium provident, quibusdam modi nihil molestias nostrum rem error eos ipsa inventore ullam vitae explicabo magnam nobis ea expedita at doloribus!',
  },
  { date: 'April 20, 2021' },
  {
    title:
      'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
  },
];

export const CardPost: React.FC = () => {
  return (
    <CardPostW>
      <PostWrapper>
        <PostLeft>
          <LeftBottomWrapper>
            <LeftTop>
              <AverageCard
                image={<img src={averageAstronaut} alt="astronaut"></img>}
                text={<div>{BigCardItem.map(({ text }) => text)}</div>}
                date={<div>{BigCardItem.map(({ date }) => date)}</div>}
                title={<div>{BigCardItem.map(({ title }) => title)}</div>}
              ></AverageCard>
              <AverageCard
                image={<img src={averageAstronaut} alt="astronaut"></img>}
                text={<div>{BigCardItem.map(({ text }) => text)}</div>}
                date={<div>{BigCardItem.map(({ date }) => date)}</div>}
                title={<div>{BigCardItem.map(({ title }) => title)}</div>}
              ></AverageCard>
              <AverageCard
                image={<img src={averageAstronaut} alt="astronaut"></img>}
                text={<div>{BigCardItem.map(({ text }) => text)}</div>}
                date={<div>{BigCardItem.map(({ date }) => date)}</div>}
                title={<div>{BigCardItem.map(({ title }) => title)}</div>}
              ></AverageCard>
            </LeftTop>
            <LeftBottom>
              <AverageCard
                image={<img src={averageAstronaut} alt="astronaut"></img>}
                text={<div>{BigCardItem.map(({ text }) => text)}</div>}
                date={<div>{BigCardItem.map(({ date }) => date)}</div>}
                title={<div>{BigCardItem.map(({ title }) => title)}</div>}
              ></AverageCard>
              <AverageCard
                image={<img src={averageAstronaut} alt="astronaut"></img>}
                text={<div>{BigCardItem.map(({ text }) => text)}</div>}
                date={<div>{BigCardItem.map(({ date }) => date)}</div>}
                title={<div>{BigCardItem.map(({ title }) => title)}</div>}
              ></AverageCard>
              <AverageCard
                image={<img src={averageAstronaut} alt="astronaut"></img>}
                text={<div>{BigCardItem.map(({ text }) => text)}</div>}
                date={<div>{BigCardItem.map(({ date }) => date)}</div>}
                title={<div>{BigCardItem.map(({ title }) => title)}</div>}
              ></AverageCard>
            </LeftBottom>
          </LeftBottomWrapper>
        </PostLeft>
        <PostRight>
          <SmallCard
            image={<img src={smallAstronaut} alt="astronaut"></img>}
            text={<div>{BigCardItem.map(({ text }) => text)}</div>}
            date={<div>{BigCardItem.map(({ date }) => date)}</div>}
            title={<div>{BigCardItem.map(({ title }) => title)}</div>}
          ></SmallCard>
          <SmallCard
            image={<img src={smallAstronaut} alt="astronaut"></img>}
            text={<div>{BigCardItem.map(({ text }) => text)}</div>}
            date={<div>{BigCardItem.map(({ date }) => date)}</div>}
            title={<div>{BigCardItem.map(({ title }) => title)}</div>}
          ></SmallCard>
          <SmallCard
            image={<img src={smallAstronaut} alt="astronaut"></img>}
            text={<div>{BigCardItem.map(({ text }) => text)}</div>}
            date={<div>{BigCardItem.map(({ date }) => date)}</div>}
            title={<div>{BigCardItem.map(({ title }) => title)}</div>}
          ></SmallCard>
          <SmallCard
            image={<img src={smallAstronaut} alt="astronaut"></img>}
            text={<div>{BigCardItem.map(({ text }) => text)}</div>}
            date={<div>{BigCardItem.map(({ date }) => date)}</div>}
            title={<div>{BigCardItem.map(({ title }) => title)}</div>}
          ></SmallCard>
          <SmallCard
            image={<img src={smallAstronaut} alt="astronaut"></img>}
            text={<div>{BigCardItem.map(({ text }) => text)}</div>}
            date={<div>{BigCardItem.map(({ date }) => date)}</div>}
            title={<div>{BigCardItem.map(({ title }) => title)}</div>}
          ></SmallCard>
          <SmallCard
            image={<img src={smallAstronaut} alt="astronaut"></img>}
            text={<div>{BigCardItem.map(({ text }) => text)}</div>}
            date={<div>{BigCardItem.map(({ date }) => date)}</div>}
            title={<div>{BigCardItem.map(({ title }) => title)}</div>}
          ></SmallCard>
        </PostRight>
      </PostWrapper>
    </CardPostW>
  );
};

const CardPostW = styled.div`
  margin: auto;
`;

const PostWrapper = styled.div`
  width: 930px;
  display: flex;
  justify-content: space-between;
  background-color: var(--background-primary-color);
  /* padding: 10px; */
`;

const PostLeft = styled.div`
  margin-right: 20px;
`;

const PostRight = styled.div``;

const LeftBottomWrapper = styled.div`
  display: flex;
  /* flex-direction: column; */
`;

const LeftTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const LeftBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
