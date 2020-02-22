import React from 'react';
import styled from 'styled-components';

export const Title = ({ content }) => <TitleWrapper>{content}</TitleWrapper>;

const TitleWrapper = styled.h1`
  margin: 0;
`;
