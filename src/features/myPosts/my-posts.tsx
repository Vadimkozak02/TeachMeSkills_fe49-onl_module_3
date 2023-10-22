import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { myPosts } from './my-posts.slice';
import { useEffect } from 'react';

export const MyPosts: React.FC = () => {
  const dispatch = useAppDispatch();
  const allMyPosts = useAppSelector((state) => state.myPosts.myPosts);

  useEffect(() => {
    dispatch(myPosts({ limit: 3, offset: 0 }));
  }, []);

  return (
    <>
      {/* <MyPostsWrapper>
        <MyPostsBtn></MyPostsBtn>
      </MyPostsWrapper> */}
    </>
  );
};

const MyPostsWrapper = styled.div`
  width: 1120px;
  background-color: var(--text-secondary-color);
`;

const MyPostsBtn = styled.button`
  width: 100px;
  height: 40px;
  background-color: var(--burger-backkgorund-color);
`;
