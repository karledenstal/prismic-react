import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { RichText } from 'prismic-reactjs';
import Link from 'next/link';
import { TagType } from '.';
import moment from 'moment';

export const LatestEntries: FC<{ entries: Array<any> }> = ({ entries }) => {
  return (
    <LatestWrapper>
      {entries &&
        entries.map((e, index) => (
          <Entry key={index}>
            <EntryImage img={e.data.journal_leading_image.url} />
            <EntryTitle>{e.data.journal_title}</EntryTitle>
            <EntryMeta>
              <EntryDate>{moment(e.last_publication_date).format('YYYY-MM-DD')}</EntryDate>
              {e.data && e.data.tag && (
                <EntryTag bg={TagType[e.data.tag.uid].bg}>{TagType[e.data.tag.uid].name}</EntryTag>
              )}
            </EntryMeta>
            <EntryIngress>{RichText.asText(e.data.journal_ingress)}</EntryIngress>
            <Link href={`/journal/${e.uid}`}>
              <EntryLink>Read more</EntryLink>
            </Link>
          </Entry>
        ))}
    </LatestWrapper>
  );
};

const LatestWrapper = styled.div`
  width: 100%;
  margin-bottom: 10rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2rem;
  margin-top: 2rem;

  @media screen and (max-width: 780px) {
    grid-column-gap: 1rem;
  }

  @media screen and (max-width: 480px) {
    grid-column-gap: 0;
    grid-template-columns: 1fr;
    grid-row-gap: 2rem;
  }
`;

const Entry = styled.div`
  width: 100%;
`;

const EntryImage = styled.div`
  width: 100%;
  height: 300px;
  background-image: ${({ img }) => (img ? `url(${img})` : 'url(http://placehold.it/500)')};
  background-size: cover;
  background-position: center;
  margin-bottom: 1.5rem;
  border-radius: 4px;
`;

const EntryTitle = styled.h3`
  font-family: futura-pt-condensed;
  font-size: 28px;
  margin: 0;
`;

const EntryMeta = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1rem;
`;

const EntryDate = styled.em`
  font-size: 18px;
  margin-right: .5rem;
`;

const EntryTag = styled.p`
  display: inline-block;
  border-radius: 6px;
  background: tomato;
  font-size: 8px;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 0 6px;
  font-weight: 700;
  color: #fff;

  ${props =>
    props.bg &&
    css`
      background: ${props.bg};
    `}
`;

const EntryIngress = styled.p`
  padding: 0;
  margin: 0;
  font-size: 18px;
  line-height: 160%;
  margin-bottom: 1rem;
`;

const EntryLink = styled.a`
  border-bottom: 1px solid blue;
  color: blue;
  font-size: 16px;
  cursor: pointer;
`;
