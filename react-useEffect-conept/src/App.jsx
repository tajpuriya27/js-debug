import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // UseEffect returns undefined

  // useEffect with empty array as second argument will be called only once
  // only in frist render
  let returnedbyEffect = useEffect(() => {
    setName("Name Set");
    console.log("UseEffect with empty array as second argument!");
  }, [undefined]);
  // console.log("returnedbyEffect", returnedbyEffect);

  // useEffect with no second argument will be called on every render
  // on every render
  useEffect(() => {
    console.log("UseEffect with no argument!");
  });

  // useEffect with second argument as array will be called on every render if any of the value in array is changed
  // on first render and when count is updated
  useEffect(() => {
    console.log("Count is updated");
    console.log("UseEffect with array as second argument!");
  }, [count]);
  return (
    <>
      <h1>UseEffect Concept</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;

/***********
 - use useLayoutEffect when you need to do DOM mutations before the browser paints.
 ******/
