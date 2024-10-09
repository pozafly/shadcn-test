import TeamSwitcher from './components/TeamSwitcher';

export default function Dashboard() {
  return (
    <div className='className="mx-auto dark:text-neutral-50" w-[1280px] rounded-lg border text-black dark:border-neutral-800 dark:bg-neutral-950 dark:text-white'>
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <TeamSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
}
