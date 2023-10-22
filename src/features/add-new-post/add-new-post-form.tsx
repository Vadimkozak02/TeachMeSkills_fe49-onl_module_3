import { Input } from '#ui/input/input';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../../hooks';
import { addNewPost } from './add-new-post.slice';
import { ImageUploader } from '#ui/image-uploader/imageUploader';

export const AddNewPostForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [file, setFile] = useState<File | null>(null);
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
        <ImageUploader file={file} onFileChange={(file) => setFile(file)} />
        <button
          type="button"
          onClick={() => {
            if (file) {
              dispatch(
                addNewPost({
                  title,
                  text,
                  lesson_num: 50,
                  image: file,
                  description: '',
                })
              );
            }
          }}
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
const PreviewImageWrapper = styled.div`
  height: 100px;
`;
const Previewimg = styled.img`
  height: 100%;
  width: auto;
`;
