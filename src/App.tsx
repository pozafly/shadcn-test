import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ThemeProvider } from './components/provider/ThemeProvider';
import ThemeToggler from './components/custom/ThemeToggler';

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="dark:bg-zinc-950 w-screen h-screen">
        <ThemeToggler />

        <div className="mt-16">
          <Button onClick={() => setCount((count) => count + 1)}>
            Click me
          </Button>
          <p>You clicked {count} times</p>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
