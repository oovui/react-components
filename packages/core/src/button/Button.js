import styled, { css } from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const buttonBaseStyles = css`
  border-radius: 4px;
  font-size: 12px;
  font-family: Arial;
  font-weight: 900;
  padding: 12px 24px;
  margin: 10px;
  outline:none;
  :hover {
    cursor: pointer;
  }
`;

const colors = {
  primary: '#1C76E2',
  warning: '#E10D30',
  default: '#155EC2',
  success: '#12AC3F',
  info: '#AE1DC5',
}

const hoverColors = {
  primary: '#15447D',
  warning: '#900B21',
  default: '#0C3875',
  success: '#0B6F29',
  info: '#5B0D68',
}


const MainComponent = styled.button`
  ${buttonBaseStyles}
  background-color: ${({ type }) => colors[type]};
  color: #ffffff;
  border: none;
  &:hover {
    background-color: ${({ type }) => hoverColors[type]};
  }
`;

const GhostButton = styled.button`
  ${buttonBaseStyles};
  background-color: #ffffff;
  color: ${({ type }) => colors[type]};
  border: ${({ type }) => `1px solid ${colors[type]}`};
  &:hover {
    color: ${({ type }) => hoverColors[type]};
    border: ${({ type }) => `1px solid ${hoverColors[type]}`};
  }
`;


const Button = ({ type, children, ghost }) => {
  // 不传时ghost 为undefined
  const ButtonComponent = !!ghost?GhostButton:MainComponent;
  return (
    <ButtonComponent type={type}>
      {children}
    </ButtonComponent>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  ghost: PropTypes.bool
}

Button.defaultProps = {
  type: 'primary',
  ghost: false
};

export default Button;