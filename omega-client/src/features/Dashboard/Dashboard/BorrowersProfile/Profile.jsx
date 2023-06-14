import React, { useContext, useEffect, useState } from 'react'
import DashHeader from '../../../../components/Dashboard/DashHeader'
import Sidebar from '../../../../components/Dashboard/Sidebar'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { Context } from '../../../../context/Context'

const Profile = () => {
  const [currentUser, setCurrentUser] = useState({})
  const param = useParams()

  const { user } = useContext(Context)

  useEffect(() => {
    const getUserLoan = async () => {
      const loans = axios.create({
        baseURL: `https://nodebtdev.onrender.com/api`,
      })
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
          },
        }
        const response = await loans.get(`/loans/company-loans`, config)
        // console.log(response.data)
        // console.log(response.data.data.loans)
        const loansList = response.data.data.loans

        const userLoan = loansList.find((loan) => loan._id === param.id)
        setCurrentUser(userLoan)
      } catch (error) {
        console.log(error)
      }
    }

    getUserLoan()
  }, [user, user?.access_token])
  return (
    <div className="flex flex-col">
      <DashHeader />
      <div className="flex relative">
        <Sidebar />
        <div className="w-[982px] pl-[52px] pt-[40px] absolute top-[112px] left-[300px]">
          <div className="flex gap-4 mb-[40px]">
            <Link to="/dashboard">
              <div className="text-[20px] font-[400] text-[#808080]">
                Dashboard
              </div>
            </Link>
            <i className="fa-solid fa-greater-than mt-2 "></i>
            <div className="text-[20px] font-[400] text-[#0267FF]">
              Borrower's Profile
            </div>
          </div>
          <div className="flex bg-blue-100 p-16 justify-between align-middle">
            <div className="flex flex-col">
              <h2 className="font-semibold text-base mb-8">
                {currentUser.fullname}
              </h2>
              <p className="text-[#666666] font-normal text-sm">
                {new Date(currentUser.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div>
              <select className="bg-[#0267FF] text-white p-2 px-2">
                <option className="font-medium text-xl" value="">
                  Change status
                </option>
                <option value="Successful">Successful</option>
                <option value="Pending">Pending</option>
                <option value="Declined">Declined</option>
              </select>
            </div>
          </div>

          <div className="p-16">
            <div className="flex gap-5 mb-8">
              <h3 className="w-32">Loan Amount:</h3>
              <p>{currentUser.loanAmount}</p>
            </div>
            <div className="flex gap-5 mb-8">
              <h3 className="w-32">Loan Status:</h3>

              {currentUser.eligibility ? (
                <p className="text-[#4ED273]">Successful</p>
              ) : (
                <p className="text-[#FF2727]">Declined</p>
              )}
            </div>
            <div className="flex gap-5 mb-8">
              <h3 className="w-32">Admin in charge:</h3>
              <p>Mabel Okeke</p>
            </div>
          </div>

          <div>
            <Link to="/borrower-data">
              <p className="flex p-16 gap-16 text-[#0267FF]">
                View Borrower's Data
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile
