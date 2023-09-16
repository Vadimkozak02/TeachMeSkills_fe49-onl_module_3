import React from 'react';
import styled from 'styled-components';
// import { BigCard } from '../cards/big-card/big-card';
import { AverageCard } from '../cards/average-card/average-card';
import { SmallCard } from '../cards/small-card/small-card';
import { LikeDislike } from '../../features/like-dislike/like-dislike';
import { mokieApi } from '../../mokie.api';
import { Link } from 'react-router-dom';

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
              {[1, 2, 3].map((el) => (
                <Link to={`/posts/${el}`}>
                  <AverageCard
                    id={mokieApi[el].id}
                    image={<img src={mokieApi[el].image} alt="astronaut"></img>}
                    text={<div>{mokieApi[el].text}</div>}
                    date={<div>{mokieApi[el].date}</div>}
                    title={<div>{mokieApi[el].title}</div>}
                    LikeDislike={LikeDislike}
                  ></AverageCard>
                </Link>
              ))}
            </LeftTop>
            <LeftBottom>
              {[4, 5, 6].map((el) => (
                <Link to={`/posts/${el}`}>
                  <AverageCard
                    id={mokieApi[el].id}
                    image={<img src={mokieApi[el].image} alt="astronaut"></img>}
                    text={<div>{mokieApi[el].text}</div>}
                    date={<div>{mokieApi[el].date}</div>}
                    title={<div>{mokieApi[el].title}</div>}
                    LikeDislike={LikeDislike}
                  ></AverageCard>
                </Link>
              ))}
            </LeftBottom>
          </LeftBottomWrapper>
        </PostLeft>
        <PostRight>
          {[7, 8, 9, 10, 11, 12].map((el) => (
            <Link to={`/posts/${el}`}>
              <SmallCard
                id={mokieApi[el].id}
                image={<img src={mokieApi[el].image} alt="astronaut"></img>}
                text={<div>{mokieApi[el].text}</div>}
                date={<div>{mokieApi[el].date}</div>}
                title={<div>{mokieApi[el].title}</div>}
                LikeDislike={LikeDislike}
              ></SmallCard>
            </Link>
          ))}
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
