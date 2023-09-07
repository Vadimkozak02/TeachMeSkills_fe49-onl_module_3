import './App.css';
import { SignIn } from './pages/sign-in';
import { SignUp } from './pages/sign-up';
import { Success } from './pages/success';
import { SelectedPost } from './pages/selected-post';
import { Blog } from '#ui/blog/blog';

function App() {
  return (
    <div className="App">
      <SignUp></SignUp>
      <SignIn></SignIn>
      <Success></Success>
      <SelectedPost></SelectedPost>
      <Blog></Blog>
    </div>
  );
}

export default App;
