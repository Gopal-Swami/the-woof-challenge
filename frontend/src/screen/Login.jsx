import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/userActions';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const handleLogin = (e) => {
    e.preventDefault();
    if (email !== '' && password !== '') {
      dispatch(login(email, password));
    }
  };
  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [userInfo, navigate]);
  return (
    <div className="container d-flex justify-content-center p-4">
      <form class="p-2 " onSubmit={handleLogin}>
        <h3 className="m-3 text-center">Log In</h3>
        <input
          class="form-control me-2 m-3"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          class="form-control me-2 m-3"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="btn btn-primary form-control me-2 m-3 "
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
