import React from 'react';
import styled from 'styled-components';

export const BackLink: React.FC = () => {
  return <BackLinkWrapper>Back to home</BackLinkWrapper>;
};

const BackLinkWrapper = styled.div`
  color: var(--text-primary-color);
  margin-top: 50px;
`;
