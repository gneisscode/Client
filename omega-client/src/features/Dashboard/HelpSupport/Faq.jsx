import React, { useState } from 'react'

const Faq = () => {
  const faqItems = [
    {
      question: 'How can I determine a loan default?',
      answer:
        'Loan default can be determined when the borrowers is  financially incapable to pay back the loan. This can be because of his/her loan credit score or past history of loan defaulting. If you need further assistance ask a team member.',
    },
    {
      question: 'Financial advice to be given to borrower?',
      answer:
        'Create a budget to manage your expenses and prioritize loan payments. Communicate with your lender if you are facing financial difficulties. They may offer alternative payment plans or options to help you stay on track.',
    },
    {
      question: 'What type of loans are available?',
      answer:
        'There are various types of loans available to meet different financial needs. Some common loan types include Personal loans: Used for various purposes, such as debt consolidation, home improvements, or major purchases. Auto loans: Specifically designed for purchasing vehicles. Mortgage loans: Used to finance the purchase of a home or property. Student loans: Intended to cover educational expenses for students.',
    },
    {
      question: 'Special loan offers for team members?',
      answer:
        'Yes. Team members may enjoy the benefits of special loan offers and lower interest rates, however terms and conditions apply. Please contact your lead administrator to find out more.',
    },
  ]

  const [currentQ, setCurrentQ] = useState(null)
  const [toggle, setToggle] = useState(true)
  const toggleItem = (idx) => {
    setToggle((prevState) => {
      if (prevState === false) {
        setCurrentQ(idx)
        return !toggle
      } else {
        setCurrentQ(null)
        return !toggle
      }
    })
  }

  return (
    <div className='mt-10 px-8'>
      <div>
        {faqItems.map((item, index) => (
          <div key={index} className='bg-white text-[#666666]'>
            <div
              onClick={() => toggleItem(index)}
              className='cursor-pointer border hover:ease-in hover:bg-[#FAFCFF] px-6 py-6 font-medium '
            >
              {item.question}
            </div>

            <div
              className={
                currentQ === index
                  ? 'px-6 py-2 font-normal text-[#949292]'
                  : 'hidden'
              }
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Faq
