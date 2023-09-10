import { useEffect, useState } from 'react';
import lightTheme from './theme-img/whiteTheme.svg';
import darkTheme from './theme-img/darkTheme.svg';
import styled from 'styled-components';

export const ThemeSwitcher: React.FC = () => {
  const isDarkClassExist = document
    .querySelector('.App')
    ?.classList.contains('dark');

  const [isDark, setIsDark] = useState(isDarkClassExist);

  useEffect(() => {
    document.querySelector('.App')?.classList.toggle('dark');
  }, [isDark]);

  return (
    <div>
      <ThemeTextWrapper>
        <ThemeText>Light/Dark</ThemeText>
        <ThemeImg onClick={() => setIsDark(!isDark)}>
          <img src={isDark ? darkTheme : lightTheme}></img>
        </ThemeImg>
      </ThemeTextWrapper>
      {/* <input
        type="checkbox"
        checked={isDark}
        onChange={() => setIsDark(!isDark)}
      /> */}
    </div>
  );
};

const ThemeTextWrapper = styled.div`
  /* background-color: var(--background-primary-color); */
`;

const ThemeText = styled.div``;
const ThemeImg = styled.button`
  margin-left: 15px;
  width: 50px;
  /* background-color: var(--background-primary-color); */
  border: none;
  background-color: white;
`;
