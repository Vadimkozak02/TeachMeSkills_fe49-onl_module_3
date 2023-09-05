import { Input } from '#ui/input/input';
import { useState } from 'react';
import { Button } from '#ui/button';
import styled from 'styled-components';

export const SignUpForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <SignUpWrapper>
      <form>
        <Input
          autoFocus
          placeholder="Your Name"
          type="text"
          labelText="Name"
          value={name}
          onChange={({ currentTarget }) => setName(currentTarget.value)}
        />
        <Input
          placeholder="Your Email"
          type="email"
          labelText="Email"
          value={email}
          onChange={({ currentTarget }) => setEmail(currentTarget.value)}
          error={email ? undefined : `Email shoudn't be empty`}
        />
        <Input
          placeholder="Your password"
          type="password"
          labelText="Password"
          value={password}
          onChange={({ currentTarget }) => setPassword(currentTarget.value)}
        />
        <Input
          placeholder="Confirm your password"
          type="password"
          labelText="Confirm Password"
          value={confirmPassword}
          onChange={({ currentTarget }) =>
            setConfirmPassword(currentTarget.value)
          }
        />
        <Button variant="primary" onClick={() => null}>
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
`;
