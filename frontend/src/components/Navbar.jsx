import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userActions';
const Navbar = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const handleLogOut = (e) => {
    dispatch(logout());
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg p-3 navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            The Woof Challenge
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <form class="d-flex p-2">
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Search Post/User/City"
                    aria-label="Search"
                  />
                  <button class="btn btn-light" type="submit">
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </button>
                </form>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/post/create">
                  Create Post
                </Link>
              </li>
              {!userInfo ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Log In
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">
                      Sign Up
                    </Link>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <span
                    className="nav-link"
                    onClick={handleLogOut}
                    style={{ cursor: 'pointer' }}
                  >
                    Log Out
                  </span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
