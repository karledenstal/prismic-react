import React from 'react';
import { Layout } from '../../components/layout';
import { Title, Ingress } from '../../components/text';
import styled from 'styled-components';
import { RichText } from 'prismic-reactjs';
import { Client } from '../../utils/prismicHelpers';

const About = ({ doc }) => (
  <Layout title={doc.data.page_meta_title} desc={doc.data.page_meta_description}>
    <Title content={doc.data.page_title} />
    <Ingress content={RichText.asText(doc.data.page_ingress)} />
  </Layout>
);

About.getInitialProps = async ({ req }) => {
  const document = await Client(req).getByUID('generic_page', 'about-me');
  return {
    doc: document,
  };
};

export default About;
