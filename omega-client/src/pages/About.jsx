import React from 'react'
import HomeNav from '../components/HomeNav';
import Hamburger from '../components/Hamburger';

const About = () => {
  return (
    <div className="flex flex-col">
      <HomeNav />
      <Hamburger />

      <div className="flex flex-col lg:mx-[80px] lg:pt-[45px] lg:mb-12 gap-8 lg:gap-0">
        <div className="text-[32px] font-600 text-[#3585FF] lg:mb-[55px] ml-4 lg:ml-0 mt-4 lg:mt-0">
          About Us
        </div>
        <div className="flex flex-col w-[100%] lg:h-[400px] bg-[#FAFCFF] mb-8 lg:mb-0">
          <div className="flex items-center justify-center lg:w-[207px] lg:h-[64px] text-[24px] font-700 text-white bg-[#012966] lg:ml-[58px] lg:mt-[43px]">
            Our Mission
          </div>
          <div className="lg:pl-[210px] lg:pr-[129px] self-center pt-[35px] text-[24px] font-500 text-[#4D4D4D] lg:mt-[35px] px-4 lg:px-0">
            Our mission is to develop an innovative loan prediction design that
            leverages on advanced data analytics to accurately accessing credit
            worthiness of loan applicants. By Providing reliable predictions, to
            reduce risk of default and promoting financial inclusivity.
          </div>
        </div>

        <div className="flex flex-col w-[100%] lg:h-[450px] bg-[#012966] mb-8 lg:mb-0">
          <div className="flex items-center justify-center lg:w-[207px] lg:h-[64px] text-[24px] font-700 text-[#1A1A1A] bg-[#CCE1FF] lg:ml-[58px] lg:mt-[43px]">
            Our Vision
          </div>
          <div className="lg:pl-[210px] lg:pr-[129px] self-center pt-[35px] text-[24px] font-500 lg:mt-[35px] text-white px-4 lg:px-0 pb-4 lg:pb-0">
            The loan prediction app aims to develop a robust and accurate system
            that can predict the likelihood of loan approval for applicants
            based on various factors and historical data. Our vision is to
            provide financial institutions with a reliable tool for accessing
            loan applications, reducing manual effort and improving decision
            making accuracy which leads to customer satisfaction
          </div>
        </div>

        <div className="flex flex-col w-[100%] lg:h-[400px] bg-[#9AC2FF] mb-8 lg:mb-0">
          <div className="flex items-center justify-center lg:w-[255px] lg:h-[64px] text-[24px] font-700 text-white bg-[#012966] lg:ml-[58px] lg:mt-[43px]">
            Our Core Values
          </div>
          <div className="lg:pl-[210px] lg:pr-[129px] self-center pt-[35px] text-[24px] font-500 text-[#4D4D4D] lg:mt-[35px] px-8 lg:px-0 pb-4 lg:pb-0">
            <ul className="flex  lg:w-[80%] flex-wrap gap-[52px] items-center list-disc">
              <li>Accuracy</li>
              <li>Fairness</li>
              <li>Privacy and Security</li>
              <li>Accountability</li>
              <li>Continuous Improvement</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[100%] h-[fit] bg-[#0267FF] text-white ">
        <div className="flex flex-col lg:flex-row lg:gap-[254px] lg:pl-[80px] mb-[114.44px]">
          <img
            src="assets/landingPage/omega-logo-white.png"
            alt=""
            className="w-[55px] h-[55px] self-center mt-12 lg:mt-0"
          />
          <div className="flex  lg:gap-[233px] gap-12 justify-center items-center pt-[91px]">
            <div className="flex flex-col justify-center gap-[24px]">
              <div className="cursor-pointer">Products</div>
              <div className="cursor-pointer">No Debt</div>
              <div className="cursor-pointer">Loan</div>
              <div className="cursor-pointer">Loan default</div>
            </div>
            <div className="flex flex-col justify-center gap-[24px] self-start">
              <div className="cursor-pointer">About</div>
              <div className="cursor-pointer">FAQS </div>
              <div className="cursor-pointer">Blog</div>
            </div>
            <div className="flex flex-col justify-center gap-[24px]">
              <div className="cursor-pointer">Legal</div>
              <div className="cursor-pointer">Terms</div>
              <div className="cursor-pointer">Privacy</div>
              <div className="cursor-pointer">Security</div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center  w-[100%] pl-[80px]">
          <div className="flex flex-col justify-center items-center gap-[32px] px-4 lg:px-0 m-auto">
            <div className="text-[16px] font-[500] lg:w-[876.41px] text-center">
              Omega- unlock the potential of predictive modeling and credit risk
              management to optimize your loan portfolio and drives businesses
              growth
            </div>

            <div className="text-[14px] font-[500] lg:w-[488px] text-center">
              2020-2023 Omega Global Limited - RC 1222200
            </div>
          </div>

          <img src="assets/contact/ellipse2.png" alt="" className="ml-auto" />
        </div>
      </div>
    </div>
  );
}

export default About