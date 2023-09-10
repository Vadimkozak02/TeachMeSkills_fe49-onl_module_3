import './App.css';
import { SignIn } from './pages/sign-in';
import { SignUp } from './pages/sign-up';
import { Success } from './pages/success';
import { SelectedPost } from './pages/selected-post';
import { Blog } from '#ui/blog/blog';
import { ResultOfSearch } from './pages/resultOfSearch';
import { ThemeSwitcher } from './features/theme-switcher/theme-switcher';

function App() {
  return (
    <div className="App">
      <ThemeSwitcher></ThemeSwitcher>
      <SignUp></SignUp>
      <SignIn></SignIn>
      <Success></Success>
      <SelectedPost></SelectedPost>
      <Blog></Blog>
      <ResultOfSearch></ResultOfSearch>
    </div>
  );
}

export default App;
