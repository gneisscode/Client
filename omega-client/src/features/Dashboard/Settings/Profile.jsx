import React, { useState, useContext, useEffect } from 'react'
import { Context } from '../../../context/Context'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Link } from 'react-router-dom'

const Profile = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const { user, dispatch, userPhotoURL } = useContext(Context)
  const [profilePic, setProfilePic] = useState(userPhotoURL || user.imageUrl)
  const [isLoading, setIsLoading] = useState(false)
  const [fetching, setFetching] =useState(true)
  const [adminDetails, setAdminDetails] = useState({
    nameOfOrganization: '',
    organisationEmail: '',
    numberOfStaffs: '',
    staffID: '',
    organisationType: '',
    website: '',
    firstName: '',
    lastName: '',
    position: '',
    phoneNumber: '',
  })

  useEffect(() => {
    const getAdminDetails = async () => {
      try {
        const response = await axios.get(`/admins/one?id=${user.adminId}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.access_token}`,
          },
        })
        const data = response.data.data
        console.log(response.data.data)
        setAdminDetails({
          ...adminDetails,
          ...data,
        })
        // console.log(adminDetails)
        setFetching(false)
      } catch (error) {
        console.log(error)
      }
    }
    getAdminDetails()
  }, [user.adminId])

  const showToastSuccess = () => {
    toast.success('Profile successfully updated!', {
      position: toast.POSITION.TOP_RIGHT,
    })
  }

  const showToastError = () => {
    toast.error('Something went wrong!', {
      position: toast.POSITION.TOP_RIGHT,
    })
  }

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
    // console.log(file)
  }

  const removeProfilePic = () => {

    setProfilePic('assets/dashboard/default.jpg')

    setSelectedFile(null)
  }

  const updateDetails = async () => {
    // setIsLoading(true);
    if (adminDetails.firstName === '' || adminDetails.lastName === '') {
      showToastError()
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
        showToastSuccess()
      } catch (error) {
        console.log(error)
        showToastError()
      }
    }
  }

  const updateProfilePic = async () => {
    if (selectedFile) {
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
      } catch (error) {
        console.log(error)
      }
    } else {
      try {
        const response = axios.delete(
          `admins/${user.adminId}/profile-picture`,
          {
            headers: {
              "Content-Type":
                "multipart/form-data; boundary=<calculated when request is sent>",
              Authorization: `Bearer ${user.access_token}`,
            },
          }
        );
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    console.log(selectedFile)
    console.log(profilePic)
  }

  const handleUpdateAdminDetails = async () => {
    setIsLoading(true)
    try {
      await Promise.all([updateDetails(), updateProfilePic()])
      // updateProfilePic()
    } catch (error) {
      showToastError()
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <ToastContainer />
      {fetching ? (
        <div
          role="status"
          className=" flex mt-20 justify-center items-center absolute top-[212px] left-[450px]"
        >
          <svg
            aria-hidden="true"
            className="w-12 h-12 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <>
          {" "}
          <div className="flex flex-col">
            <div className="pt-[46px] text-[24px] text-[#4D4D4D] font-[500] ">
              Organisation Information
            </div>
            <div className="flex flex-col gap-[48px]  border-b pb-[106px] mt-[51px]">
              <div className="flex gap-[59px]">
                <input
                  type="text"
                  className="w-[462px] h-[60px] border border-[#666666] bg-[#FAFCFF] p-4 rounded outline-none"
                  placeholder="Name of Organisation"
                  value={adminDetails.organisationName}
                  onChange={(e) =>
                    setAdminDetails({
                      ...adminDetails,
                      nameOfOrganization: e.target.value,
                    })
                  }
                />
                <input
                  type="email"
                  className="w-[462px] h-[60px] border border-[#666666] bg-[#FAFCFF] p-4 rounded outline-none"
                  placeholder=" Organisation Email Address"
                  value={adminDetails.organisationEmail}
                  onChange={(e) =>
                    setAdminDetails({
                      ...adminDetails,
                      organisationEmail: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex gap-[59px]">
                <input
                  type="text"
                  className="w-[462px] h-[60px] border border-[#666666] bg-[#FAFCFF] p-4 rounded outline-none"
                  placeholder="Number of Staff"
                  value={adminDetails.numberOfStaffs}
                  onChange={(e) =>
                    setAdminDetails({
                      ...adminDetails,
                      numberOfStaffs: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  className="w-[462px] h-[60px] border border-[#666666] bg-[#FAFCFF] p-4 rounded outline-none"
                  placeholder="Identity Number"
                  value={adminDetails.staffID}
                  onChange={(e) =>
                    setAdminDetails({
                      ...adminDetails,
                      staffID: e.target.value,
                    })
                  }
                  disabled={true}
                />
              </div>

              <div className="flex gap-[59px]">
                <input
                  type="text"
                  className="w-[462px] h-[60px] border border-[#666666] bg-[#FAFCFF] p-4 rounded outline-none"
                  placeholder="Type of Organisation"
                  value={adminDetails.organisationType}
                  onChange={(e) =>
                    setAdminDetails({
                      ...adminDetails,
                      organisationType: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  className="w-[462px] h-[60px] border border-[#666666] bg-[#FAFCFF] p-4 rounded outline-none"
                  placeholder="Website"
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
          <div className="flex flex-col">
            <div className="pt-[46px] text-[24px] text-[#4D4D4D] font-[500] ">
              Personal Information
            </div>

            <div className="mt-[22px]">Change personal information</div>
            <div className="flex flex-col gap-[48px]  border-b pb-[106px] mt-[51px] mb-[56px]">
              <div className="grid gap-[59px] grid-cols-2">
                <input
                  type="text"
                  className="w-[462px] h-[60px] border border-[#666666] bg-[#FAFCFF] p-4 rounded outline-none"
                  placeholder="First Name"
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
                  type="text"
                  className="w-[462px] h-[60px] border border-[#666666] bg-[#FAFCFF] p-4 rounded outline-none"
                  placeholder="Last Name"
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
                  type="email"
                  className="w-[462px] h-[60px] border border-[#666666] bg-[#FAFCFF] p-4 rounded outline-none"
                  placeholder="Email Address"
                  value={user.email}
                  disabled
                />
                <input
                  type="text"
                  className="w-[462px] h-[60px] border border-[#666666] bg-[#FAFCFF] p-4 rounded outline-none"
                  placeholder="Position"
                  value={adminDetails.position}
                  onChange={(e) =>
                    setAdminDetails({
                      ...adminDetails,
                      position: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  className="w-[462px] h-[60px] border border-[#666666] bg-[#FAFCFF] p-4 rounded outline-none"
                  placeholder="Phone Number"
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
          <div className="flex flex-col">
            <div className=" text-[24px] text-[#4D4D4D] font-[500] ">
              Profile Picture
            </div>

            <img
              src={profilePic}
              alt=""
              className="mt-[59px] mb-[43px] w-[184px] h-[184px] rounded-full"
            />
            <button className="self-start text-[#0267FF] text-[20px] font-[500] mb-[12px]">
              <label htmlFor="profilePicInput" className="cursor-pointer">
                Change Profile Picture
              </label>
            </button>
            <input
              type="file"
              id="profilePicInput"
              accept="image/*"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
            <button
              className="self-start text-[#0267FF] text-[20px] font-[500]"
              onClick={removeProfilePic}
            >
              Remove Profile Picture
            </button>
          </div>
          <div className="flex gap-4 justify-end items-center mt-[77px] mb-[47px] mr-[80px]">
            <Link to="/dashboard">
              <button className="w-[195px] h-[61px] border border-[#FF2727] text-[#FF2727] text-[24px] font-[600] rounded hover:bg-[#FF2727] hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                Cancel
              </button>
            </Link>
            <button
              className="w-[195px] h-[61px] text-white text-[24px] font-[600] bg-[#0267FF] rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300"
              onClick={handleUpdateAdminDetails}
              disabled={isLoading}
            >
              {isLoading && (
                <svg
                  aria-hidden="true"
                  class="inline w-6 h-6 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              )}
              Save
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Profile
