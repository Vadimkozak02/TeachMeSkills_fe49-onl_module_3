import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BackLink: React.FC = () => {
  return (
    <Link to="/posts">
      <BackLinkWrapper>Home</BackLinkWrapper>
    </Link>
  );
};

const BackLinkWrapper = styled.div`
  color: var(--text-primary-color);
  margin-top: 50px;
`;
