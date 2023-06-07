import LockIcon from '../../../components/LockIcon'
import Card from '../../../components/Card'
import PasswordBtn from '../../../components/PasswordBtn'
import React, { useState, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Context } from '../../../context/Context'
import axios from 'axios'

const VerificationCode = () => {
  const { user } = useContext(Context)
  const location = useLocation()
  const id = location.pathname.split('/')[2]

  const [otp, setOtp] = useState(['', '', '', '', ''])
  const [formData, setFormData] = useState({
    fiveDigitToken: '',
  })

  const handleChange = (e, index) => {
    const newOtp = [...otp]
    newOtp[index] = e.target.value
    setOtp(newOtp)

    const updatedToken = newOtp.join('')
    setFormData({ ...formData, fiveDigitToken: parseInt(updatedToken) })
    console.log(formData)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.post(`/password-reset/${id}`, formData)

      if (response.data === 'Token Validated') {
        window.location.replace(`/change-password/${id}`)
      }
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex flex-col items-center gap-4 p-10'>
      <LockIcon />
      <h2 className='text-blue-600 text-2xl'>Enter Verification Code</h2>
      <p className='text-xl pb-4'>Kindly enter the code sent to your mail</p>
      <div>
        <form onSubmit={handleSubmit}>
          <Card className='p-14 flex flex-col items-center gap-10 '>
            <div className='flex justify-center mt-5'>
              {otp.map((digit, index) => (
                <input
                  key={index}
                  className='w-12 h-12 text-3xl border border-blue-300 rounded-full mx-2 text-center'
                  type='text'
                  maxLength='1'
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                />
              ))}
            </div>
            <p className='p-6 mb-10'>
              Didn't get the code?{' '}
              <a href='#' className='text-blue-600'>
                Resend
              </a>
            </p>

            <Link to='/change-password'>
              <PasswordBtn text='Verify' />
            </Link>
          </Card>
        </form>
      </div>
    </div>
  )
}

export default VerificationCode
