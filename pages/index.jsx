import React from 'react';
import { Layout, Content } from '../components/layout';
import { Title, Ingress } from '../components/text';
import { Client } from '../utils/prismicHelpers';
import { RichText } from 'prismic-reactjs';

const Home = ({ doc }) => {
  const p = doc.data;

  return (
    <Layout title={p.homepage_meta_title} desc={p.homepage_meta_description}>
      <Title content={p.homepage_title} />
      <Ingress content={RichText.asText(p.homepage_ingress)} />
      <Content slices={doc.body} />
    </Layout>
  );
};

Home.getInitialProps = async ({ req }) => {
  try {
    const home = await Client(req).getSingle('homepage');
    return {
      doc: home,
    };
  } catch (e) {
    console.error(e);
    return e;
  }
};

export default Home;
