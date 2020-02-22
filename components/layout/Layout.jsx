import React from 'react';
import { GlobalStyle } from '../../globals/styles';
import Head from 'next/head';
import styled from 'styled-components';
import { Header } from '../header/Header';
import { useRouter } from 'next/router';

export const Layout = ({ title, desc, image, children }) => {
  const router = useRouter();

  return (
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
          <link rel='stylesheet' href='https://use.typekit.net/tdf5exd.css' />
        </Head>
        <Header path={router.pathname} />
        <LayoutInnerWrapper>{children}</LayoutInnerWrapper>
      </LayoutWrapper>
    </>
  );
};

const LayoutWrapper = styled.div`
  padding: 0;
  width: 1000px;
  margin: 0 auto;
`;

const LayoutInnerWrapper = styled.div`
  line-height: 160%;
  margin-top: 180px;
`;
