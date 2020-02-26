import React from 'react';
import { Layout, Tags, LatestEntries } from '../../components/layout';
import { Client } from '../../utils/prismicHelpers';
import { Title, Ingress } from '../../components/text';
import { RichText } from 'prismic-reactjs';
import Prismic from 'prismic-javascript';
import { NextPage } from 'next';

const Journal: NextPage<{ doc: any; tags: Array<any>; entries: Array<any> }> = ({ doc, tags, entries }) => {
  const j = doc.data;
  const t = tags;
  const e = entries;

  console.log(e);

  return (
    <Layout title={j.page_meta_title} desc={j.page_meta_description}>
      <Title content={j.page_title} />
      <Ingress content={RichText.asText(j.page_ingress)} />
      <Tags items={t} />
      <LatestEntries entries={e} />
    </Layout>
  );
};

Journal.getInitialProps = async ({ req }) => {
  const document = await Client(req).getByUID('generic_page', 'journal', {});
  const tags = await Client(req).query(Prismic.Predicates.at('document.type', 'entry_tag'), {});
  const entries = await Client(req).query(Prismic.Predicates.at('document.type', 'journal_entry'), {});

  return {
    doc: document,
    tags: tags ? tags.results : [],
    entries: entries ? entries.results : [],
  };
};

export default Journal;
