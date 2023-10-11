import { Button } from '#ui/button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SuccessForm: React.FC = () => {
  return (
    <SuccessFormWrapper>
      <SuccessText>
        Email confirmed. <br /> Your registration is now complited.
      </SuccessText>
      <Link to={'/sign-in'}>
        <Button variant="primary" onClick={() => null} role="presentation">
          Go to home
        </Button>
      </Link>
    </SuccessFormWrapper>
  );
};

const SuccessFormWrapper = styled.div`
  padding: 30px;
  border: 1px solid #b3b3b3;
  border-radius: 10px;
`;

const SuccessText = styled.div`
  margin-bottom: 30px;
  width: 300px;
  font-size: 16px;
`;
