import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthForm from '../../components/auth/AuthForm';
import { changeFiled, initializeForm } from '../../modules/auth';

const RegisterContainer = ({ type }) => {
  // const form = useSelector((state) => state.auth.login);
  const { form } = useSelector(({ auth }) => ({ form: auth.register }));

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
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

  return <AuthForm type={type} onChange={onChange} onSubmit={onSubmit} />;
};

export default RegisterContainer;
