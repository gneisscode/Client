import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context';


const DashHeader = () => {
  const { user } = useContext(Context);
  return (
    <div className='hidden lg:flex justify-between h-[112px] w-[100%] bg-[#FAFCFF] text-gray-400 border border-gray-100 items-end px-[80.11px] py-8 fixed top-0 left-0 z-[1000]'>
      <Link to='/'>
        <div className='flex justify-center items-center'>
          <img src='/assets/omega-logo.png' alt='' />
        </div>
      </Link>

      <div>
        <input
          type='text'
          placeholder='Search'
          className='lg:w-[520px] lg:h-[48px] p-[24px] rounded-[8px] border border-[#E5E5E5] outline-none'
        />
      </div>

      <div className='flex gap-[52px] justify-center items-center self-center'>
        <div>Hello, {user.email}</div>

        <Link to='/settings'>
          <img
            src='assets/dashboard/dp.png'
            className='w-[50px] h-[50px]'
            alt=''
          />
        </Link>
      </div>
    </div>
  )
}

export default DashHeader
