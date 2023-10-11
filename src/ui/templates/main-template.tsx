import styled from 'styled-components';

type Props = {
  header?: React.ReactNode;
  backLink?: React.ReactNode;
  title?: React.ReactNode;
  body: React.ReactNode;
  children?: never;
};

export const MainTemplate: React.FC<Props> = ({
  header,
  backLink,
  title,
  body,
}) => {
  return (
    <MainTemplateWrapper>
      {header}
      <ContentWithPadding>
        <Main>
          <BackLinkContainer>{backLink}</BackLinkContainer>
          <TitleContainer>{title}</TitleContainer>
          <BodyContainer>{body}</BodyContainer>
        </Main>
        <Footer>
          <FooterDelimiter />
          <FooterTextWrapper>
            <Year>{new Date().getFullYear()}</Year>
            <Rights>All rights reserved</Rights>
          </FooterTextWrapper>
        </Footer>
      </ContentWithPadding>
    </MainTemplateWrapper>
  );
};

const MainTemplateWrapper = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--background-primary-color);
`;

const ContentWithPadding = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Main = styled.main`
  width: 100%;
  flex-grow: 1;
`;

const BackLinkContainer = styled.div`
  width: 50px;
  height: 50px;
  text-align: start;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 75px;
  text-align: start;
`;

const BodyContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Footer = styled.footer`
  width: 100%;
  height: 50px;
  color: var(--text-secondary-color);
`;

const FooterDelimiter = styled.hr`
  width: 100%;
`;

const FooterTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Year = styled.div``;

const Rights = styled.div``;
