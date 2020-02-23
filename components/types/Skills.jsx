import React from 'react';
import styled, { css } from 'styled-components';
import { Title } from '../text';
import { RichText } from 'prismic-reactjs';

const SkillTypes = {
  javascript: {
    bg: '#f7e016',
    color: '#000',
  },
  react: {
    bg: '#60dbfc',
    color: '#fff',
  },
  nodejs: {
    bg: '#8bc84b',
    color: '#333',
  },
  express: {
    bg: '#C0C0C0',
    color: '#111',
  },
  mongodb: {
    bg: '#439a42',
    color: '#fff',
  },
  git: {
    bg: '#f24f28',
    color: '#fff',
  },
  agile: {
    bg: '#e535ab',
    color: '#fff',
  },
  typescript: {
    bg: '#007acc',
    color: '#fff',
  },
};

export const Skills = ({ title, items }) => (
  <SkillsWrapper>
    <Title left={true} content={title} />
    <SkillItems>
      {items &&
        items.length &&
        items.map((i, index) => (
          <SkillItem key={index} bg={SkillTypes[i.field_of_competence].bg}>
            <ItemTitle color={SkillTypes[i.field_of_competence].color}>{i.title_of_competence}</ItemTitle>
            <ItemDesc>{RichText.asText(i.competence_desc)}</ItemDesc>
          </SkillItem>
        ))}
    </SkillItems>
  </SkillsWrapper>
);

const SkillsWrapper = styled.div`
  width: 100%;
`;

const SkillItems = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 0.5rem;
  grid-row-gap: 0.5rem;
  margin-top: 3rem;

  @media screen and (max-width: 780px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const SkillItem = styled.div`
  height: 200px;
  border-radius: 6px;
  padding: 25px;
  overflow: hidden;

  ${props =>
    props.bg &&
    css`
      background: ${props.bg};
    `}
`;

const ItemTitle = styled.h3`
  font-size: 32px;
  font-family: futura-pt-condensed;
  text-transform: lowercase;
  margin: 0;
  ${props =>
    props.color &&
    css`
      color: ${props.color};
    `}
`;

const ItemDesc = styled.p`
  padding: 0;
  margin: 0;
  margin-top: 1rem;
`;
