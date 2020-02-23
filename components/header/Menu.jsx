import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export const Menu = ({ isOpen, handler }) => {
  if (isOpen) {
    return (
      <MenuWrapper isOpen={isOpen}>
        <CloseMenu>
          <FontAwesomeIcon icon={faTimes} onClick={() => handler(false)} />
        </CloseMenu>
        <MenuContent>
          <Link href='/'>
            <MenuLink>Home</MenuLink>
          </Link>
          <Link href='/journal'>
            <MenuLink>Journal</MenuLink>
          </Link>
          <Link href='/about'>
            <MenuLink>About me</MenuLink>
          </Link>
          <Link href='/contact'>
            <MenuLink>Contact</MenuLink>
          </Link>
        </MenuContent>
      </MenuWrapper>
    );
  } else {
    return null;
  }
};

const MenuWrapper = styled.div`
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 2rem;
  height: 100%;
`;

const CloseMenu = styled.div`
  padding-top: 45px;
  width: 75%;
  margin: 0 auto;
  text-align: right;

  @media screen and (max-width: 780px) {
    width: 100%;
  }

  svg {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;

const MenuContent = styled.div`
  width: 75%;
  margin: 0 auto;
  margin-top: 4rem;
  display: flex;
  flex-flow: column wrap;
  text-align: right;

  @media screen and (max-width: 780px) {
    width: 100%;
  }
`;

const MenuLink = styled.a`
  font-size: 50px;
  cursor: pointer;
  color: blue;
  font-family: futura-pt-condensed;
  font-weight: 700;
  transition: 0.25s all ease;

  &:hover {
    color: purple;
  }
`;
