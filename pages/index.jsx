import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Title } from '../components/text/Title';
import { Ingress } from '../components/text/Ingress';

const Home = () => (
  <Layout title='Home'>
    <Title content='This is a title' />
    <Ingress content='This is an ingress' />
  </Layout>
);

export default Home;
