import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Menu } from './Menu';

export const Header = ({ path }) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const unslugify = slug => {
    let parts = slug.split('-');
    parts = parts.join(' ');
    return parts.charAt(0).toUpperCase() + parts.slice(1);
  };

  const pathsWithNav = new Map();
  pathsWithNav.set('', 'Karl Edenstål');
  pathsWithNav.set('journal', 'Journal');

  if (router.query && router.query.uid) {
    pathsWithNav.set(router.query.uid, unslugify(router.query.uid));
  }

  const Crumb = () => {
    let parts = path.split('/');
    const place = parts[parts.length - 1];
    parts = parts.slice(1, parts.length - 1);

    return (
      <>
        {parts.map(bc)}
        {pathsWithNav.get(place) ? pathsWithNav.get(place) : place}
      </>
    );
  };

  const bc = (part, partIndex, parts) => {
    const path = ['', ...parts.slice(0, partIndex + 1)].join('/');

    return (
      <React.Fragment key={partIndex}>
        <Link key={path} href={path}>
          <CapitalizedCrumb>{pathsWithNav.get(part) ? pathsWithNav.get(part) : part}</CapitalizedCrumb>
        </Link>{' '}
        /&nbsp;
      </React.Fragment>
    );
  };

  return (
    <>
      <HeaderWrapper>
        <BreadcrumbWrapper>
          <Link href='/'>
            <CapitalizedCrumb>Karl Edenstål</CapitalizedCrumb>
          </Link>{' '}
          / &nbsp;
          <Crumb />
        </BreadcrumbWrapper>
        <MenuButtonWrapper>
          <FontAwesomeIcon icon={faBars} onClick={() => setIsMenuOpen(true)} />
        </MenuButtonWrapper>
      </HeaderWrapper>
      <Menu isOpen={isMenuOpen} handler={setIsMenuOpen} />
    </>
  );
};

const HeaderWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-top: 45px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`;

const BreadcrumbWrapper = styled.div`
  text-transform: capitalize;
`;

const CapitalizedCrumb = styled.a`
  color: blue;
  cursor: pointer;
  border-bottom: 1px solid blue;
  text-transform: capitalize;
`;

const MenuButtonWrapper = styled.div`
  text-align: right;
  align-self: center;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
  }
`;
