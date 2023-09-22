import './App.css';
import { SignIn } from './pages/sign-in';
import { SignUp } from './pages/sign-up';
// import { Success } from './pages/success';
import { SelectedPost } from './pages/selected-post';
import { Blog } from '#ui/blog/blog';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { ResultOfSearch } from './pages/resultOfSearch';

function Root() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/posts" element={<Blog />} />
          <Route path="/posts/:postId" element={<SelectedPost />}></Route>
          <Route path="/resultOfSearch" element={<ResultOfSearch />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default Root;
