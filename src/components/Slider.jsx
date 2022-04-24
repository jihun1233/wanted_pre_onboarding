import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
`;
const SliderBox = styled.div`
  position: relative;
  height: 30px;
`;

const Input = styled.input`
  position: relative;
  appearance: none;
  width: 100%;
  height: 5px;
  background-color: #f1f1f1;
  border-radius: 60px;
  &::before {
    position: absolute;
    content: "";
    width: ${(props) => props.value}%;
    height: 5px;
    background-color: #4fc493;
    z-index: 0;
  }
  &::-webkit-slider-thumb {
    position: relative;
    appearance: none;
    background-color: #4fc493;
    border: 3px solid white;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    z-index: 1;
    cursor: pointer;
  }
`;
const MarkerBox = styled.div`
  position: absolute;
  width: calc(100% - 12px);
  height: 12px;
  top: 0;
  bottom: 0;
  margin: auto 0;
`;
const Marker = styled.div`
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => (props.passed ? "#4fc493" : "#f1f1f1")};
  left: ${(props) => props.value}%;
  &:first-child {
    left: 2px;
  }
`;
const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Button = styled.button`
  cursor: pointer;
  border: none;
  height: 20px;
  width: 40px;
  border-radius: 60px;
  font-size: 10px;
  &:hover {
    background-color: #4fc493;
    color: white;
  }
`;
const Display = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;
  strong {
    margin: 5px;
    font-weight: bold;
    font-size: 20px;
  }
`;

function Slider() {
  const [slideValue, setSlideValue] = useState(0);
  const onChange = (e) => {
    setSlideValue(e.target.value);
  };
  const point = [0, 25, 50, 75, 100];
  return (
    <Container>
      <Display>
        <strong>{slideValue}</strong> %
      </Display>
      <SliderBox>
        <Input
          type="range"
          value={slideValue}
          onChange={onChange}
          min={0}
          max={100}
        ></Input>
        <MarkerBox>
          {point.map((p) => (
            <Marker value={p} passed={p <= slideValue}></Marker>
          ))}
        </MarkerBox>
      </SliderBox>
      <ButtonBox>
        {point.map((p) => (
          <Button
            onClick={() => {
              setSlideValue(p);
            }}
          >
            {p}%
          </Button>
        ))}
      </ButtonBox>
    </Container>
  );
}

export default Slider;
