import React, { useCallback, useEffect, useState } from "react";

const SimpleHabit = (props) => {
  // state = {
  //   count: 0
  // };
  const [count, setCount] = useState(0);
  const spanRef = React.useRef();

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });

  useEffect(() => {
    console.log(`updated & mounted : ${count}`);
  });
  return (
    <li className="habit">
      <span className="habit-name">Reading</span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};
export default SimpleHabit;
