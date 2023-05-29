import React from 'react'

const Security = () => {
  return (
    <div>
      <div className="text-[24px] font-[500] text-[#4D4D4D] mt-[40px] mb-[20px]">
        Password Settings
      </div>
      <div className="font-[400] text-[24px] italic text-[#999999]">
        Make sure a strong password is used, this is to ensure maximum security
        of your data
      </div>
      <div className="flex flex-col gap-[48px] mt-[43px] mb-[111px]">
        <input
          type="text"
          className="w-[462px] h-[60px] border border-[#666666] p-4 bg-[#FAFCFF] rounded "
          placeholder="Old Password"
        />
        <input
          type="text"
          className="w-[462px] h-[60px] border border-[#666666] p-4 bg-[#FAFCFF] rounded "
          placeholder="New Password"
        />
        <input
          type="text"
          className="w-[462px] h-[60px] border border-[#666666] p-4 bg-[#FAFCFF] rounded "
          placeholder="Confirm New Password"
        />
      </div>

      <button className="w-[462px] h-[61px] bg-[#0267FF] text-[24px] font-[600] text-white rounded ">
        Change Password
      </button>
    </div>
  );
}

export default Security