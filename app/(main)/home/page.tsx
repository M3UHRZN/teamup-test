import { NavigationSidebar } from '@/components/navigation/navigation-sidebar'

export default function HomePage() {
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
          
          {/* Moving wave patterns */}
          <svg width='100%' height='100%' viewBox='0 0 1440 900' fill='none' xmlns='http://www.w3.org/2000/svg' className='absolute inset-0'>
            <path fill='#1e1b4b' fillOpacity='0.3' d='M0,200 Q360,150 720,200 T1440,200 L1440,900 L0,900 Z' className='animate-pulse'>
              <animate attributeName='d' dur='8s' repeatCount='indefinite' values='M0,200 Q360,150 720,200 T1440,200 L1440,900 L0,900 Z;M0,250 Q360,200 720,250 T1440,250 L1440,900 L0,900 Z;M0,200 Q360,150 720,200 T1440,200 L1440,900 L0,900 Z'/>
            </path>
            <path fill='#312e81' fillOpacity='0.2' d='M0,300 Q480,250 960,300 T1920,300 L1920,900 L0,900 Z' className='animate-pulse'>
              <animate attributeName='d' dur='12s' repeatCount='indefinite' values='M0,300 Q480,250 960,300 T1920,300 L1920,900 L0,900 Z;M0,350 Q480,300 960,350 T1920,350 L1920,900 L0,900 Z;M0,300 Q480,250 960,300 T1920,300 L1920,900 L0,900 Z'/>
            </path>
          </svg>
          
          {/* Floating particles background */}
          <div className='absolute inset-0 overflow-hidden'>
            {/* Particle grid */}
            <div className='absolute top-0 left-0 w-full h-full'>
              {[...Array(50)].map((_, i) => (
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
              {[...Array(20)].map((_, i) => (
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
          
          {/* Moving light rays */}
          <div className='absolute inset-0 overflow-hidden'>
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className='absolute w-px h-full bg-gradient-to-b from-transparent via-purple-400/30 to-transparent'
                style={{
                  left: `${(i * 12.5) + Math.random() * 10}%`,
                  animation: `slide-up ${15 + Math.random() * 10}s linear infinite`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              />
            ))}
          </div>
          
          {/* Animated circles */}
          <div className='absolute inset-0 overflow-hidden'>
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className='absolute rounded-full border border-purple-400/20'
                style={{
                  width: `${100 + i * 50}px`,
                  height: `${100 + i * 50}px`,
                  left: `${20 + i * 10}%`,
                  top: `${30 + i * 5}%`,
                  animation: `pulse ${4 + i}s ease-in-out infinite`,
                  animationDelay: `${i * 0.5}s`
                }}
              />
            ))}
          </div>
          
          {/* Moving dots pattern */}
          <div className='absolute inset-0'>
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className='absolute w-1 h-1 bg-blue-400 rounded-full opacity-30'
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `slide-left ${10 + Math.random() * 15}s linear infinite`,
                  animationDelay: `${Math.random() * 10}s`
                }}
              />
            ))}
          </div>
          
          {/* Animated grid */}
          <div className='absolute inset-0 opacity-10'>
            <svg width='100%' height='100%' viewBox='0 0 100 100' preserveAspectRatio='none'>
              <defs>
                <pattern id='grid' width='10' height='10' patternUnits='userSpaceOnUse'>
                  <path d='M 10 0 L 0 0 0 10' fill='none' stroke='#6366f1' strokeWidth='0.5'/>
                </pattern>
              </defs>
              <rect width='100%' height='100%' fill='url(#grid)' className='animate-pulse'/>
            </svg>
          </div>
          
          {/* Glowing orbs */}
          <div className='absolute inset-0'>
            {[...Array(5)].map((_, i) => (
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
        
        {/* MOVING COMMUNICATION ICONS */}
        <div className='absolute inset-0 -z-5 pointer-events-none'>
          {/* Chat Bubble Icons */}
          <svg width='60' height='50' className='absolute right-20 top-20 opacity-40 float-animation' fill='none'>
            <path d='M10,10 L50,10 L50,30 L35,30 L30,40 L25,30 L10,30 Z' fill='#8b5cf6' />
            <circle cx='20' cy='20' r='2' fill='#6366f1' />
            <circle cx='30' cy='20' r='2' fill='#6366f1' />
            <circle cx='40' cy='20' r='2' fill='#6366f1' />
          </svg>
          
          <svg width='50' height='40' className='absolute left-16 top-32 opacity-30 slide-left' fill='none'>
            <path d='M8,8 L42,8 L42,25 L30,25 L25,32 L20,25 L8,25 Z' fill='#6366f1' />
            <circle cx='18' cy='16' r='1.5' fill='#8b5cf6' />
            <circle cx='25' cy='16' r='1.5' fill='#8b5cf6' />
            <circle cx='32' cy='16' r='1.5' fill='#8b5cf6' />
          </svg>
          
          {/* Message Icons */}
          <svg width='70' height='60' className='absolute right-1/3 top-1/4 opacity-25 slide-right' fill='none'>
            <rect x='10' y='10' width='50' height='35' rx='5' fill='#a855f7' />
            <polygon points='15,45 25,35 35,45' fill='#a855f7' />
            <circle cx='20' cy='20' r='2' fill='#6366f1' />
            <circle cx='30' cy='20' r='2' fill='#6366f1' />
            <circle cx='40' cy='20' r='2' fill='#6366f1' />
            <circle cx='20' cy='30' r='2' fill='#6366f1' />
            <circle cx='30' cy='30' r='2' fill='#6366f1' />
          </svg>
          
          {/* User Icons */}
          <svg width='50' height='60' className='absolute left-1/4 bottom-1/3 opacity-30 diagonal-move' fill='none'>
            <circle cx='25' cy='15' r='10' fill='#7c3aed' />
            <path d='M10,50 Q25,35 40,50' fill='#8b5cf6' />
            <circle cx='20' cy='25' r='1.5' fill='#6366f1' />
            <circle cx='30' cy='25' r='1.5' fill='#6366f1' />
          </svg>
          
          <svg width='45' height='55' className='absolute right-1/4 bottom-1/4 opacity-25 slide-up' fill='none'>
            <circle cx='22.5' cy='13' r='9' fill='#4f46e5' />
            <path d='M9,47 Q22.5,32 36,47' fill='#6366f1' />
            <circle cx='18' cy='22' r='1.5' fill='#8b5cf6' />
            <circle cx='27' cy='22' r='1.5' fill='#8b5cf6' />
          </svg>
          
          {/* Voice Call Icons */}
          <svg width='60' height='60' className='absolute left-1/3 top-1/2 opacity-20 float-animation' fill='none'>
            <circle cx='30' cy='30' r='25' fill='#3730a3' fillOpacity='0.6' />
            <circle cx='30' cy='30' r='15' fill='#4f46e5' fillOpacity='0.8' />
            <path d='M25,20 L35,20 L35,40 L25,40 Z' fill='#6366f1' />
            <path d='M20,25 L25,25 L25,35 L20,35 Z' fill='#6366f1' />
            <path d='M35,25 L40,25 L40,35 L35,35 Z' fill='#6366f1' />
          </svg>
          
          {/* Video Call Icons */}
          <svg width='70' height='50' className='absolute right-1/5 top-1/3 opacity-15 slide-down' fill='none'>
            <rect x='10' y='10' width='50' height='30' rx='5' fill='#312e81' />
            <circle cx='25' cy='25' r='8' fill='#4f46e5' />
            <circle cx='45' cy='25' r='5' fill='#6366f1' />
            <path d='M20,20 L30,25 L20,30 Z' fill='#8b5cf6' />
          </svg>
          
          {/* Server/Network Icons */}
          <svg width='80' height='60' className='absolute left-1/5 bottom-1/5 opacity-30 diagonal-move' fill='none'>
            <rect x='10' y='10' width='60' height='40' rx='5' fill='#5b21b6' />
            <rect x='15' y='15' width='15' height='10' rx='2' fill='#7c3aed' />
            <rect x='35' y='15' width='15' height='10' rx='2' fill='#7c3aed' />
            <rect x='15' y='30' width='15' height='10' rx='2' fill='#7c3aed' />
            <rect x='35' y='30' width='15' height='10' rx='2' fill='#7c3aed' />
            <circle cx='25' cy='20' r='1' fill='#8b5cf6' />
            <circle cx='45' cy='20' r='1' fill='#8b5cf6' />
            <circle cx='25' cy='35' r='1' fill='#8b5cf6' />
            <circle cx='45' cy='35' r='1' fill='#8b5cf6' />
          </svg>
          
          {/* Notification Icons */}
          <svg width='50' height='60' className='absolute right-1/3 bottom-1/3 opacity-20 slide-left' fill='none'>
            <path d='M25,5 L30,15 L40,15 L32,22 L35,35 L25,30 L15,35 L18,22 L10,15 L20,15 Z' fill='#4338ca' />
            <circle cx='25' cy='25' r='3' fill='#6366f1' />
          </svg>
          
          {/* File Upload Icons */}
          <svg width='60' height='70' className='absolute left-1/2 top-1/2 -translate-x-1/2 opacity-10 slide-right' fill='none'>
            <path d='M15,10 L35,10 L40,20 L40,55 L15,55 Z' fill='#a855f7' />
            <path d='M15,10 L40,10 L40,20 L35,15 Z' fill='#8b5cf6' />
            <rect x='20' y='25' width='20' height='2' rx='1' fill='#6366f1' />
            <rect x='20' y='30' width='15' height='2' rx='1' fill='#6366f1' />
            <rect x='20' y='35' width='18' height='2' rx='1' fill='#6366f1' />
            <rect x='20' y='40' width='12' height='2' rx='1' fill='#6366f1' />
          </svg>
          
          {/* Group Chat Icons */}
          <svg width='80' height='60' className='absolute right-1/6 top-1/2 opacity-15 float-animation' fill='none'>
            <circle cx='20' cy='20' r='12' fill='#7c3aed' fillOpacity='0.3' />
            <circle cx='40' cy='20' r='12' fill='#8b5cf6' fillOpacity='0.3' />
            <circle cx='30' cy='35' r='12' fill='#6366f1' fillOpacity='0.3' />
            <circle cx='18' cy='18' r='8' fill='#7c3aed' />
            <circle cx='38' cy='18' r='8' fill='#8b5cf6' />
            <circle cx='28' cy='33' r='8' fill='#6366f1' />
          </svg>
          
          {/* Settings Icons */}
          <svg width='60' height='60' className='absolute left-1/6 top-1/4 opacity-25 slide-up' fill='none'>
            <circle cx='30' cy='30' r='25' fill='#4f46e5' fillOpacity='0.4' />
            <circle cx='30' cy='30' r='15' fill='#6366f1' fillOpacity='0.6' />
            <circle cx='30' cy='30' r='8' fill='#8b5cf6' />
            <path d='M30,5 L32,15 L28,15 Z' fill='#6366f1' />
            <path d='M30,55 L32,45 L28,45 Z' fill='#6366f1' />
            <path d='M5,30 L15,32 L15,28 Z' fill='#6366f1' />
            <path d='M55,30 L45,32 L45,28 Z' fill='#6366f1' />
            <path d='M12,12 L20,20 L18,22 L10,14 Z' fill='#6366f1' />
            <path d='M48,48 L40,40 L42,38 L50,46 Z' fill='#6366f1' />
            <path d='M48,12 L40,20 L42,22 L50,14 Z' fill='#6366f1' />
            <path d='M12,48 L20,40 L18,38 L10,46 Z' fill='#6366f1' />
          </svg>
          
          {/* Security Icons */}
          <svg width='50' height='60' className='absolute right-1/4 top-1/2 opacity-20 diagonal-move' fill='none'>
            <path d='M25,5 L30,15 L40,15 L32,22 L35,35 L25,30 L15,35 L18,22 L10,15 L20,15 Z' fill='#6366f1' fillOpacity='0.5' />
            <rect x='20' y='25' width='10' height='15' rx='2' fill='#4f46e5' />
            <circle cx='25' cy='30' r='2' fill='#8b5cf6' />
            <rect x='23' y='35' width='4' height='3' rx='1' fill='#8b5cf6' />
          </svg>
          
          {/* Connection Lines */}
          <svg width='120' height='4' className='absolute top-1/5 left-1/4 opacity-20 slide-up' fill='none'>
            <rect x='0' y='0' width='120' height='4' rx='2' fill='#8b5cf6' />
            <circle cx='10' cy='2' r='2' fill='#6366f1' />
            <circle cx='110' cy='2' r='2' fill='#6366f1' />
          </svg>
          
          <svg width='100' height='3' className='absolute bottom-1/5 right-1/4 opacity-15 slide-down' fill='none'>
            <rect x='0' y='0' width='100' height='3' rx='1.5' fill='#6366f1' />
            <circle cx='5' cy='1.5' r='1.5' fill='#8b5cf6' />
            <circle cx='95' cy='1.5' r='1.5' fill='#8b5cf6' />
          </svg>
          
          {/* Data Flow Icons */}
          <svg width='80' height='20' className='absolute top-1/6 right-1/6 opacity-20 float-animation' fill='none'>
            <circle cx='10' cy='10' r='3' fill='#a855f7' />
            <circle cx='30' cy='10' r='3' fill='#8b5cf6' />
            <circle cx='50' cy='10' r='3' fill='#6366f1' />
            <circle cx='70' cy='10' r='3' fill='#4f46e5' />
            <path d='M13,10 L27,10' stroke='#8b5cf6' strokeWidth='2' />
            <path d='M33,10 L47,10' stroke='#6366f1' strokeWidth='2' />
            <path d='M53,10 L67,10' stroke='#4f46e5' strokeWidth='2' />
          </svg>
          
          {/* Status Indicators */}
          <div className='absolute top-1/4 left-1/3 w-3 h-3 bg-green-400 rounded-full opacity-30 slide-left'></div>
          <div className='absolute top-1/3 right-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-25 slide-right'></div>
          <div className='absolute bottom-1/3 left-1/4 w-4 h-4 bg-purple-400 rounded-full opacity-20 float-animation'></div>
          <div className='absolute bottom-1/4 right-1/3 w-2 h-2 bg-indigo-400 rounded-full opacity-30 diagonal-move'></div>
          
          {/* Glowing pulse effects */}
          <div className='absolute top-1/5 left-1/5 w-6 h-6 bg-purple-400 rounded-full opacity-20 pulse-glow'></div>
          <div className='absolute bottom-1/5 right-1/5 w-5 h-5 bg-indigo-400 rounded-full opacity-15 pulse-glow'></div>
          <div className='absolute top-1/2 left-1/2 w-4 h-4 bg-blue-400 rounded-full opacity-25 pulse-glow'></div>
        </div>
        
        {/* HERO */}
        <section className='max-w-4xl w-full mx-auto p-10 rounded-3xl shadow-2xl bg-gradient-to-br from-indigo-900/80 via-purple-900/80 to-blue-800/80 border border-purple-400/30 mt-20 mb-16 flex flex-col items-center backdrop-blur-sm'>
          <h1 className='text-6xl font-extrabold text-white mb-4 text-center drop-shadow-xl animate-fade-in'>TeamUp</h1>
          <h2 className='text-3xl font-semibold text-purple-200 mb-8 text-center animate-slide-up-soft'>Empower Your Community: Modern, Secure, and Dynamic Chat Platform</h2>
          <a
            className='px-10 py-4 rounded-full bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-700 text-white font-bold text-2xl shadow-xl hover:scale-105 hover:from-purple-800 hover:to-blue-800 transition animate-scale-in-soft mb-6'
            href='/sign-in'
          >
            Get Started
          </a>
          <span className='text-purple-100 text-lg animate-fade-in mb-4'>Bring your social community together with TeamUp!</span>
          {/* Statistics */}
          <div className='flex flex-wrap justify-center gap-10 mb-8 mt-6'>
            <div className='flex flex-col items-center animate-scale-in-soft bg-gradient-to-br from-indigo-800/90 via-purple-900/90 to-blue-700/90 rounded-xl px-8 py-4 shadow-lg backdrop-blur-sm'>
              <span className='text-5xl font-bold text-white'>12,000+</span>
              <span className='text-purple-200 text-lg'>Active Users</span>
            </div>
            <div className='flex flex-col items-center animate-scale-in-soft bg-gradient-to-br from-purple-900/90 via-indigo-800/90 to-blue-800/90 rounded-xl px-8 py-4 shadow-lg backdrop-blur-sm'>
              <span className='text-5xl font-bold text-white'>1,500+</span>
              <span className='text-purple-200 text-lg'>Servers</span>
            </div>
            <div className='flex flex-col items-center animate-scale-in-soft bg-gradient-to-br from-blue-800/90 via-purple-900/90 to-indigo-700/90 rounded-xl px-8 py-4 shadow-lg backdrop-blur-sm'>
              <span className='text-5xl font-bold text-white'>250,000+</span>
              <span className='text-purple-200 text-lg'>Messages</span>
            </div>
            <div className='flex flex-col items-center animate-scale-in-soft bg-gradient-to-br from-indigo-900/90 via-purple-800/90 to-blue-700/90 rounded-xl px-8 py-4 shadow-lg backdrop-blur-sm'>
              <span className='text-5xl font-bold text-white'>99.9%</span>
              <span className='text-purple-200 text-lg'>Uptime</span>
            </div>
          </div>
        </section>
        {/* Featured Features */}
        <section className='max-w-5xl w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
          <div className='flex flex-col items-center bg-gradient-to-br from-indigo-900/80 via-purple-900/80 to-blue-800/80 rounded-2xl p-8 shadow-xl hover:scale-105 transition backdrop-blur-sm'>
            <span className='text-4xl mb-3 bg-gradient-to-br from-purple-500 to-indigo-600 text-white rounded-full p-3 shadow-lg'>💬</span>
            <h3 className='text-xl font-bold text-white mb-2'>Real-Time Messaging</h3>
            <p className='text-purple-100 text-center'>Instant, fast, and secure chat experience. Modern chat interface and notifications.</p>
          </div>
          <div className='flex flex-col items-center bg-gradient-to-br from-purple-900/80 via-indigo-800/80 to-blue-700/80 rounded-2xl p-8 shadow-xl hover:scale-105 transition backdrop-blur-sm'>
            <span className='text-4xl mb-3 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-full p-3 shadow-lg'>🔊</span>
            <h3 className='text-xl font-bold text-white mb-2'>Voice & Video Rooms</h3>
            <p className='text-purple-100 text-center'>Connect instantly with your community. High quality with LiveKit integration.</p>
          </div>
          <div className='flex flex-col items-center bg-gradient-to-br from-blue-800/80 via-purple-900/80 to-indigo-700/80 rounded-2xl p-8 shadow-xl hover:scale-105 transition backdrop-blur-sm'>
            <span className='text-4xl mb-3 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full p-3 shadow-lg'>🔒</span>
            <h3 className='text-xl font-bold text-white mb-2'>Advanced Security</h3>
            <p className='text-purple-100 text-center'>Clerk authentication, secure login and management. Role and permission system.</p>
          </div>
          <div className='flex flex-col items-center bg-gradient-to-br from-indigo-900/80 via-purple-800/80 to-blue-700/80 rounded-2xl p-8 shadow-xl hover:scale-105 transition backdrop-blur-sm'>
            <span className='text-4xl mb-3 bg-gradient-to-br from-purple-500 to-indigo-600 text-white rounded-full p-3 shadow-lg'>⚡</span>
            <h3 className='text-xl font-bold text-white mb-2'>Fast & Modern Interface</h3>
            <p className='text-purple-100 text-center'>Responsive, animated, and user-friendly design. Dark mode support.</p>
          </div>
          <div className='flex flex-col items-center bg-gradient-to-br from-purple-900/80 via-indigo-800/80 to-blue-800/80 rounded-2xl p-8 shadow-xl hover:scale-105 transition backdrop-blur-sm'>
            <span className='text-4xl mb-3 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-full p-3 shadow-lg'>🌐</span>
            <h3 className='text-xl font-bold text-white mb-2'>Server & Channel Management</h3>
            <p className='text-purple-100 text-center'>Create your own community, build text/voice/video channels, invite members.</p>
          </div>
          <div className='flex flex-col items-center bg-gradient-to-br from-blue-800/80 via-purple-900/80 to-indigo-700/80 rounded-2xl p-8 shadow-xl hover:scale-105 transition backdrop-blur-sm'>
            <span className='text-4xl mb-3 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full p-3 shadow-lg'>📁</span>
            <h3 className='text-xl font-bold text-white mb-2'>File Sharing</h3>
            <p className='text-purple-100 text-center'>Easily share files, images, and media. Drag and drop support.</p>
          </div>
        </section>
        {/* Footer */}
        <footer className='w-full flex flex-col items-center py-10 mt-8 bg-gradient-to-t from-black/80 via-indigo-900/60 to-transparent backdrop-blur-sm'>
          <div className='flex gap-8 mb-3'>
            <span className='text-purple-200 animate-pulse'>© 2024 TeamUp</span>
            <span className='text-purple-200 animate-pulse'>Social Chat & Voice Platform</span>
          </div>
          <div className='flex gap-4'>
            <a href='https://github.com/metin-teamup' target='_blank' rel='noopener noreferrer' className='text-purple-400 hover:text-white transition'>GitHub</a>
            <a href='mailto:info@teamup.com' className='text-purple-400 hover:text-white transition'>Contact</a>
          </div>
          <svg width='120' height='24' className='animate-bounce mt-4' fill='none'>
            <ellipse cx='60' cy='12' rx='50' ry='8' fill='#8b5cf6' fillOpacity='0.3' />
          </svg>
        </footer>
      </main>
    </div>
  )
} 