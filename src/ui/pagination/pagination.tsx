import styled from 'styled-components';

import LeftArrow from '../templates/arrow-img/arrow-left.svg';
import RightArrow from '../templates/arrow-img/arrow-right.svg';

type Props = {
  pageCount: number;
  currentPage: number;
  onPageChange: (arg: number) => void;
};

export const Pagination: React.FC<Props> = ({
  pageCount,
  currentPage,
  onPageChange,
}) => {
  return (
    <OtherPage>
      {currentPage !== 1 ? (
        <LefrArrowBtn onClick={() => onPageChange(currentPage - 1)}>
          <img src={LeftArrow} alt="left-arrow"></img>
          <LeftArrowText>Prev</LeftArrowText>
        </LefrArrowBtn>
      ) : null}
      {currentPage !== 1 ? (
        <Page onClick={() => onPageChange(1)}>1</Page>
      ) : null}
      {currentPage > 2 ? <Page>...</Page> : null}
      <Page onClick={() => onPageChange(currentPage)}>{currentPage}</Page>
      {pageCount - currentPage > 1 ? <Page>...</Page> : null}
      {currentPage !== pageCount ? (
        <Page onClick={() => onPageChange(pageCount)}>{pageCount}</Page>
      ) : null}
      {pageCount !== currentPage ? (
        <RightArrowBtn onClick={() => onPageChange(currentPage + 1)}>
          <RightArrowText>Next</RightArrowText>
          <img src={RightArrow} alt="right-arrow"></img>
        </RightArrowBtn>
      ) : null}
    </OtherPage>
  );
};

const OtherPage = styled.div`
  width: 400px;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  margin: auto;
`;

const Page = styled.button``;

const LefrArrowBtn = styled.button`
  cursor: pointer;
  border: none;
  background-color: var(--background-primary-color);
  display: flex;
  align-items: center;
`;

const LeftArrowText = styled.div``;

const RightArrowBtn = styled.button`
  cursor: pointer;
  border: none;
  background-color: var(--background-primary-color);
  display: flex;
  align-items: center;
`;

const RightArrowText = styled.div``;
