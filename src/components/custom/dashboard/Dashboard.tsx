import MainNav from './components/MainNav';
import Search from './components/Search';
import TeamSwitcher from './components/TeamSwitcher';
import UserNav from './components/UserNav';

export default function Dashboard() {
  return (
    <div className='className="mx-auto dark:text-neutral-50" w-[1280px] rounded-lg border text-black dark:border-neutral-800 dark:bg-neutral-950 dark:text-white'>
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <TeamSwitcher />
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <UserNav />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
