import { Button } from '@/components/ui/button';
import MainNav from './components/MainNav';
import Search from './components/Search';
import TeamSwitcher from './components/TeamSwitcher';
import UserNav from './components/UserNav';
import CalendarDateRangePicker from './components/CalendarDateRangePicker';

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
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <div className="flex items-center space-x-2">
              <CalendarDateRangePicker />
              <Button>Download</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
