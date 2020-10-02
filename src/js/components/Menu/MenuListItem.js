import React, { useState } from 'react';
import styled from 'styled-components';
import DropDownMenu from '../DropDown/DropDownMenu';

const StyledMenuListItem = styled.li`
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  padding: 0 15px;
  line-height: 25px;
`;

const MenuListItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  const openItem = () => {
    if (!open) setOpen(!open);
  };

  const closeItem = () => {
    if (open) setOpen(!open);
  };

  const subcategories = () => {
    return item.children_data.filter(
      (subcategory) => subcategory.parent_id === item.id
    );
  };

  return (
    <StyledMenuListItem onMouseEnter={openItem} onMouseLeave={closeItem}>
      {item.name}
      {open ? <DropDownMenu items={subcategories()} /> : null}
    </StyledMenuListItem>
  );
};

export default MenuListItem;
