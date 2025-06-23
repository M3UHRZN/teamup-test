import { currentProfile } from '@/lib/current-profile'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export default async function RootPage() {
  const profile = await currentProfile()

  if (!profile) {
    return auth().redirectToSignIn()
  }

  // Redirect authenticated users to home page
  return redirect('/home')
} 