import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from './Loader';
const Post = ({
  id,
  title,
  cover,
  likes,
  comments,
  description,
  createdAt,
  user,
}) => {
  const users = useSelector((state) => state.users);
  const { loading, error, users: allUsers } = users;
  return (
    <>
      <Link
        to={`/post/view/${id}`}
        class="card text-center m-3 text-dark"
        style={{ width: '40rem' }}
      >
        <div class="card-header d-flex align-items-center justify-content-around">
          {loading ? (
            <Loader />
          ) : error ? (
            <h5>Unknown</h5>
          ) : (
            <div
              className="post-user"
              style={{
                width: '4rem',
                height: '4rem',
                borderRadius: '50%',
                overflow: 'hidden',
              }}
            >
              <img
                style={{ width: '100%', height: '100%' }}
                src={
                  allUsers.filter((eachUser) => eachUser._id === user)[0]
                    .profile
                }
                alt="Unknown"
              />
            </div>
          )}
          <h5 class="card-title">{title}</h5>
          <div>{createdAt.substring(0, 10)}</div>
        </div>
        <img src={cover} class="card-img-top" alt={title}></img>
        <div class="card-body">
          <p class="card-text text-start">{description}</p>
        </div>
        <div class="card-footer d-flex justify-content-around">
          <div>
            <i class="fa-solid fa-thumbs-up"></i>
            <span>{likes.length}</span>
          </div>
          <div>
            <i class="fa-solid fa-comment-dots"></i>
            <span>{comments.length}</span>
            <form className="d-none">
              <input
                type="text"
                className="m-1 p-1"
                placeholder="Write Comment..."
              />
            </form>
          </div>
          <div>
            <i class="fa-solid fa-share-nodes"></i>
          </div>
          <div>
            <i class="fa-solid fa-bookmark"></i>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Post;
