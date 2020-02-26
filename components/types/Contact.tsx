import React, { FC } from 'react';
import { Ingress } from '../text';
import styled from 'styled-components';

export const Contact: FC<{ ingress: string; url: string; }> = ({ ingress, url }) => (
  <ContactWrapper>
    <Ingress topMargin={false} content={ingress} />
    <MailLink href={url} target='_blank'>Let's have a chat!</MailLink>
  </ContactWrapper>
);

const ContactWrapper = styled.div`
  width: 100%;
  margin-top: 8rem;
  margin-bottom: 8rem;
  text-align: center;
`;

const MailLink = styled.a`
  display: inline-block;
  cursor: pointer;
  color: blue;
  border-bottom: 1px solid blue;
  text-decoration: none;
  margin-top: 2rem;
`;
