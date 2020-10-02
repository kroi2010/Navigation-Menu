import React from 'react';
import styled from 'styled-components';
import { data } from '../../data/data';
import MenuListItem from './MenuListItem';

const NavigationList = styled.ul`
  display: flex;
  background: linear-gradient(to top, #d9d9d9 0px, #d9d9d9 1px, #fff 1px);
  flex-direction: row;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
  height: 25px;
  width: 100vw;
  position: relative;

  &:hover > li:not(:hover) {
    color: #a3a3a3;
  }
`;

const Menu = () => {
  return (
    <nav>
      <NavigationList>
        {data.navCatagories.map((category, index) => {
          return <MenuListItem item={category} key={index} />;
        })}
      </NavigationList>
    </nav>
  );
};

export default Menu;
