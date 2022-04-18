import React, { useState } from "react";
import styled from "styled-components";
const ToggleBox = styled.div`
  position: relative;
  margin: 0;
  width: 400px;
  height: 50px;
`;
const Input = styled.input`
  margin: 0;
  padding: 0;
  position: relative;
  appearance: none;
  width: 400px;
  height: 50px;
  background-color: #f1f1f1;
  border-radius: 60px;
  &:before {
    top: 5px;
    left: 5px;
    position: absolute;
    box-sizing: border-box;
    border-radius: 60px;
    content: "";
    background: white;
    width: 180px;
    height: 40px;
    transition: 0.2s;
  }
  &:checked {
    &::before {
      left: 215px;
    }
  }
`;
const TextBox = styled.div`
  pointer-events: none;
  position: absolute;
  margin: 0;
  padding: 0;
  top: 0;
  width: 400px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
function Toggle() {
  const [toggle, setToggle] = useState(false);
  const onToggle = () => {
    console.log(toggle);
    setToggle(!toggle);
  };
  return (
    <ToggleBox>
      <Input type="checkbox" value={toggle} onChange={onToggle}></Input>
      <TextBox>
        <span>기본</span>
        <span>상세</span>
      </TextBox>
    </ToggleBox>
  );
}

export default Toggle;
