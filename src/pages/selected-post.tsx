import { MenuSite } from '#ui/menu/menu-site';
import { SelectedPostTemplate } from '#ui/templates/selected-post-template';
import styled from 'styled-components';
import astronaut from '../ui/cards/card-img/astronaut_.jpg';
import { Navigate, useParams } from 'react-router-dom';
import { mokieApi } from '../mokie.api';
import { LikeDislike } from '../features/like-dislike/like-dislike';

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

export const SelectedPost: React.FC = () => {
  const { postId } = useParams();
  const numericPostId = Number(postId);
  if (!Number.isFinite(numericPostId)) return <Navigate to={'/'} />;

  const selectedPost = mokieApi.find((elem) => elem.id === numericPostId);
  if (!selectedPost) return <Navigate to={'/'} />;

  return (
    <>
      <MenuSite></MenuSite>
      <SelectedPostTemplate
        id={mokieApi[0].id}
        image={<img src={astronaut} alt="astronaut"></img>}
        text={<div>{BigCardItem.map(({ text }) => text)}</div>}
        date={<div>{BigCardItem.map(({ date }) => date)}</div>}
        title={<div>{BigCardItem.map(({ title }) => title)}</div>}
        LikeDislike={LikeDislike}
      ></SelectedPostTemplate>
    </>
  );
};
