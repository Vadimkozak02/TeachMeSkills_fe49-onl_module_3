import './App.css';
import { SignIn } from './pages/sign-in';
import { SignUp } from './pages/sign-up';
// import { Success } from './pages/success';
import { SelectedPost } from './pages/selected-post';
import { Blog } from '#ui/blog/blog';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { CardPost } from './ui/cards-post/card-post';
import { Menu } from '#ui/menu/menu';

function Root() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/posts" element={<Blog />} />
          <Route path="/card-post" element={<CardPost />}></Route>
          <Route path="/posts/:postId" element={<SelectedPost />}></Route>
        </Routes>
      </div>
    </Provider>
  );
}

export default Root;
