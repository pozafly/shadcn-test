import { useState } from 'react';
import './App.css';
import { Button } from '@/components/ui/button';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Button onClick={() => setCount((count) => count + 1)}>Click me</Button>
      <p>You clicked {count} times</p>
    </div>
  );
}

export default App;
