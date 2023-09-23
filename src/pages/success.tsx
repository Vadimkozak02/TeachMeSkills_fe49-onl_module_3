import { MainTemplate } from '#ui/templates/main-template';
import { Title } from '#ui/title/title';
import { BackLink } from '../features/back-link/back-link';
import { HeaderMenu } from '../features/header-menu/header-menu';
import { SuccessForm } from '../features/success-form/success-form';

export const Success: React.FC = () => {
  return (
    <>
      <HeaderMenu></HeaderMenu>
      <MainTemplate
        backLink={<BackLink />}
        title={<Title>Success</Title>}
        body={<SuccessForm></SuccessForm>}
      ></MainTemplate>
    </>
  );
};
