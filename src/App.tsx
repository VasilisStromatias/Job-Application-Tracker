import { Button } from "@mui/material";
import { useHomeStore } from "./store";

const App = () => {

  const count = useHomeStore((state) => state.count);
  const increment = useHomeStore((state) => state.increment);
  const decrement = useHomeStore((state) => state.decrement);

  return(
    <>
      <h1>Count: {count}</h1>
      <Button variant="contained" onClick={increment}>+</Button>
      <Button variant="contained" onClick={decrement}>-</Button>
    </>
  )
}

export default App;
