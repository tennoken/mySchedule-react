import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AuthFormBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const GrayBlock = styled.div`
  background: rgba(0, 0, 0, 0.8);
  border-radius: 5px;
  width: 360px;
  padding: 20px;

  h1 {
    color: white;
    text-align: center;
  }

  h3 {
    color: white;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  background: none;
  border-bottom: 1px solid white;
  padding: 10px 0;
  font-size: 20px;
  color: white;

  & + & {
    margin-top: 20px;
  }
`;

const StyledButton = styled.button`
  width: 100%;
  background: #868e96;
  margin-top: 30px;
  padding: 10px;
  cursor: pointer;
  border: none;
  border-radius: 3px;
  color: white;
  font-size: 18px;

  &:hover {
    background-color: #66d9e8;
  }
`;

const LinkBlock = styled.div`
  text-align: right;
  margin-top: 20px;

  a {
    color: white;
    text-decoration: none;
  }

  a:hover {
    color: #66d9e8;
  }
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding-top: 15px;
  color: red;
`;

const formType = {
  login: '로그인',
  register: '회원가입',
};

const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
  const text = formType[type];

  return (
    <AuthFormBlock>
      <GrayBlock>
        <h1>나의 일정관리</h1>
        <h3>{text}</h3>
        <form onSubmit={onSubmit}>
          <StyledInput
            autoComplete="off"
            placeholder="아이디"
            name="username"
            onChange={onChange}
            value={form.username}
          />
          <StyledInput
            placeholder="비밀번호"
            name="password"
            type="password"
            onChange={onChange}
            value={form.password}
          />
          {type === 'register' ? (
            <StyledInput
              placeholder="비밀번호 확인"
              name="passwordConfirm"
              type="password"
              onChange={onChange}
              value={form.passwordConfirm}
            />
          ) : (
            ''
          )}
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <StyledButton>{text}</StyledButton>
        </form>
        <LinkBlock>
          {type === 'login' ? (
            <Link to="/register">회원가입</Link>
          ) : (
            <Link to="/login">로그인</Link>
          )}
        </LinkBlock>
      </GrayBlock>
    </AuthFormBlock>
  );
};

export default AuthForm;
