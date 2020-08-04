import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthForm from '../../components/auth/AuthForm';
import { changeFiled, initializeForm, register } from '../../modules/auth';

const RegisterContainer = ({ type }) => {
  // const form = useSelector((state) => state.auth.login);
  const dispatch = useDispatch();
  const { form, auth, authError } = useSelector(({ auth }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
  }));

  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password, passwordConfirm } = form;
    if (password !== passwordConfirm) {
      //오류
      return;
    }
    dispatch(register({ username, password }));
  };

  const onChange = (e) => {
    const { value, name } = e.target;

    dispatch(
      changeFiled({
        form: 'register',
        key: name,
        value,
      }),
    );
  };

  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log('오류 발생');
      console.log(authError);
      return;
    }
    if (auth) {
      console.log('회원가입 성공');
      console.log(auth);
    }
  }, [auth, authError]);

  return <AuthForm type={type} onChange={onChange} onSubmit={onSubmit} />;
};

export default RegisterContainer;
