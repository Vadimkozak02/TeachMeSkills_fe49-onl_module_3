import { SelectedPostTemplate } from '#ui/templates/selected-post-template';
import { Link, Navigate } from 'react-router-dom';
import { LikeDislike } from '../like-dislike/like-dislike';
import { HeaderMenu } from '../header-menu/header-menu';
import { useAppSelector } from '../../hooks';

export const SelectedPost: React.FC = () => {
  const allPost = useAppSelector((state) => state.allPost.allPost);
  const selectedPostId = useAppSelector(
    (state) => state.selectedPost.selectedPost
  );
  const numericPostId = Number(selectedPostId);
  const isCompleted = useAppSelector((state) => state.selectedPost.isLoading);

  const selectedPost = allPost.find((elem) => elem.id === numericPostId);
  if (!Number.isFinite(numericPostId)) return <Navigate to={'/'} />;
  if (!selectedPost) return <Navigate to={'/'} />;

  return (
    <>
      <HeaderMenu></HeaderMenu>
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
