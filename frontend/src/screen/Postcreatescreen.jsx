import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../actions/userActions';
import Loader from '../components/Loader';
const Postcreatescreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [cover, setCover] = useState(null);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const newPost = useSelector((state) => state.newPost);
  const { loading, error, post } = newPost;
  const handlePost = (e) => {
    e.preventDefault();
    if (title === '' && description === '' && cover === null) {
      alert('Please fill all values');
    } else {
      if (userInfo) {
        const formdata = new FormData();
        formdata.append('user', userInfo._id);
        formdata.append('title', title);
        formdata.append('description', description);
        formdata.append('file', cover);
        dispatch(createPost(formdata));
        setTimeout(() => {
          if (post) {
            navigate('/');
          }
        }, 1000);
      } else {
        navigate('/login');
      }
    }
  };

  return (
    <div className="container d-flex justify-content-center p-4">
      {loading ? (
        <Loader />
      ) : error ? (
        <h1>error</h1>
      ) : (
        <form class="p-2 " onSubmit={handlePost}>
          <h3 className="m-3 text-center w-100">Write Your Post</h3>
          <input
            class="form-control me-2 m-1"
            type="text"
            placeholder="Post Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label for="formFile" class="form-label m-1">
            Please select Cover picture
          </label>
          <input
            class="form-control me-2 m-1"
            type="file"
            id="post-cover-pic"
            onChange={(e) => setCover(e.target.files[0])}
          ></input>
          <div class="me-2 m-1 w-100" style={{ marginTop: '1rem' }}>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="8"
              placeholder="Start Writting...."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary form-control me-2 m-1 "
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
};

export default Postcreatescreen;
