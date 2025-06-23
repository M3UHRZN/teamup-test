import { NavigationSidebar } from '@/components/navigation/navigation-sidebar'

export default function HomePage() {
  return (
    <div className='h-full flex bg-black'>
      <div className='hidden md:flex h-full w-[72px] z-50 flex-col fixed inset-y-0'>
        <NavigationSidebar />
      </div>
      <main className='flex-1 md:pl-[72px] min-h-screen bg-gradient-to-br from-black via-indigo-900 via-purple-900 to-blue-900 overflow-y-auto relative'>
        {/* Arka plan motifleri */}
        <div className='absolute inset-0 -z-10 pointer-events-none'>
          {/* Büyük dalga SVG */}
          <svg width='100%' height='340' viewBox='0 0 1440 320' fill='none' xmlns='http://www.w3.org/2000/svg' className='absolute top-0 left-0'>
            <path fill='#1e1b4b' fillOpacity='0.8' d='M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z'></path>
          </svg>
          
          {/* HAREKETLİ İKONLAR VE ŞEKİLLER */}
          
          {/* Yıldız ikonları - farklı hızlarda hareket */}
          <svg width='60' height='60' className='absolute right-20 top-20 opacity-40 animate-ping' fill='none'>
            <polygon points='30,5 35,25 55,25 40,40 45,60 30,50 15,60 20,40 5,25 25,25' fill='#8b5cf6' />
          </svg>
          <svg width='40' height='40' className='absolute left-16 top-32 opacity-30 animate-pulse' fill='none'>
            <polygon points='20,3 23,17 37,17 27,27 30,40 20,33 10,40 13,27 3,17 17,17' fill='#6366f1' />
          </svg>
          <svg width='80' height='80' className='absolute right-1/3 top-1/4 opacity-25 animate-bounce' fill='none'>
            <polygon points='40,7 47,30 73,30 53,47 60,73 40,60 20,73 27,47 7,30 33,30' fill='#a855f7' />
          </svg>
          
          {/* Daire ikonları - dönen ve büyüyen */}
          <svg width='100' height='100' className='absolute left-1/4 bottom-1/3 opacity-30 animate-spin' fill='none'>
            <circle cx='50' cy='50' r='45' stroke='#7c3aed' strokeWidth='8' />
            <circle cx='50' cy='50' r='30' fill='#8b5cf6' fillOpacity='0.6' />
          </svg>
          <svg width='70' height='70' className='absolute right-1/4 bottom-1/4 opacity-25 animate-pulse' fill='none'>
            <circle cx='35' cy='35' r='30' fill='#4f46e5' fillOpacity='0.4' />
            <circle cx='35' cy='35' r='20' fill='#6366f1' fillOpacity='0.7' />
          </svg>
          
          {/* Kare ve dikdörtgen ikonları */}
          <svg width='50' height='50' className='absolute left-1/3 top-1/2 opacity-20 animate-bounce' fill='none'>
            <rect x='5' y='5' width='40' height='40' rx='8' fill='#3730a3' />
          </svg>
          <svg width='90' height='45' className='absolute right-1/5 top-1/3 opacity-15 animate-pulse' fill='none'>
            <rect x='5' y='5' width='80' height='35' rx='12' fill='#312e81' />
          </svg>
          
          {/* Üçgen ikonları */}
          <svg width='60' height='60' className='absolute left-1/5 bottom-1/5 opacity-30 animate-ping' fill='none'>
            <polygon points='30,5 55,55 5,55' fill='#5b21b6' />
          </svg>
          <svg width='40' height='40' className='absolute right-1/3 bottom-1/3 opacity-20 animate-bounce' fill='none'>
            <polygon points='20,3 37,37 3,37' fill='#4338ca' />
          </svg>
          
          {/* Elips ve oval şekiller */}
          <svg width='120' height='60' className='absolute left-1/2 top-1/2 -translate-x-1/2 opacity-10 animate-spin-slow' fill='none'>
            <ellipse cx='60' cy='30' rx='50' ry='20' fill='#a855f7' />
          </svg>
          <svg width='80' height='120' className='absolute right-1/6 top-1/2 opacity-15 animate-pulse' fill='none'>
            <ellipse cx='40' cy='60' rx='25' ry='50' fill='#7c3aed' fillOpacity='0.3' />
          </svg>
          
          {/* Hexagon şekilleri */}
          <svg width='70' height='70' className='absolute left-1/6 top-1/4 opacity-25 animate-bounce' fill='none'>
            <polygon points='35,5 60,20 60,50 35,65 10,50 10,20' fill='#4f46e5' fillOpacity='0.4' />
          </svg>
          <svg width='50' height='50' className='absolute right-1/4 top-1/2 opacity-20 animate-ping' fill='none'>
            <polygon points='25,4 43,14 43,36 25,46 7,36 7,14' fill='#6366f1' fillOpacity='0.5' />
          </svg>
          
          {/* Dalga animasyonları */}
          <svg width='100%' height='200' viewBox='0 0 1200 200' fill='none' xmlns='http://www.w3.org/2000/svg' className='absolute bottom-0 left-0 opacity-30 animate-pulse'>
            <path fill='#312e81' fillOpacity='0.4' d='M0,150 Q300,100 600,150 T1200,150 L1200,200 L0,200 Z'></path>
          </svg>
          
          {/* Ekstra hareketli motifler */}
          <svg width='45' height='45' className='absolute left-1/2 bottom-1/4 opacity-20 animate-spin' fill='none'>
            <rect x='5' y='5' width='35' height='35' rx='17.5' fill='#8b5cf6' fillOpacity='0.3' />
            <circle cx='22.5' cy='22.5' r='8' fill='#a855f7' />
          </svg>
          
          <svg width='65' height='65' className='absolute right-1/6 bottom-1/6 opacity-25 animate-bounce' fill='none'>
            <polygon points='32.5,5 50,25 50,50 32.5,60 15,50 15,25' fill='#3730a3' fillOpacity='0.4' />
            <circle cx='32.5' cy='35' r='8' fill='#6366f1' />
          </svg>
          
          {/* Sürekli hareket eden noktalar */}
          <div className='absolute top-1/4 left-1/3 w-3 h-3 bg-purple-400 rounded-full opacity-30 animate-ping'></div>
          <div className='absolute top-1/3 right-1/4 w-2 h-2 bg-indigo-400 rounded-full opacity-25 animate-pulse'></div>
          <div className='absolute bottom-1/3 left-1/4 w-4 h-4 bg-blue-400 rounded-full opacity-20 animate-bounce'></div>
          <div className='absolute bottom-1/4 right-1/3 w-2 h-2 bg-purple-300 rounded-full opacity-30 animate-ping'></div>
          
          {/* Hareketli çizgiler */}
          <svg width='100' height='4' className='absolute top-1/5 left-1/4 opacity-20 animate-pulse' fill='none'>
            <rect x='0' y='0' width='100' height='4' rx='2' fill='#8b5cf6' />
          </svg>
          <svg width='80' height='3' className='absolute bottom-1/5 right-1/4 opacity-15 animate-bounce' fill='none'>
            <rect x='0' y='0' width='80' height='3' rx='1.5' fill='#6366f1' />
          </svg>
        </div>
        {/* HERO */}
        <section className='max-w-4xl w-full mx-auto p-10 rounded-3xl shadow-2xl bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-800 border border-purple-400/30 mt-20 mb-16 flex flex-col items-center'>
          <h1 className='text-6xl font-extrabold text-white mb-4 text-center drop-shadow-xl animate-fade-in'>TeamUp</h1>
          <h2 className='text-3xl font-semibold text-purple-200 mb-8 text-center animate-slide-up-soft'>Topluluğunuza Güç Katın: Modern, Güvenli ve Dinamik Sohbet Platformu</h2>
          <a
            className='px-10 py-4 rounded-full bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-700 text-white font-bold text-2xl shadow-xl hover:scale-105 hover:from-purple-800 hover:to-blue-800 transition animate-scale-in-soft mb-6'
            href='/sign-in'
          >
            Hemen Başla
          </a>
          <span className='text-purple-100 text-lg animate-fade-in mb-4'>Sosyal topluluğunu TeamUp ile bir araya getir!</span>
          {/* Statik istatistikler */}
          <div className='flex flex-wrap justify-center gap-10 mb-8 mt-6'>
            <div className='flex flex-col items-center animate-scale-in-soft bg-gradient-to-br from-indigo-800 via-purple-900 to-blue-700 rounded-xl px-8 py-4 shadow-lg'>
              <span className='text-5xl font-bold text-white'>12,000+</span>
              <span className='text-purple-200 text-lg'>Aktif Kullanıcı</span>
            </div>
            <div className='flex flex-col items-center animate-scale-in-soft bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-800 rounded-xl px-8 py-4 shadow-lg'>
              <span className='text-5xl font-bold text-white'>1,500+</span>
              <span className='text-purple-200 text-lg'>Sunucu</span>
            </div>
            <div className='flex flex-col items-center animate-scale-in-soft bg-gradient-to-br from-blue-800 via-purple-900 to-indigo-700 rounded-xl px-8 py-4 shadow-lg'>
              <span className='text-5xl font-bold text-white'>250,000+</span>
              <span className='text-purple-200 text-lg'>Mesaj</span>
            </div>
            <div className='flex flex-col items-center animate-scale-in-soft bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-700 rounded-xl px-8 py-4 shadow-lg'>
              <span className='text-5xl font-bold text-white'>%99.9</span>
              <span className='text-purple-200 text-lg'>Uptime</span>
            </div>
          </div>
        </section>
        {/* Öne çıkan özellikler */}
        <section className='max-w-5xl w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
          <div className='flex flex-col items-center bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-800 rounded-2xl p-8 shadow-xl hover:scale-105 transition'>
            <span className='text-4xl mb-3 bg-gradient-to-br from-purple-500 to-indigo-600 text-white rounded-full p-3 shadow-lg'>💬</span>
            <h3 className='text-xl font-bold text-white mb-2'>Gerçek Zamanlı Mesajlaşma</h3>
            <p className='text-purple-100 text-center'>Anlık, hızlı ve güvenli sohbet deneyimi. Modern chat arayüzü ve bildirimler.</p>
          </div>
          <div className='flex flex-col items-center bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-700 rounded-2xl p-8 shadow-xl hover:scale-105 transition'>
            <span className='text-4xl mb-3 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-full p-3 shadow-lg'>🔊</span>
            <h3 className='text-xl font-bold text-white mb-2'>Sesli & Görüntülü Oda</h3>
            <p className='text-purple-100 text-center'>Topluluğunla anında iletişim kur. LiveKit entegrasyonu ile yüksek kalite.</p>
          </div>
          <div className='flex flex-col items-center bg-gradient-to-br from-blue-800 via-purple-900 to-indigo-700 rounded-2xl p-8 shadow-xl hover:scale-105 transition'>
            <span className='text-4xl mb-3 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full p-3 shadow-lg'>🔒</span>
            <h3 className='text-xl font-bold text-white mb-2'>Gelişmiş Güvenlik</h3>
            <p className='text-purple-100 text-center'>Clerk ile kimlik doğrulama, güvenli giriş ve yönetim. Rol ve izin sistemi.</p>
          </div>
          <div className='flex flex-col items-center bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-700 rounded-2xl p-8 shadow-xl hover:scale-105 transition'>
            <span className='text-4xl mb-3 bg-gradient-to-br from-purple-500 to-indigo-600 text-white rounded-full p-3 shadow-lg'>⚡</span>
            <h3 className='text-xl font-bold text-white mb-2'>Hızlı & Modern Arayüz</h3>
            <p className='text-purple-100 text-center'>Responsive, animasyonlu ve kullanıcı dostu tasarım. Karanlık mod desteği.</p>
          </div>
          <div className='flex flex-col items-center bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-800 rounded-2xl p-8 shadow-xl hover:scale-105 transition'>
            <span className='text-4xl mb-3 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-full p-3 shadow-lg'>🌐</span>
            <h3 className='text-xl font-bold text-white mb-2'>Sunucu & Kanal Yönetimi</h3>
            <p className='text-purple-100 text-center'>Kendi topluluğunu kur, metin/sesli/görüntülü kanallar oluştur, davet et.</p>
          </div>
          <div className='flex flex-col items-center bg-gradient-to-br from-blue-800 via-purple-900 to-indigo-700 rounded-2xl p-8 shadow-xl hover:scale-105 transition'>
            <span className='text-4xl mb-3 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full p-3 shadow-lg'>📁</span>
            <h3 className='text-xl font-bold text-white mb-2'>Dosya Paylaşımı</h3>
            <p className='text-purple-100 text-center'>Kolayca dosya, resim ve medya paylaş. Sürükle-bırak desteği.</p>
          </div>
        </section>
        {/* Footer */}
        <footer className='w-full flex flex-col items-center py-10 mt-8 bg-gradient-to-t from-black via-indigo-900 to-transparent'>
          <div className='flex gap-8 mb-3'>
            <span className='text-purple-200 animate-pulse'>© 2024 TeamUp</span>
            <span className='text-purple-200 animate-pulse'>Sosyal Chat & Voice Platform</span>
          </div>
          <div className='flex gap-4'>
            <a href='https://github.com/metin-teamup' target='_blank' rel='noopener noreferrer' className='text-purple-400 hover:text-white transition'>GitHub</a>
            <a href='mailto:info@teamup.com' className='text-purple-400 hover:text-white transition'>İletişim</a>
          </div>
          <svg width='120' height='24' className='animate-bounce mt-4' fill='none'>
            <ellipse cx='60' cy='12' rx='50' ry='8' fill='#8b5cf6' fillOpacity='0.3' />
          </svg>
        </footer>
      </main>
    </div>
  )
} 