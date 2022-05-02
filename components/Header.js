import Image from 'next/image'
import fblogo from '../public/social-facebook-circle-512.webp'
import imgUser from '../public/user.png'
import { BellIcon, ChatIcon, ChevronDownIcon, HomeIcon, UserGroupIcon, ViewGridIcon } from '@heroicons/react/solid'
import { FlagIcon, PlayIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import HeaderIcon from './HeaderIcon'
import { signOut, useSession } from 'next-auth/react'

function Header() {
  const { data: session } = useSession();

  return (
    <div className='sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md'>
      <div className='flex items-center'>
        <Image src={fblogo} alt='fbclone' width={40} height={40} />
        <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
          <SearchIcon className='h-6 text-gray-600' />
          <input className='hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink' type='text' placeholder='Search Facebook' name='' id='' />
        </div>
      </div>
      <div className='flex justify-center flex-grow md:mx-12'>
        <div className='flex space-x-6 md:space-x-2'>
          <HeaderIcon Icon={HomeIcon} active />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      <div className='flex items-center sm:space-x-2 justify-end'>
        <Image className='rounded-full cursor-pointer' src={session.user.image?session.user.image:imgUser} onClick={signOut} width={40} height={40} layout='fixed' alt='user' />
        <p className='whitespace-nowrap font-semibold pr-3'>{session.user.name?session.user.name:'-'}</p>
        <ViewGridIcon className='icon' />
        <ChatIcon className='icon' />
        <BellIcon className='icon' />
        <ChevronDownIcon className='icon' />
      </div>
    </div>

  )
}

export default Header