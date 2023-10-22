import { Button } from '#ui/button';
import { Input } from '#ui/input/input';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { authorization } from '../auth/authorization.slice';
import { Navigate } from 'react-router-dom';
import { aboutUserInfo } from '../aboutUser/aboutUser.slice';

export const SignInForm: React.FC = () => {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const isCompleted = useAppSelector(
    (state) => state.authorization.isInCompleted
  );
  const dispatch = useAppDispatch();

  if (isCompleted) {
    return <Navigate to="/posts" />;
  }

  return (
    <SignInWrapper>
      <form>
        <Input
          autoFocus
          type="email"
          labelText="Email"
          value={email}
          placeholder="Your email"
          onChange={({ currentTarget }) => setEmail(currentTarget.value)}
          error={email ? undefined : `Email shoudn't be empty`}
        />
        <Input
          type="password"
          labelText="Password"
          value={password}
          placeholder="Your password"
          onChange={({ currentTarget }) => setPassword(currentTarget.value)}
        />
        <ForgotLinkWrapper>
          <ForgotLink href="#">Forgot password?</ForgotLink>
        </ForgotLinkWrapper>

        <Button
          variant="primary"
          onClick={() => {
            dispatch(authorization({ email, password }));
            dispatch(aboutUserInfo({}));
          }}
        >
          Sign In
        </Button>
        <SignUpLinkWrapper>
          <SignUpText>Dont' have an account?</SignUpText>
          <SignUpLink href="/sign-up">Sign Up</SignUpLink>
        </SignUpLinkWrapper>
      </form>
    </SignInWrapper>
  );
};

const SignInWrapper = styled.div`
  padding: 30px;
  border: 1px solid #b3b3b3;
  border-radius: 10px;
`;

const ForgotLinkWrapper = styled.div`
  margin: -20px 0 20px;
`;

const ForgotLink = styled.a`
  font-size: 14px;
  text-decoration: none;
`;

const SignUpLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SignUpText = styled.p`
  color: grey;
  font-size: 14px;
  margin-right: 5px;
`;

const SignUpLink = styled.a`
  font-size: 14px;
  color: blue;
  cursor: pointer;
  text-decoration: none;
`;
