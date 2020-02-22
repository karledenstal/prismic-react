import React from 'react';
import styled from 'styled-components';

export const Content = ({ slices }) => {
  const s = slices;
  return <ContentWrapper>content here</ContentWrapper>;
};

const ContentWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin-top: 150px;
`;
