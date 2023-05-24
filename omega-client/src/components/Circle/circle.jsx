import React from 'react'

const Circle = ({ slides, activeIndex, setActiveIndex }) => {
  return (
    <div className='circle'>
      <div className='flex items-center justify-center'>
        {slides.map((slide, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              index === activeIndex ? 'bg-blue-500' : 'bg-gray-400'
            } ${index === slides.length ? 'mr-0' : 'mr-4'}`}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default Circle
