import React, { useState, useContext } from 'react'
import { Context } from '../../../context/Context'
import axios from 'axios'

const Profile = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const { userPhotoURL } = useContext(Context)
  const [profilePic, setProfilePic] = useState(userPhotoURL)
  console.log(userPhotoURL)
  const { user, dispatch } = useContext(Context)

  const [adminDetails, setAdminDetails] = useState({
    nameOfOrganization: '',
    organizationEmail: '',
    numberOfStaffs: '',
    staffID: '',
    organizationType: '',
    website: '',
    firstName: '',
    lastName: '',
    position: '',
    phoneNumber: '',
  })

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    setProfilePic(URL.createObjectURL(file))
    setSelectedFile(file)
    // const reader = new FileReader()

    // reader.onloadend = () => {
    //   setProfilePic(reader.result)
    // }

    // if (file) {
    //   reader.readAsDataURL(file)
    //   setSelectedFile(file)
    // }
    console.log(file)
  }

  const removeProfilePic = () => {
    setProfilePic('assets/dashboard/dummy.png')
    setSelectedFile(null)
  }

  const updateDetails = async () => {
    if (adminDetails.firstName === '' || adminDetails.lastName === '') {
      console.log('First Name and Last Name should not be empty')
    } else {
      try {
        const response = await axios.put(
          `/admins/${user.adminId}`,
          adminDetails,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${user.access_token}`,
            },
          }
        )
        const data = response.data.data
        console.log(response)
        console.log(data)
        setAdminDetails({
          nameOfOrganization: '',
          organizationEmail: '',
          numberOfStaffs: '',
          staffID: '',
          organizationType: '',
          website: '',
          firstName: '',
          lastName: '',
          position: '',
          phoneNumber: '',
        })
      } catch (error) {
        console.log(error)
      }
    }
  }

  const updateProfilePic = async () => {
    const formData = new FormData()
    formData.append('profileImage', selectedFile)
    try {
      const response = await axios.put(
        `/admins/${user.adminId}/profile-picture`,
        formData,
        {
          headers: {
            'Content-Type':
              'multipart/form-data; boundary=<calculated when request is sent>',
            Authorization: `Bearer ${user.access_token}`,
          },
        }
      )
      const data = response.data.data
      dispatch({ type: 'PROFILE-PIC_UPDATED' })
      console.log(response)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleUpdateAdminDetails = () => {
    updateDetails()
    updateProfilePic()
  }

  return (
    <div>
      <div className='flex flex-col'>
        <div className='pt-[46px] text-[24px] text-[#4D4D4D] font-[500] '>
          Personal Information
        </div>
        <div className='flex flex-col gap-[48px]  border-b pb-[106px] mt-[51px]'>
          <div className='flex gap-[59px]'>
            <input
              type='text'
              className='w-[462px] h-[60px] border border-[#666666] bg-[#FAFCFF] p-4 rounded'
              placeholder='Name of Organization'
              value={adminDetails.nameOfOrganization}
              onChange={(e) =>
                setAdminDetails({
                  ...adminDetails,
                  nameOfOrganization: e.target.value,
                })
              }
            />
            <input
              type='email'
              className='w-[462px] h-[60px] border border-[#666666] bg-[#FAFCFF] p-4 rounded'
              placeholder='Email Address'
              value={adminDetails.organizationEmail}
              onChange={(e) =>
                setAdminDetails({
                  ...adminDetails,
                  organizationEmail: e.target.value,
                })
              }
            />
          </div>
          <div className='flex gap-[59px]'>
            <input
              type='text'
              className='w-[462px] h-[60px] border border-[#666666] bg-[#FAFCFF] p-4 rounded'
              placeholder='Number of Staffs'
              value={adminDetails.numberOfStaffs}
              onChange={(e) =>
                setAdminDetails({
                  ...adminDetails,
                  numberOfStaffs: e.target.value,
                })
              }
            />
            <input
              type='text'
              className='w-[462px] h-[60px] border border-[#666666] bg-[#FAFCFF] p-4 rounded'
              placeholder='Identity Number'
              value={adminDetails.staffID}
              onChange={(e) =>
                setAdminDetails({
                  ...adminDetails,
                  staffID: e.target.value,
                })
              }
            />
          </div>

          <div className='flex gap-[59px]'>
            <input
              type='text'
              className='w-[462px] h-[60px] border border-[#666666] bg-[#FAFCFF] p-4 rounded'
              placeholder='Type of Organization'
              value={adminDetails.organizationType}
              onChange={(e) =>
                setAdminDetails({
                  ...adminDetails,
                  organizationType: e.target.value,
                })
              }
            />
            <input
              type='text'
              className='w-[462px] h-[60px] border border-[#666666] bg-[#FAFCFF] p-4 rounded'
              placeholder='Website'
              value={adminDetails.website}
              onChange={(e) =>
                setAdminDetails({
                  ...adminDetails,
                  website: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>

      <div className='flex flex-col'>
        <div className='pt-[46px] text-[24px] text-[#4D4D4D] font-[500] '>
          Admin Information
        </div>

        <div className='mt-[22px]'>Change admin information</div>
        <div className='flex flex-col gap-[48px]  border-b pb-[106px] mt-[51px] mb-[56px]'>
          <div className='grid gap-[59px] grid-cols-2'>
            <input
              type='text'
              className='w-[462px] h-[60px] border border-[#666666] bg-[#FAFCFF] p-4 rounded'
              placeholder='First Name'
              value={adminDetails.firstName}
              onChange={(e) =>
                setAdminDetails({
                  ...adminDetails,
                  firstName: e.target.value,
                })
              }
              required
            />
            <input
              type='text'
              className='w-[462px] h-[60px] border border-[#666666] bg-[#FAFCFF] p-4 rounded'
              placeholder='Last Name'
              value={adminDetails.lastName}
              onChange={(e) =>
                setAdminDetails({
                  ...adminDetails,
                  lastName: e.target.value,
                })
              }
              required
            />
            <input
              type='email'
              className='w-[462px] h-[60px] border border-[#666666] bg-[#FAFCFF] p-4 rounded'
              placeholder='Email Address'
              value={user.email}
              disabled
            />
            <input
              type='text'
              className='w-[462px] h-[60px] border border-[#666666] bg-[#FAFCFF] p-4 rounded'
              placeholder='Position'
              value={adminDetails.position}
              onChange={(e) =>
                setAdminDetails({
                  ...adminDetails,
                  position: e.target.value,
                })
              }
            />
            <input
              type='text'
              className='w-[462px] h-[60px] border border-[#666666] bg-[#FAFCFF] p-4 rounded'
              placeholder='Phone Number'
              value={adminDetails.phoneNumber}
              onChange={(e) =>
                setAdminDetails({
                  ...adminDetails,
                  phoneNumber: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>

      <div className='flex flex-col'>
        <div className=' text-[24px] text-[#4D4D4D] font-[500] '>
          Profile Picture
        </div>

        <img
          src={profilePic}
          alt=''
          className='mt-[59px] mb-[43px] w-[184px] h-[184px] rounded-full'
        />
        <button className='self-start text-[#0267FF] text-[20px] font-[500] mb-[12px]'>
          <label htmlFor='profilePicInput' className='cursor-pointer'>
            Change Profile Picture
          </label>
        </button>
        <input
          type='file'
          id='profilePicInput'
          accept='image/*'
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
        <button
          className='self-start text-[#0267FF] text-[20px] font-[500]'
          onClick={removeProfilePic}
        >
          Remove Profile Picture
        </button>
      </div>

      <div className='flex gap-4 justify-end items-center mt-[77px] mb-[47px] mr-[80px]'>
        <button className='w-[195px] h-[61px] border border-[#FF2727] text-[#FF2727] text-[24px] font-[600] rounded'>
          Cancel
        </button>
        <button
          className='w-[195px] h-[61px] text-white text-[24px] font-[600] bg-[#0267FF] rounded'
          onClick={handleUpdateAdminDetails}
        >
          Save
        </button>
      </div>
    </div>
  )
}

export default Profile
