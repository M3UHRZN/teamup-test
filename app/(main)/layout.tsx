import { NavigationSidebar } from '@/components/navigation/navigation-sidebar'

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-full'>
      <div className='invisible md:visible md:flex h-full w-[72px] z-50 flex-col fixed inset-y-0 '>
        <NavigationSidebar />
      </div>
      <main className='md:pl-[72px] h-full bg-none'>{children}</main>
    </div>
  )
}

export default MainLayout
