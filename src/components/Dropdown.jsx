import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
const DropdownBox = styled.div`
  width: 300px;
  height: 400px;
`;
const List = styled.ul`
  display: ${(props) => (props.visible ? "block" : "none")};
  margin: 0;
  padding: 0;
  width: 100%;
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
`;
const DropButton = styled.button`
  margin: 0;
  padding: 0 10px;
  text-align: left;
  width: 100%;
  height: 40px;
  font-size: 16px;
  background: none;
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;
const Item = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height: 35px;
  margin: 0;
  padding: 0 0 0 20px;
  &:first-child {
    padding: 0;
  }
  list-style: none;
`;
const SearchBox = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  display: flex;
  width: 100%;
  height: 35px;
`;
const Input = styled.input`
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0 0 0 20px;
  outline: none;
  border: none;
  border-bottom: 1px solid #d1d1d1;
`;
const IconBox = styled.div`
  position: absolute;
  top: 5px;
  left: 2px;
  color: #d1d1d1;
`;
function Dropdown() {
  const [items] = useState([
    "All Symbols",
    "apple",
    "banana",
    "chocolate",
    "javascript",
    "react",
    "typescript",
    "JAVA",
  ]);
  const [searchedItems, setSearchedItems] = useState([...items]);
  const [isListVisible, setIsListVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState(searchedItems[0]);
  const onChange = (e) => {
    setInputValue(e.target.value);
  };
  const toggleIsListVisible = () => {
    setIsListVisible(!isListVisible);
  };
  const onClick = (item) => {
    setSelected(item);
    toggleIsListVisible();
  };
  useEffect(() => {
    const result = items.filter((i) => i.includes(inputValue));
    setSearchedItems([...result]);
  }, [inputValue, items]);
  return (
    <DropdownBox>
      <DropButton onClick={toggleIsListVisible}>
        <span>{selected}</span>
        <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
      </DropButton>
      <List visible={isListVisible}>
        <Item>
          <SearchBox>
            <IconBox>
              <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
            </IconBox>
            <Input
              type="text"
              placeholder="Search Symbol"
              value={inputValue}
              onChange={onChange}
            ></Input>
          </SearchBox>
        </Item>
        {searchedItems.map((i) => (
          <Item
            onClick={() => {
              onClick(i);
            }}
          >
            {i}
          </Item>
        ))}
      </List>
    </DropdownBox>
  );
}

export default Dropdown;
