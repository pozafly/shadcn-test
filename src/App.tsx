import { ThemeProvider } from './components/provider/ThemeProvider';
import ThemeToggler from './components/common/ThemeToggler';
import ProductInventory from './components/custom/ProductInventory';
// import { CardWithForm } from './components/custom/CardWithForm';
// import CardWithForm2 from './components/custom/CardWithForm2';
// import Authentication from './components/custom/Authentication';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="h-screen w-screen dark:bg-zinc-950">
        <ThemeToggler />

        <div className="my-40 flex items-center justify-center gap-8">
          {/* <CardWithForm />
          <CardWithForm2 /> */}
          {/* <Authentication /> */}
        </div>
        <div className="mx-auto mt-16 w-[1270px]">
          <ProductInventory />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
