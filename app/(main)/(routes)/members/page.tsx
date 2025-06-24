import { currentProfile } from '@/lib/current-profile'
import { db } from '@/lib/db'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { NavigationSidebar } from '@/components/navigation/navigation-sidebar'
import { UserAvatar } from '@/components/user-avatar'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Search, Users, Calendar, Mail, MapPin } from 'lucide-react'

const MembersPage = async () => {
  const profile = await currentProfile()

  if (!profile) {
    return auth().redirectToSignIn()
  }

  // Get all registered users
  const allMembers = await db.profile.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })

  return (
    <div className='h-full flex bg-black'>
      <div className='hidden md:flex h-full w-[72px] z-50 flex-col fixed inset-y-0'>
        <NavigationSidebar />
      </div>
      <main className='flex-1 md:pl-[72px] min-h-screen overflow-y-auto relative'>
        {/* Animated Background */}
        <div className='absolute inset-0 -z-10 pointer-events-none'>
          {/* Animated gradient background */}
          <div className='absolute inset-0 bg-gradient-to-br from-black via-indigo-900 via-purple-900 to-blue-900 animate-pulse'></div>
          
          {/* Floating particles background */}
          <div className='absolute inset-0 overflow-hidden'>
            {/* Particle grid */}
            <div className='absolute top-0 left-0 w-full h-full'>
              {[...Array(30)].map((_, i) => (
                <div
                  key={i}
                  className='absolute w-1 h-1 bg-purple-400 rounded-full opacity-20'
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `float ${6 + Math.random() * 4}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
            
            {/* Larger floating elements */}
            <div className='absolute top-0 left-0 w-full h-full'>
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className='absolute w-2 h-2 bg-indigo-400 rounded-full opacity-15'
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `diagonal-move ${20 + Math.random() * 10}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 5}s`
                  }}
                />
              ))}
            </div>
          </div>
          
          {/* Animated mesh gradient */}
          <div className='absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 animate-pulse'></div>
          
          {/* Glowing orbs */}
          <div className='absolute inset-0'>
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className='absolute rounded-full blur-sm'
                style={{
                  width: `${80 + i * 40}px`,
                  height: `${80 + i * 40}px`,
                  left: `${10 + i * 15}%`,
                  top: `${20 + i * 10}%`,
                  background: `radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)`,
                  animation: `pulse-glow ${3 + i}s ease-in-out infinite`,
                  animationDelay: `${i * 0.8}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className='relative z-10 p-8'>
          {/* Header */}
          <div className='max-w-7xl mx-auto'>
            <div className='flex items-center gap-4 mb-8'>
              <div className='p-3 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl'>
                <Users className='h-8 w-8 text-white' />
              </div>
              <div>
                <h1 className='text-4xl font-bold text-white'>All Members</h1>
                <p className='text-purple-200'>Discover and connect with all registered users</p>
              </div>
            </div>

            {/* Stats */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
              <Card className='bg-gradient-to-br from-indigo-900/80 via-purple-900/80 to-blue-800/80 border border-purple-400/30 backdrop-blur-sm'>
                <CardContent className='p-6'>
                  <div className='flex items-center gap-4'>
                    <div className='p-2 bg-indigo-500 rounded-lg'>
                      <Users className='h-6 w-6 text-white' />
                    </div>
                    <div>
                      <p className='text-2xl font-bold text-white'>{allMembers.length}</p>
                      <p className='text-purple-200'>Total Members</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className='bg-gradient-to-br from-purple-900/80 via-indigo-800/80 to-blue-700/80 border border-purple-400/30 backdrop-blur-sm'>
                <CardContent className='p-6'>
                  <div className='flex items-center gap-4'>
                    <div className='p-2 bg-purple-500 rounded-lg'>
                      <Calendar className='h-6 w-6 text-white' />
                    </div>
                    <div>
                      <p className='text-2xl font-bold text-white'>
                        {allMembers.filter(member => {
                          const daysSinceCreated = Math.floor((Date.now() - new Date(member.createdAt).getTime()) / (1000 * 60 * 60 * 24))
                          return daysSinceCreated <= 7
                        }).length}
                      </p>
                      <p className='text-purple-200'>New This Week</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className='bg-gradient-to-br from-blue-800/80 via-purple-900/80 to-indigo-700/80 border border-purple-400/30 backdrop-blur-sm'>
                <CardContent className='p-6'>
                  <div className='flex items-center gap-4'>
                    <div className='p-2 bg-blue-500 rounded-lg'>
                      <Mail className='h-6 w-6 text-white' />
                    </div>
                    <div>
                      <p className='text-2xl font-bold text-white'>
                        {allMembers.filter(member => member.email).length}
                      </p>
                      <p className='text-purple-200'>With Email</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Search */}
            <div className='relative mb-8'>
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 h-5 w-5' />
              <Input
                placeholder='Search members by name or email...'
                className='pl-10 bg-gradient-to-br from-indigo-900/80 via-purple-900/80 to-blue-800/80 border border-purple-400/30 backdrop-blur-sm text-white placeholder:text-purple-300 focus:border-purple-400'
              />
            </div>

            {/* Members Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
              {allMembers.map((member) => (
                <Card key={member.id} className='bg-gradient-to-br from-indigo-900/80 via-purple-900/80 to-blue-800/80 border border-purple-400/30 backdrop-blur-sm hover:border-purple-400/60 transition-all hover:scale-105'>
                  <CardHeader className='pb-4'>
                    <div className='flex items-center gap-4'>
                      <UserAvatar
                        src={member.imageUrl}
                        className='h-12 w-12'
                      />
                      <div className='flex-1 min-w-0'>
                        <CardTitle className='text-white truncate'>{member.name}</CardTitle>
                        <CardDescription className='text-purple-200 truncate'>
                          {member.email}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className='pt-0'>
                    <div className='space-y-3'>
                      <div className='flex items-center gap-2 text-sm text-purple-200'>
                        <Calendar className='h-4 w-4' />
                        <span>Joined {new Date(member.createdAt).toLocaleDateString()}</span>
                      </div>
                      
                      <div className='flex items-center gap-2'>
                        <Badge variant='secondary' className='bg-purple-500/20 text-purple-200 border-purple-400/30'>
                          Member
                        </Badge>
                        {member.id === profile.id && (
                          <Badge variant='default' className='bg-indigo-500/20 text-indigo-200 border-indigo-400/30'>
                            You
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Empty State */}
            {allMembers.length === 0 && (
              <div className='text-center py-12'>
                <Users className='h-16 w-16 text-purple-400 mx-auto mb-4' />
                <h3 className='text-xl font-semibold text-white mb-2'>No Members Found</h3>
                <p className='text-purple-200'>Be the first to join TeamUp!</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default MembersPage 