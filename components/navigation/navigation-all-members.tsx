'use client'

import { Users } from 'lucide-react'
import { ActionTooltip } from '@/components/action-tooltip'
import { useRouter } from 'next/navigation'
import React, { useCallback } from 'react'

export const NavigationAllMembers = () => {
  const router = useRouter()

  const handleClick = useCallback(() => {
    router.push('/members')
  }, [router])

  return (
    <div>
      <ActionTooltip side='right' align='center' label='All Members'>
        <button onClick={handleClick} className='group flex items-center'>
          <div className='flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-slate-100 dark:bg-neutral-700 group-hover:bg-indigo-500'>
            <Users
              className='group-hover:text-white transition text-indigo-500'
              size={25}
            />
          </div>
        </button>
      </ActionTooltip>
    </div>
  )
} 