import React, { FC } from 'react';
import styled from 'styled-components';

export const Ingress: FC<{ content: string; topMargin?: boolean }> = ({ content, topMargin = false }) => (
  <IngressWrapper topMargin={topMargin}>{content}</IngressWrapper>
);

const IngressWrapper = styled.p`
  margin: 0;
  padding: 0;
  font-size: 24px;
  text-align: center;
  width: 75%;
  margin: 0 auto;
  margin-top: ${props => (props.topMargin ? '4rem' : '0')};
  line-height: 160%;

  @media screen and (max-width: 780px) {
    width: 100%;
  }
`;

Ingress.defaultProps = {
  topMargin: true,
};
