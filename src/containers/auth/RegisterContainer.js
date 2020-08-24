import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthForm from '../../components/auth/AuthForm';
import { changeField, initializeForm, register } from '../../modules/auth';
import { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { checkUser } from '../../modules/user';

const RegisterContainer = ({ type, history }) => {
  // const form = useSelector((state) => state.auth.login);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  console.log(user);

  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password, passwordConfirm } = form;

    //하나라도 비어있다면
    if ([username, password, passwordConfirm].includes('')) {
      setError('빈 칸을 채워주세요.');
      return;
    }

    //비밀번호가 다르다면
    if (password !== passwordConfirm) {
      setError('비밀번호가 일치하지 않습니다.');
      dispatch(changeField({ form: 'register', key: 'password', value: '' }));
      dispatch(
        changeField({ form: 'register', key: 'passwordConfirm', value: '' }),
      );
      return;
    }

    dispatch(register({ username, password }));
  };

  const onChange = (e) => {
    const { value, name } = e.target;

    dispatch(
      changeField({
        form: 'register',
        key: name,
        value,
      }),
    );
  };

  useEffect(() => {
    dispatch(initializeForm('register'));
    setError(null);
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      // 계정이 존재 할 때
      if (authError.response.status === 409) {
        setError('이미 존재하는 계정명입니다.');
        return;
      }
      // 기타 이유
      setError('회원가입 실패');
      return;
    }
    if (auth) {
      console.log('회원가입 성공');
      console.log(auth);
      history.push('/');
      dispatch(checkUser());
    }
  }, [auth, authError, dispatch, history]);

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

export default withRouter(RegisterContainer);
