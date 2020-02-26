import React, { FC } from 'react';
import styled from 'styled-components';
import { Skills, Contact } from '../types';

enum Types {
  SKILLS = 'competence',
  CONTACT = 'contact',
}

interface ContentInterface {
  slices: Array<{
    slice_type: string;
    primary?: any;
    items?: Array<any>;
  }>;
}

export const Content: FC<ContentInterface> = ({ slices }) => (
  <ContentWrapper>
    {slices.map((slice, index) => {
      switch (slice.slice_type) {
        case Types.SKILLS:
          return <Skills key={index} title={slice.primary.competence_title} items={slice.items} />;
        case Types.CONTACT:
          return (
            <Contact
              key={index}
              ingress={slice.primary.contact_ingress}
              url={slice.primary.contact_link.url}
            />
          );
        default:
          return <>hey</>;
      }
    })}
  </ContentWrapper>
);

const ContentWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin-top: 150px;
`;
