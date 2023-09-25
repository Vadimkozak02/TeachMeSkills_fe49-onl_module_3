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
        style={{
          display: active ? 'block' : 'none',
        }}
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
  background-color: rgba(0, 0, 0, 0.121);
  position: fixed;
  top: 0px;
  left: 0px;
  padding-top: 100px;
  z-index: 10;
`;
