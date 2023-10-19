import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { trigger } from "../../store/actions/actions";

const App = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const [rnd, setRnd] = useState(0);

  const onIncrement = useCallback(() => dispatch(trigger(1)), [dispatch]);
  const onDecrement = useCallback(() => dispatch(trigger(-1)), [dispatch]);
  const onRandomPlus = useCallback(() => dispatch(trigger(rnd)), [dispatch, rnd]);
  const onRandomMinus = useCallback(() => dispatch(trigger(-rnd)), [dispatch, rnd]);

  const generateRandomNumber = () => {
    const newRnd = Math.floor(Math.random() * 51);
    setRnd(newRnd);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrement}>INC</button>
      <button onClick={onDecrement}>DEC</button>
      <button onClick={() => { generateRandomNumber(); onRandomPlus(); }}>+RND</button>
      <button onClick={() => { generateRandomNumber(); onRandomMinus(); }}>-RND</button>
    </div>
  );
};

export default App;
