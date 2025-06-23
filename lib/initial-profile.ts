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
