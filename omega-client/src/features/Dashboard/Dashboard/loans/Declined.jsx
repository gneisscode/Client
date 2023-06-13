import React, { useContext, useEffect, useState } from 'react'
import DashHeader from '../../../../components/Dashboard/DashHeader'
import Sidebar from '../../../../components/Dashboard/Sidebar'
import { TfiAngleDown } from 'react-icons/tfi'
import { Link } from 'react-router-dom'
import { Context } from '../../../../context/Context'
import axios from 'axios'

const Declined = () => {
  const [loansDeclined, setLoansDeclined] = useState([])
  const { user } = useContext(Context)

  useEffect(() => {
    const getDeclinedLoans = async () => {
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
        console.log(response.data)
        console.log(response.data.data.loans)
        const loansList = response.data.data.loans

        const declinedLoans = loansList.filter(
          (loan) => loan.eligibility === false
        )
        setLoansDeclined(declinedLoans)
      } catch (error) {
        console.log(error)
      }
    }

    getDeclinedLoans()
  }, [user, user?.access_token])

  return (
    <div className='flex flex-col'>
      <DashHeader />
      <div className='flex '>
        <Sidebar />
        <div className='flex flex-col lg:w-[938px] lg:h-[fit] absolute top-[112px] left-[300px] ml-[52px] '>
          <div className='flex gap-4 mt-[40px]'>
            <Link to='/dashboard'>
              <div className='text-[20px] font-[400] text-[#808080]'>
                Dashboard
              </div>
            </Link>
            <img src='assets/dashboard/arrowdark.svg' alt='' />
            <div className='text-[20px] font-[400] text-[#0267FF]'>
              Loans generated
            </div>
          </div>
          <div className='lg:w-[938px] lg:h-[fit] bg-[#FAFCFF] border border-[#CCE1FF]  mt-[40px] mb-16'>
            <div className='flex justify-between'>
              <div className='mt-5 p-5'>
                <p className='font-[600] text-[20px] text-[#013E99]  '>
                  Loans Declined
                </p>
                <p className='font-[500] text-[16px] text-[#FF2727] mt-5'>
                  Total Amount: 4,587,541.28
                </p>
                <p className='font-[700] text-[14px] text-[#0252CC] mt-5'>
                  Last Month
                </p>
              </div>
              <div className='flex mt-10 p-10 mr-10 gap-2 items-center'>
                <p className='text-[#0252CC]'>Sort by</p>
                <TfiAngleDown />
                <p className='text-[#4D4D4D]'>Month</p>
              </div>
            </div>

            <div className='overflow-x-auto flex items-center justify-center mb-16'>
              <table className='min-w-full table-fixed border-collapse'>
                <thead>
                  <tr>
                    <th className='px-6 py-3 bg-[#E6F0FF] text-left font-[600] text-[#666666]'>
                      Borrower's Name
                    </th>
                    <th className='px-6 py-3 bg-[#E6F0FF] text-left font-[600] text-[#666666]'>
                      Date
                    </th>
                    <th className='px-6 py-3 bg-[#E6F0FF] text-left font-[600] text-[#666666]'>
                      Status
                    </th>
                    <th className='px-6 py-3 bg-[#E6F0FF] text-left font-[600] text-[#666666]'>
                      Credit Score
                    </th>
                    <th className='px-6 py-3 bg-[#E6F0FF] text-left font-[600] text-[#666666]'>
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {loansDeclined.map((loan, index) => (
                    <tr
                      key={loan._id}
                      className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                    >
                      <td className='px-6 py-4 font-[600] text-[16px]text-[#666666]'>
                        {loan.fullname}
                      </td>
                      <td className='px-6 py-4 font-[600] text-[16px]text-[#666666]'>
                        {new Date(loan.createdAt).toLocaleDateString()}
                      </td>
                      <td className='px-6 py-4 font-[600] text-[16px]text-[#666666]'>
                        <span className={`text-[#FF2727]`}>Declined</span>
                      </td>
                      ..
                      <td className='px-6 py-4 font-[600] text-[16px]text-[#666666]'>
                        {/* {loan.creditScore} */}
                      </td>
                      <td className='px-6 py-4 font-[600] text-[16px]text-[#666666]'>
                        {loan.loanAmount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Declined
