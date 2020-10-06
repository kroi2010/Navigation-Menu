import React from 'react';
import styled from 'styled-components';
import DropDownColumn from './DropDownColumn';

const StyledDropDownMenu = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 25px;
  left: 0;
  height: 360px;
  width: 980px;
  box-sizing: content-box;
  padding: 0 calc((100vw - 980px) / 2);
  background: #fff;
  box-shadow: 0px 28px 100px -50px rgba(0, 0, 0, 0.2);
  cursor: default;
`;

const DropDownMenu = ({ items }) => {
  if (items.length === 0) {
    return null;
  }

  const columnItems = [[], [], []];

  items.forEach((item) => {
    if (!item.include_in_menu) return;

    if (item.include_in_menu_column2) {
      columnItems[1].push(item);
    } else if (item.include_in_menu_column3) {
      columnItems[2].push(item);
    } else {
      columnItems[0].push(item);
    }
  });

  return (
    <StyledDropDownMenu>
      {columnItems.map((itemList, index) => {
        return itemList.length > 0 ? (
          <DropDownColumn items={itemList} index={index + 1} key={index} />
        ) : null;
      })}
    </StyledDropDownMenu>
  );
};

export default DropDownMenu;
