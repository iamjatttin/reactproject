import { useDispatch } from 'react-redux';
import { loadUser } from './redux/actions/userAction';
import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import PrivateRoute from './routes/PrivateRoute';
import Home from './components/Home';
import Login from './components/Login';
 
function App() {

  const dispatch = useDispatch();
  const { pathname } = useLocation();

  // const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  // always scroll to top on route/path change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, [pathname])

  return (
    <>
        <Routes>
          <Route path="/" element={
            <PrivateRoute>
              <Home/>
            </PrivateRoute>
          } />
          <Route path="/login" element={<Login />} />
        </Routes>

    </>

  );
}

export default App;
