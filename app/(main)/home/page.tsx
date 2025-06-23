import { NavigationSidebar } from '@/components/navigation/navigation-sidebar'

export default function HomePage() {
  return (
    <div className='h-full flex bg-none'>
      <div className='hidden md:flex h-full w-[72px] z-50 flex-col fixed inset-y-0'>
        <NavigationSidebar />
      </div>
      <main className='flex-1 md:pl-[72px] min-h-screen bg-none overflow-y-auto relative'>
        {/* Arka plan motifleri */}
        <div className='absolute inset-0 -z-10 pointer-events-none'>
          {/* Büyük dalga SVG */}
          <svg width='100%' height='400' viewBox='0 0 1440 400' fill='none' xmlns='http://www.w3.org/2000/svg' className='absolute top-0 left-0'>
            <path fill='#1e3a8a' fillOpacity='0.18' d='M0,240L60,250.7C120,261,240,283,360,277.3C480,272,600,240,720,213.3C840,187,960,165,1080,181.3C1200,197,1320,251,1380,277.3L1440,304L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z'></path>
          </svg>
          {/* Nokta motifleri */}
          <svg width='160' height='160' className='absolute right-20 top-40 opacity-30 animate-pulse' fill='none'>
            <circle cx='80' cy='80' r='70' stroke='#60a5fa' strokeWidth='12' />
          </svg>
          <svg width='120' height='120' className='absolute left-32 bottom-32 opacity-20 animate-bounce' fill='none'>
            <rect x='20' y='20' width='80' height='80' rx='30' fill='#3b82f6' />
          </svg>
          {/* Hareketli yıldızlar */}
          <svg width='32' height='32' className='absolute left-1/2 top-24 animate-spin' fill='none'>
            <polygon points='16,2 20,12 31,12 22,19 25,30 16,23 7,30 10,19 1,12 12,12' fill='#fff' fillOpacity='0.12' />
          </svg>
          <svg width='24' height='24' className='absolute right-1/3 top-1/2 animate-pulse' fill='none'>
            <circle cx='12' cy='12' r='10' fill='#fff' fillOpacity='0.08' />
          </svg>
        </div>
        <section className='w-full min-h-[80vh] flex flex-col justify-center items-center px-0 py-20 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 border-b-2 border-blue-400/30 relative overflow-hidden'>
          <div className='w-full max-w-5xl mx-auto px-8'>
            <h1 className='text-6xl font-extrabold text-white mb-6 text-center drop-shadow-lg animate-fade-in'>TeamUp</h1>
            <h2 className='text-3xl font-semibold text-blue-200 mb-10 text-center animate-slide-up-soft'>Sosyal, Modern ve Güçlü Topluluk Sohbet Platformu</h2>
            <div className='flex flex-wrap justify-center gap-16 mb-14'>
              {/* Sahte istatistikler */}
              <div className='flex flex-col items-center animate-scale-in-soft'>
                <span className='text-5xl font-bold text-white animate-bounce'>+12,000</span>
                <span className='text-blue-200 text-xl'>Aktif Kullanıcı</span>
              </div>
              <div className='flex flex-col items-center animate-scale-in-soft'>
                <span className='text-5xl font-bold text-white animate-bounce'>+1,500</span>
                <span className='text-blue-200 text-xl'>Sunucu</span>
              </div>
              <div className='flex flex-col items-center animate-scale-in-soft'>
                <span className='text-5xl font-bold text-white animate-bounce'>+250,000</span>
                <span className='text-blue-200 text-xl'>Mesaj</span>
              </div>
              <div className='flex flex-col items-center animate-scale-in-soft'>
                <span className='text-5xl font-bold text-white animate-bounce'>%99.9</span>
                <span className='text-blue-200 text-xl'>Uptime</span>
              </div>
            </div>
            <ul className='grid grid-cols-1 md:grid-cols-2 gap-8 text-xl text-white/90 mb-14'>
              <li className='flex items-center gap-4 animate-fade-in'>
                <span className='inline-block w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl animate-bounce shadow-lg'>💬</span>
                <div>
                  <b>Gerçek Zamanlı Mesajlaşma</b>
                  <p className='text-blue-100 text-base mt-1'>Anlık, hızlı ve güvenli sohbet deneyimi.</p>
                </div>
              </li>
              <li className='flex items-center gap-4 animate-fade-in'>
                <span className='inline-block w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl animate-bounce shadow-lg'>🔊</span>
                <div>
                  <b>Sesli & Görüntülü Oda</b>
                  <p className='text-blue-100 text-base mt-1'>Topluluğunla anında iletişim kur.</p>
                </div>
              </li>
              <li className='flex items-center gap-4 animate-fade-in'>
                <span className='inline-block w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center text-white text-2xl animate-bounce shadow-lg'>🔒</span>
                <div>
                  <b>Gelişmiş Güvenlik</b>
                  <p className='text-blue-100 text-base mt-1'>Clerk ile kimlik doğrulama, güvenli giriş ve yönetim.</p>
                </div>
              </li>
              <li className='flex items-center gap-4 animate-fade-in'>
                <span className='inline-block w-12 h-12 rounded-full bg-blue-300 flex items-center justify-center text-white text-2xl animate-bounce shadow-lg'>⚡</span>
                <div>
                  <b>Hızlı & Modern Arayüz</b>
                  <p className='text-blue-100 text-base mt-1'>Responsive, animasyonlu ve kullanıcı dostu tasarım.</p>
                </div>
              </li>
              <li className='flex items-center gap-4 animate-fade-in'>
                <span className='inline-block w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center text-white text-2xl animate-bounce shadow-lg'>🌐</span>
                <div>
                  <b>Sunucu & Kanal Yönetimi</b>
                  <p className='text-blue-100 text-base mt-1'>Kendi topluluğunu kur, metin/sesli/görüntülü kanallar oluştur.</p>
                </div>
              </li>
              <li className='flex items-center gap-4 animate-fade-in'>
                <span className='inline-block w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center text-white text-2xl animate-bounce shadow-lg'>🤖</span>
                <div>
                  <b>Bot & Entegrasyon</b>
                  <p className='text-blue-100 text-base mt-1'>Gelişmiş botlar ve entegrasyonlarla topluluğunu güçlendir.</p>
                </div>
              </li>
            </ul>
            <div className='flex flex-col items-center gap-6 mt-12'>
              <button className='px-12 py-4 rounded-full bg-gradient-to-r from-blue-600 via-blue-400 to-blue-700 text-white font-bold text-2xl shadow-2xl hover:scale-105 transition animate-scale-in-soft'>Hemen Başla</button>
              <span className='text-blue-100 text-lg animate-fade-in'>Topluluğunu TeamUp ile bir araya getir!</span>
            </div>
          </div>
        </section>
        {/* Alt bilgi ve hareketli grafikler */}
        <footer className='w-full flex flex-col items-center py-12 mt-8'>
          <div className='flex gap-8 mb-4'>
            <span className='text-blue-200 animate-pulse text-lg'>© 2024 TeamUp</span>
            <span className='text-blue-200 animate-pulse text-lg'>Sosyal Chat & Voice Platform</span>
          </div>
          <svg width='200' height='40' className='animate-bounce' fill='none'>
            <ellipse cx='100' cy='20' rx='90' ry='14' fill='#3b82f6' fillOpacity='0.18' />
          </svg>
        </footer>
      </main>
    </div>
  )
} 