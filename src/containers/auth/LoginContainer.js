import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthForm from '../../components/auth/AuthForm';
import { changeFiled, initializeForm } from '../../modules/auth';

const LoginContainer = ({ type }) => {
  // const form = useSelector((state) => state.auth.login);
  const { form } = useSelector(({ auth }) => ({ form: auth.login }));

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    const { value, name } = e.target;

    dispatch(
      changeFiled({
        form: 'login',
        key: name,
        value,
      }),
    );
  };

  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  return <AuthForm type={type} onChange={onChange} onSubmit={onSubmit} />;
};

export default LoginContainer;
