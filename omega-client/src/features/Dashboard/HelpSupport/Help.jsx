import React from 'react'
import DashHeader from '../../../components/Dashboard/DashHeader'
import Sidebar from '../../../components/Dashboard/Sidebar'
import Card from '../../../components/Card'
import Faq from './Faq'

const Help = () => {
  return (
    <div className='flex flex-col'>
      <DashHeader />
      <div className='flex relative'>
        <Sidebar />
        <section className='flex w-[982px] absolute top-[112px] left-[300px]'>
          <section className=' gap-7 pl-[52px] my-[40px] '>
            <div>
              <h3 className='text-[#0267FF] font-semibold text-[24px]'>
                Help & Support
              </h3>
              <div className='flex justify-center my-11'>
                <img src='/assets/help/HelpImage.png' alt='' />
              </div>
            </div>

            <Card className='pb-12'>
              <div className='mt-12 px-8 font-semibold text-base text-[#666666]'>
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
