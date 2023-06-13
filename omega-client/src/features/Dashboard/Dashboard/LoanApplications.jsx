import React, { useEffect, useState, useContext } from 'react'
import DashHeader from '../../../components/Dashboard/DashHeader'
import Sidebar from '../../../components/Dashboard/Sidebar'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Context } from '../../../context/Context'

const LoanApplications = () => {
  const { user } = useContext(Context)
  const [data, SetData] = useState([
    {
      'Borrowers Name': 'Blessing Effiong',
      Date: '15/02/23',
      Status: 'Successful',
      'Credit Score': 520,
      Amount: '#5,000,000',
    },

    {
      'Borrowers Name': 'Blessing Effiong',
      Date: '15/02/23',
      Status: 'Pending',
      'Credit Score': 520,
      Amount: '#5,000,000',
    },

    {
      'Borrowers Name': 'Blessing Effiong',
      Date: '15/02/23',
      Status: 'Declined',
      'Credit Score': 520,
      Amount: '#5,000,000',
    },
  ])
  const [loans, setLoans] = useState([])
  const [error, setError] = useState(false)
  const [loanData, setLoanData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const loans = axios.create({
        baseURL: `https://nodebtdev.onrender.com/api`,
      })
      if (user && user.access_token) {
        try {
          const config = {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
            },
          }
          const response = await loans.get('/loans/company-loans', config)
          const loansList = response.data.data.loans
          setLoanData(loansList)
          console.log(response.data)
        } catch (error) {
          console.log(error)
        }
      } else {
        setError(true)
      }
    }

    fetchData()
  }, [user, user?.access_token])

  return (
    <div className='flex flex-col'>
      <DashHeader />
      <div className='flex relative'>
        <Sidebar />
        <div className='pl-[52px] py-[40px] w-[982px] font-semibold text-[#666666] absolute top-[112px] left-[300px]'>
          <div className='w-[982px]'>
            <h4 className='text-[#0267FF] font-[600] text-[24px] w-[408px]'>
              Loan Applications
            </h4>
          </div>
          <div className=' justify-center items-center mt-8 grid grid-cols-5 p-2 gap-10 bg-[#E6F0FF] px-12 text-[16px] w-[982px]  h-[51px]'>
            <h6>Borrowers Name</h6>
            <h6>Date</h6>
            <h6>Status</h6>
            <h6>Credit Score</h6>
            <h6>Amount</h6>
          </div>
          {loanData.map((dt) => {
            return (
              <Link to={`/borrower-profile/${dt._id}`} key={dt._id}>
                <div className=' justify-center items-center mt-6 grid grid-cols-5 p-2 gap-10 bg-[#FAFCFF] px-12 text-[16px] w-[982px] h-[50px] text-[#666666]'>
                  <p>{dt.fullname}</p>
                  <p>{new Date(dt.createdAt).toLocaleDateString()}</p>
                  {dt.eligibility === true ? (
                    <p className='text-[#4ED273]'>Successful</p>
                  ) : (
                    <p className='text-[#FF2727]'>Declined</p>
                  )}
                  <p>{dt['Credit Score']}</p>
                  <p>{dt.loanAmount}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default LoanApplications
