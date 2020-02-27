import React from 'react';
import { Layout, Content, LatestEntries } from '../components/layout';
import { Title, Ingress, CoolLink } from '../components/text';
import { Client } from '../utils/prismicHelpers';
import { RichText } from 'prismic-reactjs';
import styled from 'styled-components';
import Prismic from 'prismic-javascript';
import { NextPage } from 'next';
import { Document } from '../entities/prismic';

const Home: NextPage<{ doc: Document; entries: Array<{}> }> = ({ doc, entries }) => {
  const p = doc.data;
  const e = entries;

  return (
    <Layout title={p.homepage_meta_title} desc={p.homepage_meta_description}>
      <Image src={p.image_of_me.url} />
      <Title content={p.homepage_title} />
      <Ingress topMargin content={RichText.asText(p.homepage_ingress)} />
      <CoolLink to='/about' name='Learn more about me' />
      <Content slices={p.body} />
      <LatestEntries entries={e} />
    </Layout>
  );
};

Home.getInitialProps = async ({ req }) => {
  try {
    const home = await Client(req).getSingle('homepage', {});
    const entries = await Client(req).query(Prismic.Predicates.at('document.type', 'journal_entry'), {
      pageSize: 2,
    });
    return {
      doc: home,
      entries: entries ? entries.results : [],
    };
  } catch (e) {
    console.error(e);
    return e;
  }
};

const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 100%;
  margin: 0 auto;
  object-fit: cover;
  display: block;
  margin-bottom: 4rem;
`;

export default Home;
