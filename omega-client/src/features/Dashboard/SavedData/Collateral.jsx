<<<<<<< HEAD
import React from "react";

const Collateral = () => {
  return (
    <>
    <div className="flex flex-col ">
      <div className="flex gap-[150px] mt-[58px] ml-[50px]">
        <div className="flex flex-col gap-[24px]">
          <input
            type="text"
            className="border border-[#0252CC] rounded w-[300px] h-[60px] p-4"
            placeholder="Cash equivalent"
          />
        </div>
        <div className="flex flex-col gap-[24px] ">
          <input
            type="text"
            className="border border-[#0252CC] rounded w-[300px] h-[60px] p-4"
            placeholder="Lands"
          />
        </div>
      </div>
      <div className="px-6 mt-24">
        <textarea
          className="bg-[#EEF5FC] border border-[#0267FF] w-[780px] h-[200px] px-4 py-4rounded"
          placeholder=" Buildings located in Abuja"
        ></textarea>
      </div>
    </div>

    </>  );
};

export default Collateral;
=======
import React from "react";

const Collateral = () => {
  return (
    <>
        <div className="flex flex-col ml-[80px] absolute top-[112px] left-[300px]">
      <div className="flex gap-[153px] mt-[58px]">
        <div className="flex flex-col gap-[24px]">
          <input
            type="text"
            className="border border-[#0252CC] rounded w-[400px] h-[60px] p-4"
            placeholder="Cash equivalent"
          />
        </div>
        <div className="flex flex-col gap-[24px] ">
          <input
            type="text"
            className="border border-[#0252CC] rounded w-[400px] h-[60px] p-4"
            placeholder="Lands"
          />
        </div>
      </div>
      <div className="px-8 mt-24">
        <textarea
          className="bg-[#EEF5FC] border border-[#0267FF] w-[983px] h-[237px] px-4 py-4 rounded"
          placeholder="5 Buildings located in Abuja"
        ></textarea>
      </div>
    </div>

    </>  );
};

export default Collateral;
>>>>>>> bc78dfc5ce3ae9ff78831522b74418fe9c334514
