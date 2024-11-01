import Logo from '@/assets/logo.svg'
import Image from 'next/image'

export function Header() {
  const shieldImg = 'https://res.cloudinary.com/ucred/image/upload/v1635781555/icons/secure-icon.png'

  return (
    <div className='flex justify-between gap-4 w-full mb-6'>
      <Image alt='' src={Logo} priority width={190} height={20} className='-ml-8 -my-8 w-36 sm:w-60 h-auto' quality={100} rel='preload' />
      <Image alt='' src={shieldImg} width={50} height={10} priority className='w-10 sm:w-12 h-auto' quality={100} rel='preload' />
    </div>
  )
}