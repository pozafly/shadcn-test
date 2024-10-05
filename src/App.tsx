import { ThemeProvider } from './components/provider/ThemeProvider';
import ThemeToggler from './components/common/ThemeToggler';
import DashBoard from './components/custom/DashBoard';
import { CardWithForm } from './components/custom/CardWithForm';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="dark:bg-zinc-950 w-screen h-screen">
        <ThemeToggler />

        <div>
          <CardWithForm />
        </div>
        <div className="mt-16 mx-14 ">
          <DashBoard />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
