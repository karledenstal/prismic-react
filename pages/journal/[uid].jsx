import React from 'react';
import { Layout } from '../../components/layout';
import { Client } from '../../utils/prismicHelpers';
import { Title, Ingress } from '../../components/text';
import { RichText } from 'prismic-reactjs';

const Entry = ({ doc }) => {
  const e = doc.data;
  console.log(e);
  return (
    <Layout title={e.journal_title} desc={e.journal_ingress}>
      <Title content={e.journal_title} />
      <Ingress content={RichText.asText(e.journal_ingress)} />
    </Layout>
  );
};

Entry.getInitialProps = async ({ req, query }) => {
  console.log(query);
  const uid = query.uid;
  const document = await Client(req).getByUID('journal_entry', uid);

  return {
    doc: document,
  };
};

export default Entry;
