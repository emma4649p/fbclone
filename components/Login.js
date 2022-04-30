import Image from 'next/image'
import logo from '../public/GitHub-Mark-120px-plus.png'
import { signIn } from "next-auth/react"

function Login() {
  return (
    <div className='grid place-items-center mt-5 background-pattern'>
      <Image src={logo} width={120} height={120} objectFit='contain' />
      <h1 onClick={signIn} className='mt-5 p-5 rounded-full bg-black text-white text-center cursor-pointer'>Login with Github</h1>
    </div>
  )
}

export default Login
