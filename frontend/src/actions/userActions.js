import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  PET_CREATE_REQUEST,
  PET_CREATE_SUCCESS,
  PET_CREATE_FAIL,
  POST_CREATE_REQUEST,
  POST_CREATE_SUCCESS,
  POST_CREATE_FAIL,
  POST_LIST_REQUEST,
  POST_LIST_SUCCESS,
  POST_LIST_FAIL,
  USER_GET_REQUEST,
  USER_GET_SUCCESS,
  USER_GET_FAIL,
  USERS_GET_REQUEST,
  USERS_GET_SUCCESS,
  USERS_GET_FAIL,
  POST_GET_REQUEST,
  POST_GET_SUCCESS,
  POST_GET_FAIL,
} from '../constants/userConstants';
import axios from 'axios';

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      'http://localhost:5000/api/v1/woof/user/login',
      { email, password },
      config
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const userUpdate = (id, formData) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `http://localhost:5000/api/v1/woof/user/profile/${id}`,
      formData,
      config
    );

    dispatch({
      type: USER_UPDATE_SUCCESS,
      payload: data,
    });

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch({ type: USER_LOGOUT });
};

export const register = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      'http://localhost:5000/api/v1/woof/user',
      { email, password },
      config
    );

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listUsers = () => async (dispatch) => {
  try {
    dispatch({
      type: USERS_GET_REQUEST,
    });

    const { data } = await axios.get(`http://localhost:5000/api/v1/woof/user`);

    dispatch({
      type: USERS_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USERS_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createPetProfile =
  (id, formData) => async (dispatch, getState) => {
    try {
      dispatch({
        type: PET_CREATE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `http://localhost:5000/api/v1/woof/user/${id}/petprofile`,
        formData,
        config
      );

      dispatch({
        type: PET_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: PET_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const createPost = (formData) => async (dispatch, getState) => {
  try {
    dispatch({
      type: POST_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      `http://localhost:5000/api/v1/woof/posts`,
      formData,
      config
    );

    dispatch({
      type: POST_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listPosts = () => async (dispatch) => {
  try {
    dispatch({
      type: POST_LIST_REQUEST,
    });

    const { data } = await axios.get(`http://localhost:5000/api/v1/woof/posts`);

    dispatch({
      type: POST_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getUserById = (id) => async (dispatch) => {
  try {
    dispatch({
      type: USER_GET_REQUEST,
    });

    const { data } = await axios.get(
      `http://localhost:5000/api/v1/woof/user/${id}`
    );

    dispatch({
      type: USER_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getPostById = (id) => async (dispatch) => {
  try {
    dispatch({
      type: POST_GET_REQUEST,
    });

    const { data } = await axios.get(
      `http://localhost:5000/api/v1/woof/posts/${id}`
    );

    dispatch({
      type: POST_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
