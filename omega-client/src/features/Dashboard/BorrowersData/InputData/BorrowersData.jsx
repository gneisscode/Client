import React, { useState } from 'react'
import DashHeader from '../../../../components/Dashboard/DashHeader'
import Sidebar from '../../../../components/Dashboard/Sidebar'
import Card from '../../../../components/Card'
import TextField from '../../../../components/TextField'
import Button from '../../../../components/Button'
import Circle from '../../../../components/Circle/circle'

const BorrowersData = () => {
  const slides = [0, 1, 2, 3]

  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <div className='flex flex-col'>
      <DashHeader />
      <div className='flex '>
        <Sidebar />
        <section className='flex justify-center w-full'>
          <div>
            <div className='my-20'>
              <h3 className='text-[#0267FF] text-base my-1.5 font-semibold'>
                Input Borrower's Data
              </h3>
              <p>Carefully input the borrowers details</p>
            </div>
            <div className='flex w-full mt-20'>
              <Card>
                <div className='mt-12 mb-16 px-8'>
                  <h2>Personal and Contact Information</h2>
                </div>
                <div className='grid grid-cols-2 w-full gap-7 px-8'>
                  <TextField
                    className='bg-white border-[#0252CC] '
                    placeholder='Name'
                  />
                  <TextField
                    className='bg-white border-[#0252CC]'
                    placeholder='Phone Number'
                  />
                  <TextField
                    className='bg-white border-[#0252CC]'
                    placeholder='Email'
                  />
                  <TextField
                    className='bg-white border-[#0252CC]'
                    placeholder='Date of Birth'
                  />
                  <TextField
                    className='bg-white border-[#0252CC]'
                    placeholder='Address'
                  />
                  <TextField
                    className='bg-white border-[#0252CC]'
                    placeholder='National Identity Number'
                  />
                  <TextField
                    className='bg-white border-[#0252CC]'
                    placeholder='Employment'
                  />
                  <TextField
                    className='bg-white border-[#0252CC]'
                    placeholder='Income per month'
                  />
                </div>

                <div className='my-8'></div>
                <div>
                  <Circle
                    slides={slides}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                  />
                </div>
              </Card>
            </div>
            <div className='flex justify-between mt-16'>
              <div></div>
              <div>
                <Button
                  className='text-white bg-[#0267FF] w-48'
                  label='Next'
                  onClick={() => console.log('clicked')}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default BorrowersData
