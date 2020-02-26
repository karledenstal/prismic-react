import React, { FC } from 'react';
import styled from 'styled-components';

interface TitleProps {
  content: string;
  left?: boolean;
}

export const Title: FC<TitleProps> = ({ content, left = false }) => <TitleWrapper left={left}>{content}</TitleWrapper>;

const TitleWrapper = styled.h2`
  margin: 0;
  font-family: futura-pt-condensed;
  font-weight: 700;
  letter-spacing: 1px;
  font-size: 42px;
  text-align: ${(props) => props.left ? 'left' : 'center'};
  width: 100%;
  margin: 0 auto;
`;
