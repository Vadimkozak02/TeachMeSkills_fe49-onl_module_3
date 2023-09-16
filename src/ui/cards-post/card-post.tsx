import React from 'react';
import styled from 'styled-components';
import { BigCard } from '../cards/big-card/big-card';
import { AverageCard } from '../cards/average-card/average-card';
import { SmallCard } from '../cards/small-card/small-card';
import smallAstronaut from '../cards/card-img/astronautSmall.jpg';
import { LikeDislike } from '../../features/like-dislike/like-dislike';
import { mokieApi } from '../../mokie.api';

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
  console.log('mokieApi', mokieApi[0]);
  return (
    <CardPostW>
      <PostWrapper>
        <PostLeft>
          {/* <BigCard
            id={mokieApi[0].id}
            image={<img src={mokieApi[0].image} alt="astronaut"></img>}
            text={<div>{mokieApi[0].text}</div>}
            date={<div>{mokieApi[0].date}</div>}
            title={<div>{mokieApi[0].title}</div>}
            LikeDislike={LikeDislike}
          ></BigCard> */}
          <LeftBottomWrapper>
            <LeftTop>
              <AverageCard
                id={mokieApi[1].id}
                image={<img src={mokieApi[1].image} alt="astronaut"></img>}
                text={<div>{mokieApi[1].text}</div>}
                date={<div>{mokieApi[1].date}</div>}
                title={<div>{mokieApi[1].title}</div>}
                LikeDislike={LikeDislike}
              ></AverageCard>
              <AverageCard
                id={mokieApi[2].id}
                image={<img src={mokieApi[2].image} alt="astronaut"></img>}
                text={<div>{mokieApi[2].text}</div>}
                date={<div>{mokieApi[2].date}</div>}
                title={<div>{mokieApi[2].title}</div>}
                LikeDislike={LikeDislike}
              ></AverageCard>
              <AverageCard
                id={mokieApi[3].id}
                image={<img src={mokieApi[3].image} alt="astronaut"></img>}
                text={<div>{mokieApi[3].text}</div>}
                date={<div>{mokieApi[3].date}</div>}
                title={<div>{mokieApi[3].title}</div>}
                LikeDislike={LikeDislike}
              ></AverageCard>
            </LeftTop>
            <LeftBottom>
              <AverageCard
                id={mokieApi[4].id}
                image={<img src={mokieApi[4].image} alt="astronaut"></img>}
                text={<div>{mokieApi[4].text}</div>}
                date={<div>{mokieApi[4].date}</div>}
                title={<div>{mokieApi[4].title}</div>}
                LikeDislike={LikeDislike}
              ></AverageCard>
              <AverageCard
                id={mokieApi[5].id}
                image={<img src={mokieApi[5].image} alt="astronaut"></img>}
                text={<div>{mokieApi[5].text}</div>}
                date={<div>{mokieApi[5].date}</div>}
                title={<div>{mokieApi[5].title}</div>}
                LikeDislike={LikeDislike}
              ></AverageCard>
              <AverageCard
                id={mokieApi[6].id}
                image={<img src={mokieApi[6].image} alt="astronaut"></img>}
                text={<div>{mokieApi[6].text}</div>}
                date={<div>{mokieApi[6].date}</div>}
                title={<div>{mokieApi[6].title}</div>}
                LikeDislike={LikeDislike}
              ></AverageCard>
            </LeftBottom>
          </LeftBottomWrapper>
        </PostLeft>
        <PostRight>
          <SmallCard
            id={mokieApi[7].id}
            image={<img src={mokieApi[7].image} alt="astronaut"></img>}
            text={<div>{mokieApi[7].text}</div>}
            date={<div>{mokieApi[7].date}</div>}
            title={<div>{mokieApi[7].title}</div>}
            LikeDislike={LikeDislike}
          ></SmallCard>
          <SmallCard
            id={mokieApi[8].id}
            image={<img src={mokieApi[8].image} alt="astronaut"></img>}
            text={<div>{mokieApi[8].text}</div>}
            date={<div>{mokieApi[8].date}</div>}
            title={<div>{mokieApi[8].title}</div>}
            LikeDislike={LikeDislike}
          ></SmallCard>
          <SmallCard
            id={mokieApi[9].id}
            image={<img src={mokieApi[9].image} alt="astronaut"></img>}
            text={<div>{mokieApi[9].text}</div>}
            date={<div>{mokieApi[9].date}</div>}
            title={<div>{mokieApi[9].title}</div>}
            LikeDislike={LikeDislike}
          ></SmallCard>
          <SmallCard
            id={mokieApi[10].id}
            image={<img src={mokieApi[10].image} alt="astronaut"></img>}
            text={<div>{mokieApi[10].text}</div>}
            date={<div>{mokieApi[10].date}</div>}
            title={<div>{mokieApi[10].title}</div>}
            LikeDislike={LikeDislike}
          ></SmallCard>
          <SmallCard
            id={mokieApi[11].id}
            image={<img src={mokieApi[11].image} alt="astronaut"></img>}
            text={<div>{mokieApi[11].text}</div>}
            date={<div>{mokieApi[11].date}</div>}
            title={<div>{mokieApi[11].title}</div>}
            LikeDislike={LikeDislike}
          ></SmallCard>
          <SmallCard
            id={mokieApi[12].id}
            image={<img src={mokieApi[12].image} alt="astronaut"></img>}
            text={<div>{mokieApi[12].text}</div>}
            date={<div>{mokieApi[12].date}</div>}
            title={<div>{mokieApi[12].title}</div>}
            LikeDislike={LikeDislike}
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
  display: flex;
  justify-content: space-between;
  background-color: var(--background-primary-color);
`;

const PostLeft = styled.div`
  margin-right: 20px;
`;

const PostRight = styled.div``;

const LeftBottomWrapper = styled.div`
  display: flex;
  width: 736px;
  justify-content: space-between;
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
