import { ThemeProvider } from './components/provider/ThemeProvider';
import Dashboard from './components/custom/dashboard/Dashboard';
import ThemeDropdown from './components/common/ThemeDropdown';
import ThemeToggler from './components/common/ThemeToggler';
// import { CardWithForm } from './components/custom/CardWithForm';
// import CardWithForm2 from './components/custom/CardWithForm2';
// import Authentication from './components/custom/Authentication';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="h-full min-h-screen dark:bg-zinc-950">
        <div className="fixed left-0 top-0 flex w-full items-center justify-between px-8 py-4">
          <ThemeToggler />
          <ThemeDropdown />
        </div>

        {/* <div className="my-40 flex items-center justify-center gap-8"> */}
        {/* <CardWithForm />
          <CardWithForm2 /> */}
        {/* <Authentication /> */}
        {/* </div> */}
        <div className="mx-auto w-[1270px] pt-16">
          <Dashboard />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
