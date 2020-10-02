import React from 'react';
import styled from 'styled-components';

const StyledDropDownListItem = styled.li`
  cursor: ${(props) => (props.theme.cursor ? props.theme.cursor : 'pointer')};
  font-weight: ${(props) =>
    props.theme.weight ? props.theme.weight : 'normal'};
  text-transform: ${(props) =>
    props.theme.transform ? props.theme.transform : 'none'};
  text-decoration: ${(props) =>
    props.theme.decoration ? props.theme.decoration : 'none'};
  font-size: 14px;
  padding: 0;

  &:hover {
    color: #a3a3a3;
  }
`;

const DropDownListItem = ({ item }) => {
  return <StyledDropDownListItem>{item.name}</StyledDropDownListItem>;
};

export default DropDownListItem;
