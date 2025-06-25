import { currentProfile } from '@/lib/current-profile'
import { db } from '@/lib/db'
import { redirect } from 'next/navigation'
import { NavigationAction } from './navigation-action'
import { NavigationAllMembers } from './navigation-all-members'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'
import { NavigationItem } from './navigation-item'
import { ModeToggle } from '@/components/mode-toggle'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { ActionTooltip } from '@/components/action-tooltip'
import { LayoutDashboard } from 'lucide-react'

export const NavigationSidebar = async () => {
  const profile = await currentProfile()

  if (!profile) {
    return redirect('/')
  }

  const servers = await db.server.findMany({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  })

  return (
    <div className='z-50 space-y-4 flex flex-col items-center h-full text-primary w-full py-3 sidebar-bg'>
      {/* TeamUp Home Button */}
      <ActionTooltip side='right' align='center' label='Go to TeamUp Home'>
        <Link href='/home' className='group flex items-center mb-2'>
          <div className='flex mx-3 h-[48px] w-[48px] rounded-full transition-all overflow-hidden items-center justify-center bg-gradient-to-br from-[#9d8eda] via-[#6676c5] to-[#5d41d6] shadow-lg border-2 border-primary hover:scale-105'>
            <LayoutDashboard className='h-6 w-6 text-primary-foreground' />
          </div>
        </Link>
      </ActionTooltip>
      <NavigationAction />
      <NavigationAllMembers />
      <Separator className='h-[2px] bg-blue-800 dark:bg-zinc-700 rounded-md w-12 mx-auto' />
      <ScrollArea className='flex-1 w-full'>
        {servers.map((server) => (
          <div className='mb-4' key={server.id}>
            <NavigationItem
              id={server.id}
              name={server.name}
              imageUrl={server.imageUrl}
            />
          </div>
        ))}
      </ScrollArea>
      <div className='pb-3 mt-auto flex items-center flex-col gap-y-4'>
        <ModeToggle />
        <UserButton
          appearance={{
            elements: {
              avatarBox: 'h-[48px] w-[48px]',
              userButtonPopoverCard: 'pointer-events-auto',
            },
          }}
        />
      </div>
    </div>
  )
}
