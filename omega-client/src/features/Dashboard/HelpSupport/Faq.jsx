import React, { useState } from 'react'

const Faq = () => {
  const faqItems = [
    {
      question: 'How can i determine a loan default?',
      answer:
        'Loan default can be determined when the borrowers is  financially incapable to pay back the loan. This can be because of his/her loan credit score or past history of loan defaulting. If you need further assistance ask a team member ',
    },
    {
      question: 'Financial advice to be given to borrower',
      answer: 'Answer 2',
    },
    {
      question: 'What type of loans are available',
      answer: 'Answer 3',
    },
    {
      question: 'Special loan offers for team members',
      answer: 'Answer 4',
    },
  ]

  const [expandedItems, setExpandedItems] = useState(faqItems)

  const toggleItem = (index) => {
    setExpandedItems((prevState) => ({
      expandedItems: {
        ...prevState.expandedItems,
        [index]: !prevState.expandedItems[index],
      },
    }))
  }

  return (
    <div className='mt-8 px-8'>
      <div>
        {expandedItems.map((item, index) => (
          <div key={index} className='bg-white px-4 border border-inherit'>
            <div onClick={() => toggleItem(index)} className='cursor-pointer'>
              {item.question}
            </div>

            <div>{item.answer}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Faq
