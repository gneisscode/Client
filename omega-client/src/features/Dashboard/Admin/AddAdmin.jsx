import React from 'react'
import DashHeader from '../../../components/Dashboard/DashHeader';
import Sidebar from '../../../components/Dashboard/Sidebar';


const AddAdmin = () => {
  return (
    <div className="flex flex-col">
      <DashHeader />
      <div className="flex ">
        <Sidebar/>
        <div className='px-6 py-10 w-10/12'>
          <p className='text-blue-500 text-lg font-semibold'>Add Admin</p>
          <div>
            <p className='my-6 text-lg '>Admin Information</p>
            <form className='grid grid-cols-2 gap-8 mb-16'>
              <input className='border w-4/5 p-2 rounded bg-[#FAFCFF] border-[#a09b9b] outline-none' type='text' placeholder='First Name'/>
              <input className='border w-4/5 p-2 rounded bg-[#FAFCFF] border-[#a09b9b] outline-none' type='text' placeholder='Email Address'/>
              <input className='border w-4/5 p-2 rounded bg-[#FAFCFF] border-[#a09b9b] outline-none' type='text' placeholder='Last Name'/>
              <input className='border w-4/5 p-2 rounded bg-[#FAFCFF] border-[#a09b9b] outline-none' type='text' placeholder='Phone Number'/>
              <input className='border w-4/5 p-2 rounded bg-[#FAFCFF] border-[#a09b9b] outline-none' type='text' placeholder='Position in company'/>
            </form>
            <hr />
          </div>
          <div>
            <p className='text-lg mt-8 font-semibold'>Add Image</p>
            <div className='flex justify-center mt-8 text-center'>
              <img src="assets/dashboard/cloud-computing 1.png" alt='admin-img'/>
            </div>
            <p className='text-center mt-6 font-semibold text-[#616060]'>Upload an image to use as profile picture</p>
            <p className='text-center text-[#616060]'><i>Compatible file type: .jpg, .png, .svg, .bmp or .dxf</i></p>
          </div>
          <div className='flex flex-col'>
            <button className='mt-12 bg-blue-500 text-white w-[250px] mx-auto p-2 rounded'>Upload Image</button>
            <button className='mt-32 bg-blue-500 text-white w-[150px] ml-auto mr-8 p-2 rounded'>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddAdmin