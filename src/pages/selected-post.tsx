import { MenuSite } from '#ui/menu/menu-site';
import { SelectedPostTemplate } from '#ui/templates/selected-post-template';
import { Navigate, useParams } from 'react-router-dom';
import { mokieApi } from '../mokie.api';
import { LikeDislike } from '../features/like-dislike/like-dislike';

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
        id={selectedPost.id}
        image={<img src={selectedPost.image} alt="astronaut"></img>}
        text={<div>{selectedPost.text}</div>}
        date={<div>{selectedPost.date}</div>}
        title={<div>{selectedPost.title}</div>}
        LikeDislike={LikeDislike}
      ></SelectedPostTemplate>
    </>
  );
};
