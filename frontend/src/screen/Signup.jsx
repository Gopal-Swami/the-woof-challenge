import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/userActions';
import Loader from '../components/Loader';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userSign = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userSign;
  const handleSignUp = (e) => {
    e.preventDefault();
    dispatch(register(email, password));
  };

  useEffect(() => {
    if (userInfo) {
      navigate('/signup/userprofile');
    }
  }, [userInfo, navigate]);

  return (
    <div className="container d-flex justify-content-center p-4">
      {loading ? (
        <Loader />
      ) : error ? (
        <h1>error</h1>
      ) : (
        <form class="p-2 " onSubmit={handleSignUp}>
          <h3 className="m-3 text-center">Sign Up</h3>
          <input
            class="form-control me-2 m-3"
            type="email"
            placeholder="Email"
            aria-label="Search"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            class="form-control me-2 m-3"
            type="password"
            placeholder="Password"
            aria-label="Search"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="btn btn-primary form-control me-2 m-3 "
          >
            Sign Up
          </button>
        </form>
      )}
    </div>
  );
};

export default Signup;
