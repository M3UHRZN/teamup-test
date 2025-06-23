import { Loader2 } from 'lucide-react'

export default function Loading() {
  return (
    <div className='flex flex-col items-center justify-center h-[100vh] w-full' style={{background: 'linear-gradient(120deg, #232946 0%, #3d2c8d 40%, #6c47ff 100%)'}}>
      <Loader2 className='animate-spin text-primary mb-4' size={48} />
      <h3 className='text-2xl font-bold text-primary-foreground drop-shadow-lg'>Loading...</h3>
    </div>
  )
}
