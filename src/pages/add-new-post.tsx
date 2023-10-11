import { MainTemplate } from '#ui/templates/main-template';
import { Title } from '#ui/title/title';
import { AddNewPostForm } from '../features/add-new-post/add-new-post-form';
import { BackLink } from '../features/back-link/back-link';
import { HeaderMenu } from '../features/header-menu/header-menu';

export const AddNewPost: React.FC = () => {
  return (
    <>
      <HeaderMenu></HeaderMenu>
      <MainTemplate
        backLink={<BackLink />}
        title={<Title>Add new post</Title>}
        body={<AddNewPostForm></AddNewPostForm>}
      />
    </>
  );
};
