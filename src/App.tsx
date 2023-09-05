import { Input } from '#ui/input/input';
import { SignIn } from './pages/sign-in';
import './App.css';
import { HeaderMenu } from './features/header-menu-sign-in/header-menu-sign-in';
import { SignUp } from './pages/sign-up';
import { Success } from './pages/success';
import { SelectedPost } from './pages/selected-post';

function App() {
  return (
    <div className="App">
      {/* <SignUp></SignUp> */}
      {/* <SignIn></SignIn> */}
      {/* <Success></Success> */}
      <SelectedPost></SelectedPost>
    </div>
  );
}

export default App;
