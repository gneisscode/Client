import React, { useState } from 'react'
import DashHeader from '../../../../components/Dashboard/DashHeader'
import Sidebar from '../../../../components/Dashboard/Sidebar'
import Card from '../../../../components/Card'
import Button from '../../../../components/Button'
import Circle from '../../../../components/Circle/circle'
import PersonalInfo from './PersonalInfo'
import Gurarantors from './Gurarantors'
import Loan from './Loan'
import Collateral from './Collateral'
import Modal from '../../../../components/Modal/modal'

const BorrowersData = () => {
  const slides = [0, 1, 2, 3]

  const [activeIndex, setActiveIndex] = useState(0)
  const [modal, setModal] = useState(true)

  const steps = {
    0: {
      id: 0,
      title: 'Personal and contact Information',
      form: <PersonalInfo />,
    },
    1: {
      id: 1,
      title: 'Loan Information',
      form: <Loan />,
    },
    2: {
      id: 2,
      title: 'Collateral Information',
      form: <Collateral />,
    },
    3: {
      id: 3,
      title: 'Guarantor’s Information',
      form: <Gurarantors />,
    },
  }

  const step = steps[activeIndex]
  return (
    <div className='flex flex-col'>
      <DashHeader />
      <div className='flex '>
        <Sidebar />
        <Modal isOpen={modal} onClose={() => setModal(false)}>
          <section className='w-[500px] bg-slate-200 p-12 flex flex-col items-center justify-center'>
            <p className='text-black text-center mb-10 font-md text-xl'>
              Borrower's data has been saved. Kindly preview data
            </p>
            <Button
              className='text-white bg-[#0267FF] w-64'
              label='Preview'
              onClick={() => console.log('clicked')}
            />
            <div>
              <Button
                className='text-red-600 w-64 mt-5'
                label='Cancel'
                onClick={() => console.log('clicked')}
              />
            </div>
          </section>
        </Modal>
        <section className='flex justify-center w-full'>
          <div>
            <div className='my-14'>
              <h3 className='text-[#0267FF] text-base font-semibold'>
                Input Borrower's Data
              </h3>
              <p>Carefully input the borrowers details</p>
            </div>
            <div className='flex w-full mt-16'>
              <Card className='min-h-[700px] relative'>
                <div className='mt-12 mb-16 px-8'>
                  <h2>{step.title}</h2>
                </div>
                {step.form}
                <div className='mt-8'></div>
                <div className='bottom-10 absolute flex items-center justify-center w-full'>
                  <Circle
                    slides={slides}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                  />
                </div>
              </Card>
            </div>
            <div className='grid grid-cols-2 justify-between items-center gap-20 mt-16'>
              {activeIndex !== 0 ? (
                <Button
                  className='bg-white text-[#0267FF] border border-[#0267FF] w-4/12'
                  label='Previous'
                  onClick={() => setActiveIndex((prev) => prev - 1)}
                />
              ) : (
                <div className='w-4/12'></div>
              )}
              <Button
                className={`text-white bg-[#0267FF] ${
                  activeIndex === 0 ? 'w-4/12' : 'w-4/12'
                }`}
                label={activeIndex === 3 ? 'Save Data' : 'Next'}
                onClick={() =>
                  activeIndex === 3
                    ? setModal(true)
                    : setActiveIndex((prev) => prev + 1)
                }
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default BorrowersData
