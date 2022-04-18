import React, { useState } from "react";
import styled from "styled-components";

const TabBox = styled.nav`
  display: flex;
  flex-direction: column;
  width: 600px;
  gap: 10px;
`;
const Ul = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
`;
const Li = styled.li`
  cursor: pointer;
  width: 200px;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  color: ${(props) => (props.isSelected ? "black" : "#d1d1d1")};
  transition: 0.2s;
  list-style: none;
  margin: 0;
  padding: 0;
`;
const SlideBox = styled.div`
  width: 600px;
  height: 2px;
  background-color: #d1d1d1;
  &:before {
    position: absolute;
    content: "";
    width: 200px;
    height: 2px;
    background-color: #4fc493;
    transform: ${(props) => `translateX(${props.selected * 200}px)`};
    transition: 0.2s;
  }
`;
function Tab() {
  const [listItem] = useState(["감자", "고구마", "카레라이스"]);
  const [selected, setSelected] = useState(0);
  return (
    <TabBox>
      <Ul>
        {listItem.map((li, i) => (
          <Li
            onClick={() => {
              setSelected(i);
            }}
            isSelected={i === selected}
          >
            {li}
          </Li>
        ))}
      </Ul>
      <SlideBox selected={selected}></SlideBox>
    </TabBox>
  );
}

export default Tab;
