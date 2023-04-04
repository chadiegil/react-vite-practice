import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "./redux/counterSlice";
import { multiplyBy2, multiplyByValue } from "./redux/multiplySlice";

const App = () => {
  const count = useSelector((state) => state.counter.value);
  const multiply = useSelector((state) => state.multiply.value);
  const dispatch = useDispatch();

  return (
    <div>
      {count}
      {multiply}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(50))}>
        add by value
      </button>
      <button onClick={() => dispatch(multiplyBy2())}>multiply by 2</button>
      <button onClick={() => dispatch(multiplyByValue(multiply))}>
        multiply by 2
      </button>
    </div>
  );
};

export default App;
