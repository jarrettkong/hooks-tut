import React, { useState, useEffect } from 'react';
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

const useFetchData = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      setData(data);
    };

    setLoading(true);

    setTimeout(() => {
      try {
        fetchData();
      } catch (err) {
        setError(err);
      }

      setLoading(false);
    }, 5000);
  }, []);

  return { data, loading, error };
};

const App = () => {
  const [count, setCount] = useState(0);

  const { data, loading, error } = useFetchData();

  useEffect(() => {
    window.document.title = `The current count is: ${count}`;
  }, [count]);

  if (loading) return <>loading</>;
  if (error) return <>error</>;

  return (
    <Overlay column justify="center" align="center">
      <Wrapper column justify="space-between" align="center">
        <Header>Count: {count}</Header>
        <ButtonWrapper>
          <Button onClick={() => setCount(count - 1)}>Decrement</Button>
          <Button onClick={() => setCount(count + 1)}>Increment</Button>
        </ButtonWrapper>
      </Wrapper>
    </Overlay>
  );
};

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
