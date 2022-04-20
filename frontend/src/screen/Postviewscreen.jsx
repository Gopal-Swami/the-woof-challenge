import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getPostById } from '../actions/userActions';
import Loader from '../components/Loader';

const Postviewscreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;
  const [activeTab, setActiveTab] = useState('likes');
  const postById = useSelector((state) => state.post);
  const { loading, error, post } = postById;
  const users = useSelector((state) => state.users);
  const { users: allUsers } = users;

  useEffect(() => {
    dispatch(getPostById(id));
  }, [dispatch, id]);

  return (
    <>
      <div className="container d-flex justify-content-center">
        {loading ? (
          <Loader />
        ) : error ? (
          <h1>error</h1>
        ) : (
          <div class="card text-center m-3" style={{ width: '40rem' }}>
            <div class="card-header d-flex align-items-center justify-content-around">
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
                    allUsers.filter((eachUser) => eachUser._id === post.user)[0]
                      .profile
                  }
                  alt="Unknown"
                />
              </div>
              <h5 class="card-title">{post.title}</h5>
              <div>22-04-2022</div>
            </div>
            <img
              src="https://static1.therichestimages.com/wordpress/wp-content/uploads/2015/02/shutterstock_Cute-Dog.jpg"
              class="card-img-top"
              alt="..."
            ></img>
            <div class="card-body">
              <p class="card-text text-start">{post.description}</p>
            </div>
            <div class="card-footer d-flex justify-content-around">
              <div>
                <i
                  class="fa-solid fa-thumbs-up"
                  onClick={setActiveTab('Likes')}
                ></i>
                <span>{post.likes.length}</span>
              </div>
              <div>
                <i
                  class="fa-solid fa-comment-dots"
                  onClick={setActiveTab('Commeents')}
                ></i>
                <span>{post.comments.length}</span>
              </div>
              <div>
                <i class="fa-solid fa-share-nodes"></i>
              </div>
              <div>
                <i class="fa-solid fa-bookmark"></i>
              </div>
            </div>
            <div class="card-footer ">
              <div>
                <ul class="list-group ">
                  <li class="list-group-item text-start">
                    <div class="ms-2 me-auto">
                      <div class="fw-bold">Subheading</div>
                      Content for list item
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <button onClick={(e) => navigate('/')} className="btn btn-primary">
              Back
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Postviewscreen;
