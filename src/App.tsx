import React, { Component } from 'react';
import styled from 'styled-components';

/**
 *
 * The goal of this exercise is to refactor this component from a class
 * to a functional component using React Hooks.
 *
 * You should only need to use useState and useEffect to copy this implementation,
 * but if you complete this, feel free to try other hooks.
 *
 */

class App extends Component {
  state = {
    count: 0,
  };

  componentDidUpdate() {
    window.document.title = `The current count is: ${this.state.count}.`;
  }

  render() {
    const { count } = this.state;
    return (
      <Overlay column justify="center" align="center">
        <Wrapper column justify="space-between" align="center">
          <Header>Count: {count}</Header>
          <ButtonWrapper>
            <Button onClick={() => this.setState({ count: count - 1 })}>
              Decrement
            </Button>
            <Button onClick={() => this.setState({ count: count + 1 })}>
              Increment
            </Button>
          </ButtonWrapper>
        </Wrapper>
      </Overlay>
    );
  }
}

// styled-components, ignore this

type FlexProps = { column?: boolean; justify?: string; align?: string };

const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
`;

const Overlay = styled(Flex)`
  width: 100vw;
  height: 100vh;
  background-color: #000000d5;
`;

const Wrapper = styled(Flex)`
  background-color: white;
  border-radius: 3px;
  padding: 24px;
  height: 300px;
`;

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
`;

const Header = styled.h1`
  font-size: 56px;
  margin-top: 0;
`;

const Button = styled.button`
  border: 0;
  background-color: dodgerblue;
  font-weight: bold;
  font-size: 24px;
  color: white;
  padding: 25px;
  border-radius: 3px;
  cursor: pointer;

  &:focus {
    outline: 0;
  }
`;

export default App;
