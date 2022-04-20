import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userUpdate } from '../actions/userActions';
import Loader from '../components/Loader';
const Userprofile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState('');
  const [city, setCity] = useState('');
  const [profile, setProfile] = useState(null);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const userProfile = useSelector((state) => state.userProfile);
  const { loading, error, userInfo: profileInfo } = userProfile;
  const handleProfile = (e) => {
    e.preventDefault();
    if (
      name === '' &&
      age === '0' &&
      gender === '' &&
      city === '' &&
      profile === null
    ) {
      alert('Please fill all values');
    } else {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('age', age);
      formData.append('gender', gender);
      formData.append('city', city);
      formData.append('file', profile);
      if (userInfo) {
        dispatch(userUpdate(userInfo._id, formData));
      } else {
        navigate('/signup');
      }
    }
  };

  useEffect(() => {
    if (profileInfo) {
      navigate('/signup/userprofile/petprofile');
    }
  }, [profileInfo, navigate]);

  return (
    <div className="container d-flex justify-content-center p-4">
      {loading ? (
        <Loader />
      ) : error ? (
        <h1>error</h1>
      ) : (
        <form class="p-2 " onSubmit={handleProfile}>
          <h3 className="m-3 text-center">Create Profile</h3>
          <input
            class="form-control me-2 m-3"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            class="form-control me-2 m-3"
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <select
            class="form-select me-2 m-3"
            aria-label="Default select example"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option defaultValue>Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Transgender">Transgender</option>
          </select>
          <input
            class="form-control me-2 m-3"
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <label for="formFile" class="form-label me-2 m-3">
            Please select profile picture
          </label>
          <input
            class="form-control me-2 m-3"
            type="file"
            id="user-profile-pic"
            onChange={(e) => setProfile(e.target.files[0])}
          ></input>
          <button
            type="submit"
            className="btn btn-primary form-control me-2 m-3 "
          >
            Next
          </button>
        </form>
      )}
    </div>
  );
};

export default Userprofile;
