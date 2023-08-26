import { useCallback, useEffect, useRef, useState } from "react";

interface User {
  id: number,
  username: string;
}

function App() {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);

  const inputRef = useRef<HTMLInputElement>(null)

  console.log(inputRef?.current)
  console.log(inputRef?.current?.value);

  useEffect(() => {
    console.log('mounting');
    console.log('Users: ', users);

    return () => console.log('unmounting')
  }, [users]);

  const addTwo = useCallback(() => {
    setCount(prev => prev + 2)
  } ,[])



  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={addTwo}>Add</button>
      <input ref={inputRef} type="text" />
    </div>
  );
}

export default App;
