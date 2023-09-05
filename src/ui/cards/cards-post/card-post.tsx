import React from "react";
import styled from "styled-components";
import { BigCard } from "../big-card/big-card";
import { AverageCard } from "../average-card/average-card";
import { SmallCard } from "../small-card/small-card";
import astronaut from "../card-img/astronautAverage.jpg";
import averageAstronaut from "../card-img/astronaut_.jpg";
import smallAstronaut from "../card-img/astronautSmall.jpg";

const BigCardItem = [
  {
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate laudantium provident, quibusdam modi nihil molestias nostrum rem error eos ipsa inventore ullam vitae explicabo magnam nobis ea expedita at doloribus!",
  },
  { date: "April 20, 2021" },
  {
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
  },
];

export const CardPost: React.FC = () => {
  return (
    <PostWrapper>
      <PostLeft>
        <BigCard
          image={<img src={astronaut} alt="astronaut"></img>}
          text={<div>{BigCardItem.map(({ text }) => text)}</div>}
          date={<div>{BigCardItem.map(({ date }) => date)}</div>}
          title={<div>{BigCardItem.map(({ title }) => title)}</div>}
        ></BigCard>
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
  );
};

const PostWrapper = styled.div`
  width: 930px;
  display: flex;
  justify-content: space-between;
  grid-template-areas: "BigCard BigCard SmallCard", "bigCard bigCard SmallCard",
    "AverageCard AverageCard SmallCard", "AverageCard AverageCard SmallCard",
    "AverageCard AverageCard SmallCard", "AverageCard AverageCard SmallCard";
  background-color: lightgrey;
  padding: 10px;
`;

const PostLeft = styled.div`
  margin-right: 20px;
`;

const PostRight = styled.div``;

const LeftBottomWrapper = styled.div``;

const LeftTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LeftBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
