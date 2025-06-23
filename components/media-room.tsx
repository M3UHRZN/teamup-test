'use client'

import { useState, useEffect } from 'react'
import { LiveKitRoom, VideoConference } from '@livekit/components-react'
import '@livekit/components-styles'
import { Channel } from '@prisma/client'
import { useUser } from '@clerk/nextjs'
import { Loader2 } from 'lucide-react'

interface MediaRoomProps {
  chatId: string
  video: boolean
  audio: boolean
}

export const MediaRoom = ({ chatId, video, audio }: MediaRoomProps) => {
  const { user } = useUser()
  const [token, setToken] = useState('')

  useEffect(() => {
    if (!user) return

    // Kullanıcı adını belirleme mantığı
    let displayName = ''
    
    // 1. Önce username'i kontrol et (Clerk'te kullanıcının belirlediği)
    if (user.username) {
      displayName = user.username
    }
    // 2. Username yoksa firstName + lastName'i kontrol et
    else if (user.firstName || user.lastName) {
      displayName = `${user.firstName || ''} ${user.lastName || ''}`.trim()
    }
    // 3. Hiçbiri yoksa email'in @ öncesi kısmını kullan
    else if (user.emailAddresses && user.emailAddresses[0]) {
      const email = user.emailAddresses[0].emailAddress
      displayName = email.split('@')[0] // @ öncesi kısmı al
    }
    // 4. Son çare olarak "User" + userId'nin ilk 4 karakteri
    else {
      displayName = `User${user.id.slice(0, 4)}`
    }

    // Eğer hala boşsa token almayı dene
    if (!displayName) return

    const fetchToken = async () => {
      try {
        const resp = await fetch(`/api/livekit?room=${chatId}&username=${encodeURIComponent(displayName)}`)
        const data = await resp.json()
        setToken(data.token)
      } catch (error) {
        console.log(error)
      }
    }

    fetchToken()
  }, [user, chatId])

  if (token === '') {
    return (
      <div className='flex flex-col flex-1 justify-center items-center'>
        <Loader2 className='h-7 w-7 text-zinc-500 animate-spin my-4' />
        <p className='text-xs text-zinc-500 dark:text-zinc-400'>Loading...</p>
      </div>
    )
  }

  return (
    <LiveKitRoom
      data-lk-theme='default'
      serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
      token={token}
      connect={true}
      video={video}
      audio={audio}
    >
      <VideoConference />
    </LiveKitRoom>
  )
}
