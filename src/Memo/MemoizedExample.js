import React, { useMemo } from "react";

const MemoizedExample = () => {
  const [count, setCount] = React.useState(0);
  const [otherState, setOtherState] = React.useState("");

  const expensiveComputation = (num) => {
    let i = 0;
    while (i < 1000000000) i++;
    return num * num;
  };

  const memoizedValue = useMemo(() => expensiveComputation(count), [count]); // With Memo (Fast)
  //   const memoizedValue = expensiveComputation(count); // Without Memo (Time taking)

  return (
    <div>
      <p>Count: {count}</p>
      <p>Square: {memoizedValue}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <input
        type="text"
        onChange={(e) => setOtherState(e.target.value)}
        placeholder="Type something to check rerendering"
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default MemoizedExample;
