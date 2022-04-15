import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 100px; */
`;
const InputBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const SInput = styled.input`
  width: 300px;
  height: 25px;
  padding: 5px;
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  &:focus {
    border: 1px solid black;
    outline: none;
  }
`;
const IconBox = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  right: 5px;
  width: 20px;
  height: 25px;
  /* background-color: gray; */
`;
const WarnMsg = styled.span`
  margin: 0;
  padding: 0;
  color: red;
  font-size: 10px;
  height: 10px;
  margin-bottom: 50px;
`;
function Input() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [validMessage, setValidMessage] = useState("");
  const onFocus = () => {
    setValidMessage("");
  };
  const onBlur = () => {
    if (isEmailValid) return;
    setValidMessage("Invalid E-mail address");
  };
  const toggleIsPasswordVisible = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const checkEmailVaild = (string) => {
    const regex = new RegExp(/^[0-9a-zA-Z]+@[0-9a-zA-Z]+\.[0-9a-zA-Z]+$/);
    if (string.match(regex)) {
      return true;
    }
    return false;
  };
  const onChange = (e) => {
    if (e.target.name === "email") {
      checkEmailVaild(e.target.value)
        ? setIsEmailValid(true)
        : setIsEmailValid(false);
    }
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <label>E-mail</label>
      <InputBox>
        <SInput
          type="email"
          name="email"
          value={inputValue.email}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        ></SInput>
        <IconBox>
          <FontAwesomeIcon
            icon={faCheckCircle}
            color={isEmailValid ? "green" : "#d1d1d1"}
          ></FontAwesomeIcon>
        </IconBox>
      </InputBox>
      <WarnMsg>{validMessage}</WarnMsg>
      <label>Password</label>
      <InputBox>
        <SInput
          type={isPasswordVisible ? "text" : "password"}
          name="password"
          value={inputValue.password}
          onChange={onChange}
        ></SInput>
        <IconBox>
          <FontAwesomeIcon
            icon={isPasswordVisible ? faEye : faEyeSlash}
            onClick={toggleIsPasswordVisible}
          ></FontAwesomeIcon>
        </IconBox>
      </InputBox>
    </Container>
  );
}

export default Input;
