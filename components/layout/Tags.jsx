import React from 'react';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';

export const TagType = {
  'development-tag': {
    bg: '#8bc84b',
    name: 'Development',
  },
  'health-tag': {
    bg: '#f24f28',
    name: 'Health',
  },
  'personal-tag': {
    bg: '#e535ab',
    name: 'Personal',
  },
};

export const Tags = ({ items }) => {
  const router = useRouter();

  return (
    <TagsWrapper>
      <TagItems>
        {items &&
          items.length &&
          items.map((t, index) => (
            <TagItem bg={TagType[t.uid].bg} onClick={() => router.push(`/journal/tags/${t.uid}`)} key={index}>
              {t.data.tag_name}
            </TagItem>
          ))}
      </TagItems>
    </TagsWrapper>
  );
};

const TagsWrapper = styled.div`
  width: 100%;
  margin-top: 8rem;
  margin-bottom: 10rem;
`;

const TagItems = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const TagItem = styled.div`
  border-radius: 4px;
  color: #fff;
  padding: 10px;
  font-size: 12px;
  font-weight: 700;
  margin: 0 0.25rem;
  text-align: center;
  cursor: pointer;
  letter-spacing: 1px;
  text-transform: uppercase;

  ${props =>
    props.bg &&
    css`
      background: ${props.bg};
    `}
`;
