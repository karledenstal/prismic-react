import React from 'react';
import styled from 'styled-components';

export const Header = ({ path }) => (
  <HeaderWrapper>
    <BreadcrumbWrapper>
      Paths here
    </BreadcrumbWrapper>
    <MenuButtonWrapper>
      menu button here
    </MenuButtonWrapper>
  </HeaderWrapper>
);

const HeaderWrapper = styled.div`
  width: 1000px;
  margin: 0 auto;
  padding-top: 45px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

const BreadcrumbWrapper = styled.div`
  width: 50%;
`;

const MenuButtonWrapper = styled.div`
  width: 50%;
  text-align: right;
`;
