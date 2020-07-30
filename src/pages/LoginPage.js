import React from 'react';
import LoginContainer from '../containers/auth/LoginContainer';
import AuthTemplate from '../components/auth/AuthTemplate';

const LoginpPage = () => {
  return (
    <AuthTemplate>
      <LoginContainer type="login" />
    </AuthTemplate>
  );
};

export default LoginpPage;
