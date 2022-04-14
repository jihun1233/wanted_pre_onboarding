import styled from 'styled-components'
import './App.css';
import Dropdown from './components/Dropdown';
import Input from './components/Input';
import Slider from './components/Slider';
import Tab from './components/Tab';
import Toggle from './components/Toggle';
const AppBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
function App() {
  return (
    <AppBox>
      <h2>Toggle</h2>
      <Toggle></Toggle>
      <h2>Tab</h2>
      <Tab></Tab>
      <h2>Slider</h2>
      <Slider></Slider>
      <h2>Input</h2>
      <Input></Input>
      <h2>Dropdown</h2>
      <Dropdown></Dropdown>
    </AppBox>
  );
}

export default App;
