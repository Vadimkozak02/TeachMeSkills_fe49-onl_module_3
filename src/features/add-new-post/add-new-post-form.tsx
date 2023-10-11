import { Input } from '#ui/input/input';
import { useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../../hooks';
import { addNewPost } from './add-new-post.slice';

export const AddNewPostForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const dispatch = useAppDispatch();

  return (
    <AddNewPostWrapper>
      <form>
        <AddNewPostTitle>
          <Input
            placeholder="title"
            type="text"
            labelText="Title"
            value={title}
            onChange={({ currentTarget }) => setTitle(currentTarget.value)}
          />
        </AddNewPostTitle>
        <AddNewPostText>
          <Input
            placeholder="text"
            type="text"
            labelText="Text"
            value={text}
            onChange={({ currentTarget }) => setText(currentTarget.value)}
          />
        </AddNewPostText>
        <button
          type="button"
          onClick={() => dispatch(addNewPost({ title, text }))}
        >
          Add new post
        </button>
      </form>
    </AddNewPostWrapper>
  );
};

const AddNewPostWrapper = styled.div``;
const AddNewPostTitle = styled.div``;
const AddNewPostText = styled.div``;
