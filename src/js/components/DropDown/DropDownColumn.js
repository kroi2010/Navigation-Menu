import React from 'react';
import styled from 'styled-components';
import DropDownListItem from './DropDownListItem';

const StyledDropDownList = styled.ul`
  display: grid;
  grid-auto-columns: max-content;
  grid-template-rows: repeat(11, 25px);
  grid-auto-flow: column;
  grid-column-gap: 30px;
  list-style: none;
  padding: 0;
  overflow: hidden;
  cursor: default;
`;

const StyledHeader = styled.figcaption`
  cursor: ${(props) => props.theme.cursor};
  text-transform: ${(props) => props.theme.transform};
  text-decoration: ${(props) => props.theme.decoration};
  weight: bold;
  height: 25px;
`;

const headerWithoutLink = {
  cursor: 'default',
  transform: 'uppercase',
  decoration: 'none',
};

const headerWithLink = {
  cursor: 'pointer',
  transform: 'none',
  decoration: 'underline',
};

const setTheme = (header) => {
  if (!header) return null;
  return header.custom_category_link ? headerWithLink : headerWithoutLink;
};

const DropDownColumn = ({ items, index }) => {
  let header = null;

  let sortedItems = items.filter((item) => {
    if (!item.is_column_header) {
      return item;
    } else {
      header = item;
    }
  });

  return (
    <figure>
      <StyledHeader theme={setTheme(header)}>
        {header ? header.custom_category_name : ''}
      </StyledHeader>

      <StyledDropDownList className={`col-${index}`}>
        {sortedItems.map((subcategory, index) => (
          <DropDownListItem item={subcategory} />
        ))}
      </StyledDropDownList>
    </figure>
  );
};

export default DropDownColumn;
