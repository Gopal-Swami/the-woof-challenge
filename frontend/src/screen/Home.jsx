import React, { useEffect } from 'react';
import FAQ from '../components/FAQ';
import Messenger from '../components/Messenger';
import Post from '../components/Post';
import { useDispatch, useSelector } from 'react-redux';
import { listPosts, listUsers } from '../actions/userActions';
import Loader from '../components/Loader';
const Home = () => {
  const dispatch = useDispatch();
  const allPosts = useSelector((state) => state.posts);
  const { loading, error, posts } = allPosts;
  useEffect(() => {
    dispatch(listPosts());
    dispatch(listUsers());
  }, [dispatch]);
  return (
    <div className="container d-flex p-3 justify-content-around flex-wrap">
      <div className="faq-container m-2">
        <FAQ />
      </div>
      <div className="post-container m-2">
        {loading ? (
          <Loader />
        ) : error ? (
          <h1>error</h1>
        ) : (
          <>
            {posts &&
              posts.map((post) => (
                <Post
                  key={post._id}
                  id={post._id}
                  title={post.title}
                  cover={post.cover}
                  likes={post.likes}
                  comments={post.comments}
                  description={post.description}
                  createdAt={post.createdAt}
                  user={post.user}
                />
              ))}
          </>
        )}
      </div>
      <div className="user-container m-2">
        <Messenger />
      </div>
    </div>
  );
};

export default Home;
