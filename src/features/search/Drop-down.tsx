import styled from 'styled-components';
import { AllPostsResponseResult } from '../../api/types';

type DropDownProps = {
  posts: AllPostsResponseResult[];
  searchedString: string;
};

export const DropDown: React.FC<DropDownProps> = ({
  posts,
  searchedString,
}) => {
  return (
    <DropDownWrapper>
      {!!posts.length &&
        posts.map((element, id) => (
          <DropDownElement key={id}>
            {element.title}
            <SearchedPostImage>
              <img src={element.image} alt="#" />
            </SearchedPostImage>
          </DropDownElement>
        ))}
      {!posts.length && searchedString && <div>posts not found</div>}
    </DropDownWrapper>
  );
};

const SearchedPostImage = styled.div`
  width: 40px;
  height: 40px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const DropDownWrapper = styled.ul`
  position: absolute;
  width: 100%;
  padding: 0;
  margin: 0;
  left: 0;
  color: white;
  background-color: var(--text-secondary-color);
`;

const DropDownElement = styled.li`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  height: 60px;
  border-bottom: 1px solid var(--text-white-color);
  cursor: pointer;
`;
