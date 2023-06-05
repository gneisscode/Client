import React from 'react'

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  return (
    <section className='h-full w-screen z-[1000] bg-black/40 flex items-center justify-center fixed top-0 left-0 bg-opacity-40 '>
      <div className='modal-content'>
        <div className='flex items-center justify-between'>
          <div></div>
          <div>
            <button
              className='modal-close text-white text-lg'
              onClick={onClose}
            >
              X
            </button>
          </div>
        </div>
        {children}
      </div>
    </section>
  )
}

export default Modal
