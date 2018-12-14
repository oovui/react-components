import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types'


const ButtonWrapper = styled.button`
  background: #fff;
  padding: 5px 10px;
  border: solid 1px #b20b0b;
  border-radius: 30px;
  outline:none;
`

const Button = (props) => {
  return (
    <ButtonWrapper 
      {...props}
      onClick={props.onClick}> 
      {props.text}
     
    </ButtonWrapper>
  )
}

Button.propTypes = {
   /** 按钮的值 */
  text:PropTypes.string,
   /** 原生class */
  className:PropTypes.string
}

export default Button;