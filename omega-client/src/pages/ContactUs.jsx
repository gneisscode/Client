import React from 'react'
import HomeNav from '../components/HomeNav'
import Hamburger from '../components/Hamburger'

const ContactUs = () => {
  return (
    <div className="flex flex-col">
      <HomeNav />
      <Hamburger />

      <div className="flex w-[100%] pb-12">
        <div className="flex flex-col z-10 lg:pl-[80px] gap-[52px] lg:pt-[48px] px-4 lg:px-0 pt-4">
          <div>
            <div className="text-[32px] text-[#0267FF] font-[600]">
              Contact Us
            </div>
            <div className="text-[24px] font-400 text-[#808080] italic">
              Kindly reach out to us. we will get back to you as soon as we can
            </div>
          </div>

          <div className=" flex">
            <div className=" flex flex-col justify-center items-center lg:justify-start lg:items-start w-[100%] lg:w-[654px] lg:h-[fit] bg-[#FAFCFF] border border-[#9AC2FF] pl-[24px] gap-[48px] pt-8">
              <div className="text-[24px] text-[#4D4D4D] font-[600]">
                User Information
              </div>
              <input
                className="border border-[#0252CC] lg:w-[589px] h-[61px] p-6 rounded-[4px] outline-none"
                placeholder="Name"
              />
              <input
                className="border border-[#0252CC] lg:w-[589px] h-[61px] p-6 rounded-[4px] outline-none"
                placeholder="Email"
              />

              <input
                className="border border-[#0252CC] lg:w-[589px] h-[195px] p-6 mb-16 rounded-[4px] outline-none bg-[#E6F0FF]"
                placeholder="Message"
              />
            </div>
          </div>

          <button className=" w-[150px] lg:w-[308px] h-[61px] bg-[#0267FF] text-white rounded-[4px] text-white text-[24px] font-600">
            Send
          </button>
        </div>

        <div className="hidden lg:block lg:w-[270px] lg:h-[856px] bg-[#67A4FF] ml-auto pl-[31px] pb-8 z-0 relative">
          <div className="lg:w-[540px] lg:h-[530px] bg-blue-100 rounded-[8px] lg:absolute right-[26px] top-[156px] pl-[43px]">
            <div className="text-[48px] font-600 text-[#3585FF] mt-[28px] mb-[32px]">
              Info
            </div>

            <div className="flex flex-col gap-[58px]">
              <div className="flex text-[20px] font-600 text-[#4D4D4D] gap-[19.3px]">
                <img src="assets/contact/mail.svg" alt="" />
                <div>info@nodebt.co.uk</div>
              </div>
              <div className="flex text-[20px] font-600 text-[#4D4D4D] gap-[19.3px]">
                <img src="assets/contact/phone.svg" alt="" />
                <div>+2348160288037</div>
              </div>
              <div className="flex text-[20px] font-600 text-[#4D4D4D] gap-[19.3px]">
                <img src="assets/contact/address.svg" alt="" />
                <div>
                  12, Adewale Akinwumi Street,Grace Avenue, Ogudu, Lagos
                </div>
              </div>
              <div className="flex text-[20px] font-600 text-[#4D4D4D] gap-[19.3px]">
                <img src="assets/contact/clock.svg" alt="" />
                <div>9:00am- 5:00pm</div>
              </div>
            </div>
          </div>
          <div className="flex h-[100%] gap-[62px] items-end justify-start mb-6 mt-[-4em]">
            <img src="assets/contact/insta.svg" alt="" />
            <img src="assets/contact/fb.svg" alt="" />
            <img src="assets/contact/twitter.svg" alt="" />
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[100%] h-[fit] bg-[#0267FF] text-white">
        <div className="flex flex-col lg:flex-row lg:gap-[254px] lg:pl-[80px] mb-[114.44px]">
          <img
            src="assets/landingPage/omega-logo-white.png"
            alt=""
            className="w-[55px] h-[55px] self-center mt-12 lg:mt-0"
          />
          <div className="flex  lg:gap-[233px] gap-12 justify-center items-center pt-[91px]">
            <div className="flex flex-col justify-center items-center gap-[24px]">
              <div className="cursor-pointer">Products</div>
              <div className="cursor-pointer">No Debt</div>
              <div className="cursor-pointer">Loan</div>
              <div className="cursor-pointer">Loan default</div>
            </div>
            <div className="flex flex-col justify-center items-center gap-[24px] self-start">
              <div className="cursor-pointer">About</div>
              <div className="cursor-pointer">FAQS </div>
              <div className="cursor-pointer">Blog</div>
            </div>
            <div className="flex flex-col justify-center items-center gap-[24px]">
              <div className="cursor-pointer">Legal</div>
              <div className="cursor-pointer">Terms</div>
              <div className="cursor-pointer">Privacy</div>
              <div className="cursor-pointer">Security</div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center  w-[100%] pl-[80px]">
          <div className="flex flex-col justify-center items-center gap-[32px] px-4 lg:px-0 m-auto">
            <div className="text-[16px] font-[400] lg:w-[876.41px] text-center">
              No Debt unlock the potential of predictive modeling and credit
              risk management to optimize your loan portfolio and drives
              businesses growth
            </div>

            <div className="text-[14px] font-[400] lg:w-[488px] text-center">
              2020-2023 No Debt Global Limited - RC 1222200
            </div>
          </div>

          <img src="assets/contact/ellipse2.png" alt="" className="ml-auto" />
        </div>
      </div>
    </div>
  );
}

export default ContactUs