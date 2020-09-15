import React, { Component } from 'react';

class App extends Component {
  state = {
    data: null,
    loading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ loading: true });

    setTimeout(async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        this.setState({ data });
      } catch (error) {
        this.setState({ error });
      }
      this.setState({ loading: false });
    }, 5000);
  }

  render() {
    const { loading, error } = this.state;
    if (loading) return <>loading</>;
    if (error) return <>error</>;

    return <>done</>;
  }
}

export default App;

/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

// const useFetchData = () => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//       const data = await res.json();
//       setData(data);
//     };

//     setLoading(true);

//     setTimeout(() => {
//       try {
//         fetchData();
//       } catch (err) {
//         setError(err);
//       }

//       setLoading(false);
//     }, 5000);
//   }, []);

//   return { data, loading, error };
// };
