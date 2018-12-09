import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  background: #fff;
  padding: 5px 10px;
  border: solid 1px #b20b0b;
  border-radius: 3px;
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

export default Button;