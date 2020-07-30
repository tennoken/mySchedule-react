import React from 'react';
import RegisterContainer from '../containers/auth/RegisterContainer';
import AuthTemplate from '../components/auth/AuthTemplate';

const RegisterPage = () => {
  return (
    <AuthTemplate>
      <RegisterContainer type="register" />
    </AuthTemplate>
  );
};

export default RegisterPage;
