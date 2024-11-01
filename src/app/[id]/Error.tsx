import { OctagonX } from 'lucide-react';

export function Error() {
  return (
    <div className='flex items-center justify-center flex-col gap-2'>
      <OctagonX className='size-24 text-red-500 animate-pulse' />
      <span className='text-xl'>Algo deu errado</span>
    </div>
  )
}