import React from 'react'
import DashHeader from '../../../components/Dashboard/DashHeader'
import Sidebar from '../../../components/Dashboard/Sidebar'
import Card from '../../../components/Card'
import Faq from './Faq'

const Help = () => {
  return (
    <div className="flex flex-col">
      <DashHeader />
      <div className="flex relative">
        <Sidebar />
        <section className="flex w-[982px] absolute top-[112px] left-[300px]">
          <section className="grid grid-cols-2 gap-7 pl-[52px] my-[40px] ">
            <div>
              <h3 className="text-[#0267FF] font-semibold text-[24px]">
                Help & Support
              </h3>
              <div className="mt-14">
                <img src="/assets/help/HelpImage.png" alt="" />
              </div>
            </div>

            <div>
              <h3 className="text-[#4D4D4D] font-medium text-md">
                Hi, How can we help you?
              </h3>
              <p className="text-sm font-normal text-[#999999] my-5">
                <em>
                  Kindly select the few options below, or use the search tool
                  <br />
                  16 above to seek any assistance
                </em>
              </p>

              <table class="table-auto border-collapse  bg-[#FAFCFF] text-gray-500 text-base">
                <tbody>
                  <tr>
                    <td class="border-sky-100  border px-4 py-4">
                      Getting Started
                    </td>
                    <td class="border border-sky-100 px-4 py-4">
                      User Account
                    </td>
                  </tr>
                  <tr>
                    <td class="border-sky-100 border px-4 py-4">Loan Type</td>
                    <td class=" border-sky-100 border px-4 py-4">
                      Loan Agreement
                    </td>
                  </tr>
                  <tr>
                    <td class="border-sky-100 border px-4 py-4">Interest</td>
                    <td class="border-sky-100 border px-4 py-4">
                      Guarantor details
                    </td>
                  </tr>
                  <tr>
                    <td class="border-sky-100 border px-4 py-4">
                      Special Loan Offer
                    </td>
                    <td class="border-sky-100 border px-4 py-4">Collateral</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Card className="pb-12">
              <div className="mt-12 px-8 font-semibold text-base text-[#666666]">
                <h2>Frequently Asked Questions</h2>
              </div>
              <Faq />
            </Card>
          </section>
        </section>
      </div>
    </div>
  );
}

export default Help
