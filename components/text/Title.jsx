import React from 'react';
import styled from 'styled-components';

export const Title = ({ content }) => <TitleWrapper>{content}</TitleWrapper>;

const TitleWrapper = styled.h1`
  margin: 0;
  font-family: futura-pt-condensed;
  font-weight: 700;
  letter-spacing: 1px;
  font-size: 42px;
  text-align: center;
  width: 75%;
  margin: 0 auto;
`;
