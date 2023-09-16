import './App.css';
import { SignIn } from './pages/sign-in';
import { SignUp } from './pages/sign-up';
import { Success } from './pages/success';
import { SelectedPost } from './pages/selected-post';
import { Blog } from '#ui/blog/blog';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { CardPost } from './ui/cards-post/card-post';
//  '#ui/cards-post/card-post';
// import { BigCard } from '#ui/cards/big-card/big-card';
// import astronaut from './ui/cards/card-img/astronautAverage.jpg';
// import { LikeDislike } from './features/like-dislike/like-dislike';

const BigCardItem = [
  {
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate laudantium provident, quibusdam modi nihil molestias nostrum rem error eos ipsa inventore ullam vitae explicabo magnam nobis ea expedita at doloribus!',
  },
  { date: 'April 20, 2021' },
  {
    title:
      'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
  },
];

function Root() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/posts" element={<Blog />} />
          <Route path="/card-post" element={<CardPost />}></Route>
          <Route path="/posts/:postId" element={<SelectedPost />}></Route>
          {/* <Route
            path="big-card"
            element={
              <BigCard
                id={2}
                image={<img src={astronaut} alt="astronaut"></img>}
                text={<div>{BigCardItem.map(({ text }) => text)}</div>}
                date={<div>{BigCardItem.map(({ date }) => date)}</div>}
                title={<div>{BigCardItem.map(({ title }) => title)}</div>}
                LikeDislike={LikeDislike}
              ></BigCard>
            }
          ></Route> */}
        </Routes>
        {/* <SignIn></SignIn> */}
        {/* <Success></Success> */}
        {/* <SelectedPost></SelectedPost> */}
        {/* <Blog></Blog> */}
      </div>
    </Provider>
  );
}

export default Root;
