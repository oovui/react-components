import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  background: #fff;
  padding: 5px 10px;
  border: solid 1px #aaa;
  border-radius: 3px;
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