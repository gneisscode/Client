import React from 'react'
import HomeNav from '../components/HomeNav'
import Hamburger from '../components/Hamburger';

const LandingPage = () => {
  return (
    <div className=" flex flex-col items-center w-[100%]">
      <HomeNav />
      <Hamburger />
      <div className="  bg-gray-50 flex flex-col-reverse lg:flex-row w-[95%] lg:w-[1178px] mt-8 lg:mt-[124px] rounded-md px-4 lg:rounded-tr-[30px] lg:rounded-bl-[30px] mb-12 lg:mr-[123px] lg:ml-[80px]">
        <div className=" flex flex-col lg:w-[581px] mt-4 lg:mt-[94px] lg:ml-[81px] gap-6 lg:gap-[40px] ">
          <div className=" text-[20px] lg:text-[40px] font-semibold text-blue-600 text-center lg:text-start">
            Experience the power of predictive analytics with our loan
            prediction software - No Debt
          </div>
          <div className="lg:w-[437.48px] lg:text-2xl text-[#666666] font-normal text-center lg:text-start">
            Get ready to explore our range of loan products and find the one
            that's right for your client.
          </div>
          <button className="bg-blue-700 mt-[32px] lg:w-[417px] h-[63px] text-white">
            Get Started &#8594;
          </button>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/assets/landingPage/lady.png"
            alt=""
            className=" w-[80%] lg:w-[658px] lg:h-[560px] mt-8 lg:mt-[94px] lg:ml-[118px]"
          />
        </div>
      </div>

      <div className=" flex flex-col w-[100%] bg-[#FAFCFF] pt-8 lg:pt-[100px] mt-[32px]">
        <div className="mb-8 lg:mb-0 underline lg:text-[32px] text-[24px] lg:ml-[80px] text-[#0267FF] self-center lg:self-start">
          Our Services
        </div>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center px-8 lg:px-[80px] gap-[63px] lg:mb-6 mb-10">
          <div className="flex items-center  w-[100%] lg:w-[60%] lg:gap-[64px] gap-8">
            <div className="border rounded-full border-[#0267FF] min-w-[80px] h-[80px] lg:w-[85px] lg:h-[80px] flex items-center justify-center text-[48px] font-medium text-[#0267FF]">
              1
            </div>
            <div className="lg:w-[627px] lg:h-[156px] lg:text-[32px] text-[#666666] flex items-center">
              Help reduce the rate of loan default by using advanced algorithms
              to analyze the borrowers data and giving predictions of default
              possibilities.
            </div>
          </div>

          <div className=" w-[200px] h-[200px] lg:w-[446px] lg:h-[446px] self-end">
            <img src="/assets/landingPage/bills.png" alt="" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center px-8 lg:px-[80px] gap-[63px] mb-6">
          <div className="flex flex-row-reverse lg:flex-row items-center  lg:w-[60%] lg:gap-[64px] gap-8">
            <div className="border rounded-full border-[#0267FF] w-[80px] h-[80px] flex items-center justify-center text-[48px] font-medium text-[#0267FF]">
              2
            </div>

            <div className=" w-[200px] h-[200px] lg:w-[446px] lg:h-[446px]">
              <img
                src="/assets/landingPage/wallet.png"
                alt=""
                className="rounded-tl-[48px] rounded-br-[48px]"
              />
            </div>
          </div>

          <div className=" w-[100%] lg:w-[627px] lg:h-[156px] lg:text-[32px] text-[#666666] flex items-center">
            Borrowers with financial difficulties will be flagged up sooner
            rather than later. So you can address issues before they arise – and
            before a customer defaults. This is proactive credit risk
            management.
          </div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-center justify-center px-8 lg:px-[80px] gap-[63px] lg:mt-12 mt-6">
          <div className="flex items-center w-[100%]  lg:w-[60%] lg:gap-[64px] gap-8">
            <div className="border rounded-full border-[#0267FF]  min-w-[80px] h-[80px]  lg:w-[85px] lg:h-[80px] flex items-center justify-center text-[48px] font-medium text-[#0267FF]">
              3
            </div>
            <div className="lg:w-[627px] lg:h-[156px] lg:text-[32px] text-[#666666] flex items-center">
              The prediction model helps the bank by minimizing the risk and
              reducing the number of defaulters.
            </div>
          </div>

          <div className=" w-[200px] h-[200px] lg:w-[446px] lg:h-[446px] self-end">
            <img
              src="/assets/landingPage/desk.png"
              alt=""
              className="rounded-tl-[48px] rounded-br-[48px]"
            />
          </div>
        </div>

        <button className="bg-[#3585FF] mt-[32px] w-[300px] h-[61px] lg:w-[419px] lg:h-[61px] text-white rounded-[6px] self-center mb-[134px] mt-[65px]">
          View All Services
        </button>
      </div>

      <div className="w-[100%] bg-white mt-[75px] pb-[167px] flex flex-col lg:flex-row justify-between items-center ">
        <div className=" flex flex-col gap-[48px] w-[100%] lg:pl-[80px] ">
          <div className=" flex flex-col w-[100%]  lg:w-[514px] h-[132px] bg-[#E6F0FF] justify-center items-center pb-4">
            <div className="flex gap-[39px] lg:min-w-[406.567px]">
              <div className="flex gap-[16px] justify-center items-center">
                <img src="assets/landingPage/comm1.png" alt="" />
                <div className="text-[#666666] lg:text-[20px] font-600">
                  Amaka Grace
                </div>
              </div>

              <div className=" flex justify-center items-center text-[#999999] text-[12px]">
                Tuesday 20 August 2023 by 12:PM
              </div>
            </div>

            <div className="text-[#999999] self-center w-[298px] h-[34px] text-[14px] mt-[20px]">
              I was able to monitor a loan given out to my borrowers this year ,
              Thanks to No debt.
            </div>
          </div>

          <div className=" flex flex-col w-[100%] lg:w-[514px] h-[132px] bg-[#E6F0FF] justify-center items-center pb-4">
            <div className="flex gap-[39px] lg:min-w-[406.567px]">
              <div className="flex gap-[16px] justify-center items-center">
                <img src="assets/landingPage/comm2.png" alt="" />
                <div className="text-[#666666] lg:text-[20px] font-600">
                  Matt Luke
                </div>
              </div>

              <div className=" flex justify-center items-center text-[#999999] text-[12px]">
                Wednesday 24 March 2023 by 2:AM
              </div>
            </div>

            <div className="text-[#999999] self-center w-[298px] h-[34px] text-[14px] mt-[20px]">
              Thank to No debt, i could predict loan defaulting from most of my
              company borrowers
            </div>
          </div>

          <div className=" flex flex-col w-[100%] lg:w-[514px] h-[132px] bg-[#E6F0FF] justify-center items-center pb-4">
            <div className="flex gap-[39px] lg:min-w-[406.567px]">
              <div className="flex gap-[16px] justify-center items-center">
                <img src="assets/landingPage/comm3.png" alt="" />
                <div className="text-[#666666] lg:text-[20px] font-600">
                  Tanzan Fred
                </div>
              </div>

              <div className=" flex justify-center items-center text-[#999999] text-[12px] ">
                Monday 1 June 2022 by 4:AM
              </div>
            </div>

            <div className="text-[#999999] self-center w-[298px] h-[34px] text-[14px] mt-[20px]">
              I was able to monitor a loan given out to my borrowers this year ,
              Thanks to No debt.
            </div>
          </div>

          <div className=" flex flex-col w-[100%] lg:w-[514px] h-[132px] bg-[#E6F0FF] justify-center items-center pb-4">
            <div className="flex gap-[36px] lg:min-w-[406.567px]">
              <div className="flex gap-[16px] justify-center items-center">
                <img src="assets/landingPage/comm4.png" alt="" />
                <div className="text-[#666666] lg:text-[20px] font-600">
                  Becky Tunde
                </div>
              </div>

              <div className=" flex justify-center items-center text-[#999999] text-[12px] ">
                Friday 01 February 2023 by 1pm
              </div>
            </div>

            <div className="text-[#999999] self-center w-[298px] h-[34px] text-[14px] mt-[20px]">
              I could not lose my job because i was able to detect a loan
              defaulter earlier and faster
            </div>
          </div>

          <div className=" flex flex-col w-[100%] lg:w-[514px] h-[132px] bg-[#E6F0FF] justify-center items-center pb-4">
            <div className="flex gap-[39px] lg:min-w-[406.567px]">
              <div className="flex gap-[16px] justify-center items-center">
                <img src="assets/landingPage/comm5.png" alt="" />
                <div className="text-[#666666] lg:text-[20px] font-600">
                  Scott Man
                </div>
              </div>

              <div className=" flex justify-center items-center text-[#999999] text-[12px] ">
                Friday 01 February 2023 by 1pm
              </div>
            </div>

            <div className="text-[#999999] self-center w-[298px] h-[34px] text-[14px] mt-[20px]">
              I was able to monitor my borrowers data and avoid default from
              them
            </div>
          </div>
        </div>

        <div className="bg-[#E6F0FF] lg:rounded-tl-[48px] lg:rounded-bl-[48px] lg:w-[628px] w-[100%] h-[895px] lg:pl-[107px] pt-[70px] mt-14 lg:mt-0 lg: lg:pr-4">
          <div className="flex flex-col gap-[35.51px] justify-center items-center lg:justify-start lg:items-start w-[100%]">
            <div className=" text-[30px] lg:text-[40px] font-medium text-[#1A1A1A]">
              3 Million + customers
            </div>

            <div className=" text-sm lg:text-[16px] font-normal lg:w-[475.58px] h-[115px] px-2 lg:px-0 text-justify lg:text-left ">
              Since its launch in 2020, more than 4,000,000 individuals have
              utilized No Debt to forecast loan outcomes and facilitate loan
              disbursements. This software has effectively mitigated the
              elevated risk associated with lending by providing reliable
              predictions and enabling responsible loan allocation.
            </div>

            <button className="self-start lg:w-[296px] w-[196px] h-[56px] bg-[#013E99] text-white text-[20px] mt-4 mb-[60px] self-center lg:self-start  ">
              Create free account
            </button>
          </div>

          <div className="flex gap-[20px] mb-[70.5px] justify-center lg:justify-start">
            <button className="flex w-[171px] h-[54px] gap-[0.5em] border border-[#DDDDDD] justify-center items-center rounded-[11px]">
              Get on iPhone
              <img
                src="assets/landingPage/apple.png"
                alt=""
                className=" w-[25px] h-[25px]"
              />
            </button>
            <button className="flex w-[171px] h-[54px] gap-[0.5em] border border-[#DDDDDD] justify-center items-center rounded-[11px]">
              Get on Android
              <img
                src="assets/landingPage/googleplay.png"
                alt=""
                className=" w-[25px] h-[25px]"
              />
            </button>
          </div>

          <div className="flex lg:gap-[1em] items-center mb-[41.3px] lg:w-[85%] w-[100%] gap-[0]">
            <img
              src="assets/landingPage/flutter.png"
              alt=""
              className=" w-1/3 lg:w-[167.86px] h-[30.57px]"
            />
            <img
              src="assets/landingPage/guardian.png"
              alt=""
              className="w-1/3 lg:w-[127.95px] h-[20.09px]"
            />
            <img
              src="assets/landingPage/paystack.png"
              alt=""
              className=" w-1/3 lg:w-[142px] h-[58.9px]"
            />
          </div>

          <div className="flex gap-[43.2px] items-center mb-[52px] justify-center lg:justify-start">
            <img
              src="assets/landingPage/fb.png"
              alt=""
              className=" w-[24.54px] h-[22.72px]"
            />
            <img
              src="assets/landingPage/twitter.png"
              alt=""
              className="  w-[24.54px] h-[22.72px]"
            />
            <img
              src="assets/landingPage/linkedin.png"
              alt=""
              className="  w-[24.54px] h-[22.72px]"
            />
          </div>

          <div className="lg:w-[420.33px] lg:text-[20px] font-[300] text-[#333333] text-center lg:text-left">
            Badmus house, Tijaniki Upkpene Close, Victoria Island,
            Lagos,Nigeria.
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[100%] h-[1273px] bg-[#0267FF] text-white">
        <img src="assets/landingPage/ellipse.png" alt="" className="self-end" />
        <div className="flex flex-col gap-[80px] border-b border-b-white px-4 lg:px-0  lg:pl-[80px] pb-[135px]">
          <div className="flex flex-col gap-[32px]">
            <div className=" text-[32px] font-[600]">Join Our Newsletter</div>
            <div className=" text-[24px] font-[600]">
              Subsribe to join our newsletter, where you get weekly emails from
              our teams
            </div>
          </div>

          <div className="flex lg:w-[1198px] w-[400px] self-center lg:self-start ">
            <input
              type="text"
              className="bg-[#9AC2FF] outline-none text-black p-4 lg:w-[794px] w-[60%] lg:h-[72px]"
            />
            <button className="bg-white text-[20px] font-[600] lg:w-[404px] w-[40%] lg:h-[72px] text-[#0267FF]">
              Subscribe
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-[254px] lg:pl-[80px] mb-[214.44px]">
          <img
            src="assets/landingPage/omega-logo-white.png"
            alt=""
            className="w-[55px] h-[55px] self-center lg:self-end mt-12 lg:mt-0"
          />
          <div className="flex  lg:gap-[233px] gap-12 justify-center items-center pt-[66.5px]">
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

        <div className="flex flex-col justify-center items-center gap-[32px] px-4 lg:px-0">
          <div className="text-[16px] font-[500] lg:w-[876.41px] text-center">
            No Debt unlock the potential of predictive modeling and credit risk
            management to optimize your loan portfolio and drives businesses
            growth
          </div>

          <div className="text-[14px] font-[500] lg:w-[488px] text-center">
            2020-2023 No Debt Global Limited - RC 1222200
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage