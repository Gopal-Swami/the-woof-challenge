import Navigation from './components/Navbar';
import Home from './screen/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './screen/Signup';
import Userprofile from './screen/Userprofile';
import Petprofile from './screen/Petprofile';
import Postcreatescreen from './screen/Postcreatescreen';
import Login from './screen/Login';
import Postviewscreen from './screen/Postviewscreen';
import Userview from './screen/Userview';
const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup/userprofile" element={<Userprofile />} />
        <Route path="/signup/userprofile/petprofile" element={<Petprofile />} />
        <Route path="/post/create" element={<Postcreatescreen />} />
        <Route path="/post/view/:id" element={<Postviewscreen />} />
        <Route path="/user/view/:id" element={<Userview />} />
      </Routes>
    </Router>
  );
};

export default App;
