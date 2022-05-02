import { useSession } from 'next-auth/react';
import { useRef } from 'react';
import Image from 'next/image';
import imgUser from '../public/user.png';
import { EmojiHappyIcon } from '@heroicons/react/outline';
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/solid';
import { db } from '../firebaseInit';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

function InputBox() {
  const { data: session } = useSession();
  const inputRef = useRef(null);
  const imageToPostRef = useRef(null);

  const sendPost = async (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;

    try {
      const docRef = await addDoc(collection(db, "posts"), {
        message: inputRef.current.value,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
        timestamp: serverTimestamp(),
      });
      console.log("Document written with ID: ", docRef.id);
      inputRef.current.value = '';
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const addImageToPost = () => {

  }

  return (
    <div className='bg-white p-2 rounded-xl shadow-md text-gray-500 font-medium mt-6'>
      <div className='flex space-x-4 p-4 items-center'>
        <Image
          className='rounded-full'
          src={session.user.image ? session.user.image : imgUser}
          width={40}
          height={40}
          layout='fixed'
          alt='user'
        />
        <form className='flex flex-1 '>
          <input
            ref={inputRef}
            className='rounded-full h-12 bg-gray-100 grow px-5 focus:outline-none'
            type='text' placeholder={`What's on your mind${session.user.name ? `, ${session.user.name}` : ''}`}
          />
          <button hidden type='submit' onClick={sendPost}>Submit</button>
        </form>
      </div>
      <div className='flex justify-evenly p-3 border-t'>
        <div className='inputIcon'>
          <VideoCameraIcon className='h-7 text-red-500' />
          <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
        </div>
        <div className='inputIcon'>
          <CameraIcon className='h-7 text-green-400' />
          <p className='text-xs sm:text-sm xl:text-base'>Photo/Video</p>
          <input
            ref={imageToPostRef}
            type='file'
            hidden
            onChange={addImageToPost}
          />
        </div>
        <div className='inputIcon'>
          <EmojiHappyIcon className='h-7 text-yellow-300' />
          <p className='text-xs sm:text-sm xl:text-base'>Feeling/Activity</p>
        </div>
      </div>
    </div>
  )
}

export default InputBox