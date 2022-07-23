import React from 'react'
import BackdropLoader from './layouts/BackdropLoader';
import {  useSelector } from 'react-redux';
const Login = () => {
    const { loading, isAuthenticated, error, user } = useSelector((state) => state.user);

  return (
    <>
     {loading && <BackdropLoader />}
     <div>Login</div>
    </>
    
  )
}

export default Login