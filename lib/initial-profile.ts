import { auth, currentUser } from '@clerk/nextjs/server'
import { db } from '@/lib/db'

export const initialProfile = async () => {
  const user = await currentUser()

  if (!user) {
    return auth().redirectToSignIn()
  }

  const profile = await db.profile.findUnique({
    where: {
      userId: user.id,
    },
  })

  if (profile) {
    return profile
  }

  let displayName = ''
  
  if (user.username) {
    displayName = user.username
  }
  else if (user.firstName || user.lastName) {
    displayName = `${user.firstName || ''} ${user.lastName || ''}`.trim()
  }
  else if (user.emailAddresses && user.emailAddresses[0]) {
    const email = user.emailAddresses[0].emailAddress
    displayName = email.split('@')[0]
  }
  else {
    displayName = `User${user.id.slice(0, 4)}`
  }

  const newProfile = await db.profile.create({
    data: {
      userId: user.id,
      name: displayName,
      imageUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress,
    },
  })

  return newProfile
}
