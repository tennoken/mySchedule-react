import React from 'react';
import styled from 'styled-components';

const AuthTemplateBlock = styled.div`
  background-image: url('https://images.unsplash.com/photo-1483546363825-7ebf25fb7513?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
  background-position: center;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const AuthTemplate = ({ children }) => {
  return <AuthTemplateBlock>{children}</AuthTemplateBlock>;
};

export default AuthTemplate;
