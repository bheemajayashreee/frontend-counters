import { CounterContext } from '../App';
import React, { useContext } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';

const Home = () => {
    const { state } = useContext(CounterContext);
  
    return (
      <div>
        <h1>Counter Value: {state.count}</h1>
        <Link to="/counter">Counter</Link>
        <h1>my Counter Value: {state.myCount}</h1>
        <Link to="/mycounter">my Counter</Link>

      </div>
    );
  };

export default Home