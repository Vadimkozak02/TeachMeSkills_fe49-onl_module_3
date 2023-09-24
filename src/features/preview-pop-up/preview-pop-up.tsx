import React, { useState } from 'react';
import styled from 'styled-components';

type TypeOfPreviewPopUp = {
  id?: number;
  active?: boolean;
  setActive: (arg: boolean) => void;
  children: React.ReactNode;
};

export const PreviewPopUp: React.FC<TypeOfPreviewPopUp> = ({
  active,
  setActive,
  children,
}) => {
  return (
    <>
      <PreviewWrapper
        style={{ display: active ? 'block' : 'none' }}
        onClick={() => setActive(false)}
      >
        {children}
      </PreviewWrapper>
    </>
  );
};

const PreviewWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  padding-top: 100px;
  z-index: 10;
`;
// const PreviewCloseBtnWrapper = styled.div``;
// const PreviewCloseBtn = styled.button`
//   position: absolute;
//   top: 10px;
//   right: 10px;
//   width: 20px;
//   border: 1px solid red;
//   cursor: pointer;
// `;
// const PreviewImgWrapper = styled.div`
//   width: 500px;
//   margin: auto;
//   border: 1px solid red;
// `;
