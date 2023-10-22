import { Input } from '#ui/input/input';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

type Props = {
  onFileChange: (arg: File) => void;
  file: File | null;
};

export const ImageUploader: React.FC<Props> = ({ onFileChange, file }) => {
  const [previewImgSrc, setPreviewImgSrc] = useState('');
  useEffect(() => {
    if (previewImgSrc) {
      URL.revokeObjectURL(previewImgSrc);
    }
    if (file !== null) {
      setPreviewImgSrc(URL.createObjectURL(file));
    }
  }, [file]);

  return (
    <>
      <Input
        type="file"
        labelText="Files"
        accept="image/*"
        onChange={({ currentTarget }) => onFileChange(currentTarget.files![0])}
      ></Input>
      <PreviewImageWrapper>
        <Previewimg src={previewImgSrc}></Previewimg>
      </PreviewImageWrapper>
    </>
  );
};

const PreviewImageWrapper = styled.div`
  height: 100px;
`;
const Previewimg = styled.img`
  height: 100%;
  width: auto;
`;
