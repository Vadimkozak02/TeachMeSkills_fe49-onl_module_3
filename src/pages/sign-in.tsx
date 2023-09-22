import { HeaderMenu } from '../features/header-menu-sign-in/header-menu';
import { MainTemplate } from '../ui/templates/main-template';
import { BackLink } from '../features/back-link/back-link';
import { Title } from '#ui/title/title';
import { SignInForm } from '../features/sign-in-form/sign-in-form';

export const SignIn: React.FC = () => {
  return (
    <>
      <HeaderMenu></HeaderMenu>
      <MainTemplate
        backLink={<BackLink />}
        title={<Title>Sign In</Title>}
        body={<SignInForm></SignInForm>}
      ></MainTemplate>
    </>
  );
};
