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
  USERS_GET_REQUEST,
  USERS_GET_SUCCESS,
  USERS_GET_FAIL,
  POST_GET_REQUEST,
  POST_GET_SUCCESS,
  POST_GET_FAIL,
} from '../constants/userConstants';

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_REQUEST:
      return { loading: true };
    case USER_UPDATE_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const createPetProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case PET_CREATE_REQUEST:
      return { loading: true };
    case PET_CREATE_SUCCESS:
      return { loading: false, pet: action.payload };
    case PET_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const createPostReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_CREATE_REQUEST:
      return { loading: true };
    case POST_CREATE_SUCCESS:
      return { loading: false, post: action.payload };
    case POST_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const postListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case POST_LIST_REQUEST:
      return { loading: true };
    case POST_LIST_SUCCESS:
      return { loading: false, posts: action.payload };
    case POST_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const listUsersReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case USERS_GET_REQUEST:
      return { loading: true };
    case USERS_GET_SUCCESS:
      return { loading: false, users: action.payload };
    case USERS_GET_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const postGetReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_GET_REQUEST:
      return { loading: true };
    case POST_GET_SUCCESS:
      return { loading: false, post: action.payload };
    case POST_GET_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
