import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthForm from '../../components/auth/AuthForm';
import { changeField, initializeForm, login } from '../../modules/auth';
import { useState } from 'react';

const LoginContainer = ({ type }) => {
  // const form = useSelector((state) => state.auth.login);
  const [error, setError] = useState(null);
  const { form, auth, authError } = useSelector(({ auth }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
  }));

  const dispatch = useDispatch();

  // 로그인 클릭 시
  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = form;

    dispatch(login({ username, password }));
  };

  const onChange = (e) => {
    const { value, name } = e.target;

    dispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      }),
    );
  };

  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log('오류 발생');
      console.log(authError);
      setError('로그인 실패');
      return;
    }
    if (auth) {
      console.log('로그인 성공');
      setError(null);
      console.log(auth);
    }
  }, [auth, authError]);

  return (
    <AuthForm
      type={type}
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default LoginContainer;
