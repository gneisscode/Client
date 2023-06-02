import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {
  const location = useLocation()
  const [active, setActive] = useState('')
  console.log(active)

  useEffect(() => {
    setActive(location.pathname.split('/')[1])
  }, [location.pathname])

  return (
    <div className='lg:flex flex-col lg:min-h-[100%] hidden lg:min-w-[300px] bg-[#FAFCFF] fixed top-[112px] left-0'>
      <div className='flex flex-col justify-center pl-[40px] pt-[40px] gap-[40px]'>
        <Link to='/dashboard'>
          <div className='flex gap-[10px]'>
            <img
              src={
                active === 'dashboard' ||
                active === 'loans-refunded' ||
                active === 'loans-generated' ||
                active === 'loans-pending' ||
                active === 'loans-declined'
                  ? 'assets/dashboard/dash.svg'
                  : 'assets/dashboard/dashgrey.svg'
              }
              alt=''
            />
            <div
              className={` text-[18px] font-600 ${
                active === 'dashboard' ||
                active === 'loans-refunded' ||
                active === 'loans-generated' ||
                active === 'loans-pending' ||
                active === 'loans-declined'
                  ? 'text-[#0267FF]'
                  : 'text-[#999999]'
              } `}
            >
              Dashboard
            </div>
          </div>
        </Link>

        <Link to='/borrower-data'>
          <div className='flex gap-[10px]'>
            <img
              src={
                active === 'borrower-data' ||
                active === 'borrower-profile' ||
                active === 'borrower-eligibility' ||
                active === 'send-status'
                  ? 'assets/dashboard/datablue.svg'
                  : 'assets/dashboard/borrow.svg'
              }
              alt=''
            />
            <div
              className={` text-[18px] font-600 ${
                active === 'borrower-data' ||
                active === 'borrower-profile' ||
                active === 'borrower-eligibility' ||
                active === 'send-status'
                  ? 'text-[#0267FF]'
                  : 'text-[#999999]'
              } `}
            >
              Borrower's Data
            </div>
          </div>
        </Link>

        <Link to='/loan-applications'>
          <div className='flex gap-[10px]'>
            <img
              src={
                active === 'loan-applications'
                  ? 'assets/dashboard/loanblue.svg'
                  : 'assets/dashboard/loans.svg'
              }
              alt=''
            />
            <div
              className={` text-[18px] font-600 ${
                active === 'loan-applications'
                  ? 'text-[#0267FF]'
                  : 'text-[#999999]'
              } `}
            >
              Loan Applications
            </div>
          </div>
        </Link>

        <Link to='/history'>
          <div className='flex gap-[10px]'>
            <img
              src={
                active === 'history'
                  ? 'assets/dashboard/hisblue.svg'
                  : 'assets/dashboard/history.svg'
              }
              alt=''
            />
            <div
              className={` text-[18px] font-600 ${
                active === 'history' ? 'text-[#0267FF]' : 'text-[#999999]'
              } `}
            >
              History
            </div>
          </div>
        </Link>

        <Link to='/admin'>
          <div className='flex gap-[10px]'>
            <img
              src={
                active === 'admin' || active === 'add-admin'
                  ? 'assets/dashboard/adminblue.svg'
                  : 'assets/dashboard/admin.svg'
              }
              alt=''
            />
            <div
              className={` text-[18px] font-600 ${
                active === 'admin' || active === 'add-admin'
                  ? 'text-[#0267FF]'
                  : 'text-[#999999]'
              } `}
            >
              Admin
            </div>
          </div>
        </Link>

        <Link to='/settings'>
          <div className='flex gap-[10px]'>
            <img
              src={
                active === 'settings'
                  ? 'assets/dashboard/setblue.svg'
                  : 'assets/dashboard/settings.svg'
              }
              alt=''
            />
            <div
              className={` text-[18px] font-600 ${
                active === 'settings' ? 'text-[#0267FF]' : 'text-[#999999]'
              } `}
            >
              Settings
            </div>
          </div>
        </Link>

        <Link to='/help'>
          <div className='flex gap-[10px]'>
            <img
              src={
                active === 'help'
                  ? 'assets/dashboard/helpblue.svg'
                  : 'assets/dashboard/help.svg'
              }
              alt=''
            />
            <div
              className={` text-[18px] font-600 ${
                active === 'help' ? 'text-[#0267FF]' : 'text-[#999999]'
              } `}
            >
              Help & Support
            </div>
          </div>
        </Link>

        <div className='flex gap-[10px] mt-[-10px] mb-16 cursor-pointer'>
          <img src='assets/dashboard/logout.svg' alt='' />
          <div className='text-[#999999] text-[18px] font-600'>Log out</div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
