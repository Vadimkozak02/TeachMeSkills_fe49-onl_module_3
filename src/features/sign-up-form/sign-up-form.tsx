import { Input } from '#ui/input/input';
import { Button } from '#ui/button';
import styled from 'styled-components';
import {
  setConfirmPassword,
  setEmail,
  setName,
  setPassword,
} from './sign-up-form.slice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { register } from '../auth/registration.slice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const SignUpForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const name = useAppSelector(({ signUpForm }) => signUpForm.name);

  const email = useAppSelector(({ signUpForm }) => signUpForm.email);

  const password = useAppSelector(({ signUpForm }) => signUpForm.password);
  const confirmPassword = useAppSelector(
    ({ signUpForm }) => signUpForm.confirmPassword
  );

  const isCompleted = useAppSelector((state) => state.registration.isCompleted);
  const navigate = useNavigate();

  useEffect(() => {
    if (isCompleted) {
      navigate('/sign-up-success');
    }
  }, [isCompleted, navigate]);

  return (
    <SignUpWrapper>
      <form>
        <Input
          autoFocus
          placeholder="Your Name"
          type="text"
          labelText="Name"
          value={name}
          onChange={({ currentTarget }) =>
            dispatch(setName(currentTarget.value))
          }
        />
        <Input
          placeholder="Your Email"
          type="email"
          labelText="Email"
          value={email}
          onChange={({ currentTarget }) =>
            dispatch(setEmail(currentTarget.value))
          }
          error={email ? undefined : `Email shoudn't be empty`}
        />
        <Input
          placeholder="Your password"
          type="password"
          labelText="Password"
          value={password}
          onChange={({ currentTarget }) =>
            dispatch(setPassword(currentTarget.value))
          }
        />
        <Input
          placeholder="Confirm your password"
          type="password"
          labelText="Confirm Password"
          value={confirmPassword}
          onChange={({ currentTarget }) =>
            dispatch(setConfirmPassword(currentTarget.value))
          }
        />
        <Button
          variant="primary"
          onClick={() =>
            dispatch(register({ username: name, password, email }))
          }
        >
          Sign Up
        </Button>
      </form>
    </SignUpWrapper>
  );
};

const SignUpWrapper = styled.div`
  padding: 30px;
  border: 1px solid #b3b3b3;
  border-radius: 10px;
  margin-bottom: 50px;
`;
