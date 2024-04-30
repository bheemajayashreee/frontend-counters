
import React, { useEffect, useContext, useCallback } from 'react';
import { BrowserRouter as useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CounterContext } from "../App";

const MyCounter = () => {
    const { state, dispatch } = useContext(CounterContext);
    const navigate = useNavigate();
  
    const fetchMyCounter = useCallback(async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/mycounter');
        dispatch({ type: 'MYSET', count:  response.data.myCount});
      } catch (err) {
        console.error(err);
      }
    }, [dispatch]);
  
    useEffect(() => {
      fetchMyCounter();
    }, [fetchMyCounter]);
  
    const incrementMyCounter = useCallback(async () => {
      try {
        await axios.post('http://localhost:5000/api/mycounter/increment');
        dispatch({ type: 'MYINCREMENT' });
      } catch (err) {
        console.error(err);
      }
    }, [dispatch]);
  
    const decrementMyCounter = useCallback(async () => {
      try {
        await axios.post('http://localhost:5000/api/mycounter/decrement');
        dispatch({ type: 'MYDECREMENT' });
      } catch (err) {
        console.error(err);
      }
    }, [dispatch]);
    return (
        <div>
          <h2>My Counter</h2>
          <p>Count: {state.myCount}</p>
          <h2>Counter</h2>
          <p>Count: {state.count}</p>
          <button onClick={incrementMyCounter}>Increment</button>
          <button onClick={decrementMyCounter}>Decrement</button>
          <button onClick={() => navigate('/')}>Go to Home</button>
        </div>
      );
    };
export default MyCounter