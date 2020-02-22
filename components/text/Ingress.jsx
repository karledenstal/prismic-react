import React from 'react';
import styled from 'styled-components';

export const Ingress = ({ content }) => <IngressWrapper>{content}</IngressWrapper>;

const IngressWrapper = styled.p`
  margin: 0;
  padding: 0;
  font-size: 24px;
  text-align: center;
  width: 75%;
  margin: 0 auto;
  margin-top: 4rem;
  line-height: 160%;
`;
