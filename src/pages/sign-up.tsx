import { MainTemplate } from '#ui/templates/main-template';
import { Title } from '#ui/title/title';
import { BackLink } from '../features/back-link/back-link';
import { HeaderMenu } from '../features/header-menu-sign-in/header-menu-sign-in';
import { SignUpForm } from '../features/sign-up-form/sign-up-form';

export const SignUp: React.FC = () => {
  return (
    <>
      <HeaderMenu></HeaderMenu>
      <MainTemplate
        backLink={<BackLink />}
        title={<Title>Sign Up</Title>}
        body={<SignUpForm></SignUpForm>}
      />
    </>
  );
};
