import React from 'react';
import styled from 'styled-components';
import { Skills, Contact } from '../types';

const Types = {
  SKILLS: 'competence',
  CONTACT: 'contact',
};

export const Content = ({ slices }) => {
  const s = slices;

  return (
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
};

const ContentWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin-top: 150px;
`;
