import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  userRegisterReducer,
  userUpdateReducer,
  userLoginReducer,
  createPetProfileReducer,
  createPostReducer,
  postListReducer,
  listUsersReducer,
  postGetReducer,
} from './reducers/userReducers';

const reducer = combineReducers({
  userRegister: userRegisterReducer,
  userProfile: userUpdateReducer,
  userLogin: userLoginReducer,
  petProfile: createPetProfileReducer,
  newPost: createPostReducer,
  posts: postListReducer,
  users: listUsersReducer,
  post: postGetReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const intialState = {
  userLogin: { userInfo: userInfoFromStorage },
};
const middleware = [thunk];

const store = createStore(
  reducer,
  intialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
