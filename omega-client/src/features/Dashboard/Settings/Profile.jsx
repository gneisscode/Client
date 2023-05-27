import React from 'react'

const Profile = () => {
  return (
    <div>
      <div className="pt-[46px] text-[24px] text-[#4D4D4D] font-[500] ">
        Personal Information
      </div>
      <div className="flex flex-col gap-[48px]  border-b pb-[106px] mt-[51px]">
        <div className="flex gap-[59px]">
          <input
            type="text"
            className="w-[462px] h-[60px] border border-[#666666] bg-[#FAFCFF] p-4 rounded"
            placeholder="Name of Organization"
          />
          <input
            type="text"
            className="w-[462px] h-[60px] border border-[#666666] bg-[#FAFCFF] p-4 rounded"
            placeholder="Email Address"
          />
        </div>
        <div className="flex gap-[59px]">
          <input
            type="text"
            className="w-[462px] h-[60px] border border-[#666666] bg-[#FAFCFF] p-4 rounded"
            placeholder="Number of Staffs"
          />
          <input
            type="text"
            className="w-[462px] h-[60px] border border-[#666666] bg-[#FAFCFF] p-4 rounded"
            placeholder="Identity Number"
          />
        </div>

        <div className="flex gap-[59px]">
          <input
            type="text"
            className="w-[462px] h-[60px] border border-[#666666] bg-[#FAFCFF] p-4 rounded"
            placeholder="Type of Organization"
          />
          <input
            type="text"
            className="w-[462px] h-[60px] border border-[#666666] bg-[#FAFCFF] p-4 rounded"
            placeholder="Websites"
          />
        </div>
      </div>
    </div>
  );
}

export default Profile