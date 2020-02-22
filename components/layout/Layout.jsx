import React from 'react';
import { GlobalStyle } from '../../globals/styles';
import Head from 'next/head';
import styled from 'styled-components';

export const Layout = ({ title, desc, image, children }) => (
  <>
    <GlobalStyle />
    <LayoutWrapper>
      <Head>
        <title>{title}</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' key='viewport' />
        {desc && <meta name='description' content={desc} />}
        <meta name='robots' content='index,follow' />
        <meta property='og:type' content='article' />
        <meta property='og:title' content={title} />
        {desc && <meta property='og:description' content={desc} />}
        {image && <meta property='og:image' content={image} />}
      </Head>
      <LayoutInnerWrapper>{children}</LayoutInnerWrapper>
    </LayoutWrapper>
  </>
);

const LayoutWrapper = styled.div`
  padding: 45px;
`;

const LayoutInnerWrapper = styled.div`
  line-height: 160%;
`;
