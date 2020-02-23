import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

export const CoolLink = ({ to, name }) => (
  <LinkWrapper>
    <Link href={to}>
      <StyledLink>{name}</StyledLink>
    </Link>
  </LinkWrapper>
);

const LinkWrapper = styled.div`
  margin-top: 2rem;
  text-align: center;
`;

const StyledLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: blue;
  border-bottom: 1px solid blue;
`;
