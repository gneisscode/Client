import React from 'react'
import DashHeader from '../../../components/Dashboard/DashHeader'
import Sidebar from '../../../components/Dashboard/Sidebar'
import Card from '../../../components/Card'
import Faq from './Faq'

const Help = () => {
  return (
    <div className='flex flex-col'>
      <DashHeader />
      <div className='flex'>
        <Sidebar />
        <section className='flex justify-center w-full'>
          <section className='grid grid-cols-2 gap-7 px-16 my-14 '>
            <div>
              <h3 className='text-[#0267FF] text-base font-semibold pl-8'>
                Help & Support
              </h3>
              <div className='mt-14'>
                <img src='/assets/help/HelpImage.png' alt='' />
              </div>
            </div>

            <div>
              <h3 className='text-[#4D4D4D] font-medium text-md'>
                Hi, How can we help you?
              </h3>
              <p className='text-sm font-normal text-[#999999] my-5'>
                <em>
                  Kindly select the few options below, or use the search tool
                  <br />
                  16 above to seek any assistance
                </em>
              </p>

              <div className='flex justify-items-center w-full rounded-sm'>
                <table class='border-collapse  bg-[#FAFCFF] text-gray-500 text-base'>
                  <tbody>
                    <tr>
                      <td class='border border-sky-100 border-b-2 px-8 '>
                        Getting Started
                      </td>

                      <td class='border border-sky-100 px-8 '>User Account</td>
                    </tr>
                    <tr>
                      <td class='border border-sky-100 px-8'>Loan Type</td>
                      <td class='border border-sky-100 px-8'>Loan Agreement</td>
                    </tr>
                    <tr>
                      <td class='border border-sky-100 px-8'>Interest</td>
                      <td class='border border-sky-100 px-8'>
                        Guarantor details
                      </td>
                    </tr>
                    <tr>
                      <td class='border border-sky-100 px-8'>
                        Special Loan Offer
                      </td>
                      <td class='border border-sky-100 px-8'>Collateral</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <Card>
              <div className='mt-12 px-8'>
                <h2>Frequently Asked Questions</h2>
              </div>
              <Faq />
            </Card>
          </section>
        </section>
      </div>
    </div>
  )
}

export default Help
