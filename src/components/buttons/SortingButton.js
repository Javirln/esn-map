import React from 'react';
import styled from 'styled-components';

const sortingButton = (props) => {
  let className;
  if (props.sortingMethod === 'asc') {
    className = 'fa fa-caret-up';
  } else {
    className = 'fa fa-caret-down';
  }
  return (
    <StyledButton onClick={props.click}>
      <i className={className} aria-hidden="true"/>
      <span> Order</span>
    </StyledButton>);
};

const StyledButton = styled.button.attrs({
  className: 'btn'
})`
    border-radius: 5px;
    cursor: pointer;
    color: white;
    text-transform: uppercase;
    font-family: Lato, Helvetica Neue, Helvetica, Arial, sans-serif;;
    background-color: #00aeef;
    &:hover {
        box-shadow: 0 0 2rem rgba(0, 0, 0, .2);
    }
    &:focus {
        outline-width: 0;
    }
`;

export default sortingButton;