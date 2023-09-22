import { useEffect, useState } from 'react';
import darkSun from './theme-img/darkSun.svg';
import lightSun from './theme-img/lightSun.svg';
import lightMoon from './theme-img/lightMoon.svg';
import darkMoon from './theme-img/darkMoon.svg';
import styled from 'styled-components';

export const ThemeSwitcher: React.FC = () => {
  const isDarkClassExist = document
    .querySelector('.App')
    ?.classList.contains('dark');

  const [isDark, setIsDark] = useState(!isDarkClassExist);

  useEffect(() => {
    document.querySelector('.App')?.classList.toggle('dark');
  }, [isDark]);

  return (
    <div>
      <ThemeImgWrapper>
        <ThemeLightImg onClick={() => setIsDark(true)}>
          <img
            src={isDark ? darkSun : lightSun}
            alt="light or dark theme"
          ></img>
        </ThemeLightImg>
        <ThemeDarkImg onClick={() => setIsDark(false)}>
          <img
            src={isDark ? lightMoon : darkMoon}
            alt="light or dark theme"
          ></img>
        </ThemeDarkImg>
      </ThemeImgWrapper>
    </div>
  );
};

const ThemeImgWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 2px solid var(--background-primary-color);
  border-bottom: 2px solid var(--background-primary-color);
`;

const ThemeLightImg = styled.button`
  /* margin-left: 15px; */
  width: 50%;
  border: none;
  background-color: var(--text-white-color);
  border-right: 2px solid var(--background-primary-color);
`;

const ThemeDarkImg = styled.button`
  border: none;
  background-color: var(--text-white-color);
  width: 50%;
  margin: 20px 0;
`;
