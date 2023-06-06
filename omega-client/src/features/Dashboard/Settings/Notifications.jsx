import React, { useState } from "react";

const Notifications = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [messageReceived, setMessageReceived] = useState(false);
  const [defaulterDetected, setDefaulterDetected] = useState(false);
  const [loanGenerated, setLoanGenerated] = useState(false);

  return (
    <div className="flex flex-col w-[100%]">
      <div className="text-[24px] font-[500] text-[#4D4D4D] mt-[56px] mb-[56px]">
        Notifications Settings
      </div>
      <ul className="flex flex-col gap-[60px]">
        <li>
          <div className="flex items-center gap-[40px]">
            <div className="text-[24px] font-[400] text-[#4D4D4D] w-[529px]">
              Get notified when a message is sent
            </div>
            <div className="flex items-center justify-center border border-[#CCE1FF] rounded-[60px] w-[107px] h-[35px]">
              <button
                className={`text-[24px] font-[400] text-[#4D4D4D] w-[50%] border-r border-[#CCE1FF] ${
                  messageSent ? "bg-blue-600 text-white rounded-l-full" : ""
                }`}
                onClick={() => {
                  setMessageSent(true);
                }}
              >
                Yes
              </button>
              <button
                className={`text-[24px] font-[400] text-[#4D4D4D] w-[50%]  border-[#CCE1FF] ${
                  messageSent===false ? "bg-blue-600 text-white rounded-r-full" : ""
                }`}
                onClick={() => setMessageSent(false)}
              >
                No
              </button>
            </div>
          </div>
        </li>

        <li>
          <div className="flex items-center gap-[40px]">
            <div className="text-[24px] font-[400] text-[#4D4D4D] w-[529px]">
              Get notified when a message is received
            </div>
            <div className="flex items-center justify-center border border-[#CCE1FF] rounded-[60px] w-[107px] h-[35px]">
              <button
                className={`text-[24px] font-[400] text-[#4D4D4D] w-[50%] border-r border-[#CCE1FF] ${
                  messageReceived ? "bg-blue-600 text-white rounded-l-full" : ""
                }`}
                onClick={() => {
                  setMessageReceived(true);
                }}
              >
                Yes
              </button>
              <button
                className={`text-[24px] font-[400] text-[#4D4D4D] w-[50%]  border-[#CCE1FF] ${
                  messageReceived===false
                    ? "bg-blue-600 text-white rounded-r-full"
                    : ""
                }`}
                onClick={() => setMessageReceived(false)}
              >
                No
              </button>
            </div>
          </div>
        </li>

        <li>
          <div className="flex items-center gap-[40px]">
            <div className="text-[24px] font-[400] text-[#4D4D4D] w-[529px]">
              Get notified when a defaulter is detected
            </div>
            <div className="flex items-center justify-center border border-[#CCE1FF] rounded-[60px] w-[107px] h-[35px]">
              <button
                className={`text-[24px] font-[400] text-[#4D4D4D] w-[50%] border-r border-[#CCE1FF] ${
                  defaulterDetected
                    ? "bg-blue-600 text-white rounded-l-full"
                    : ""
                }`}
                onClick={() => {
                  setDefaulterDetected(true);
                }}
              >
                Yes
              </button>
              <button
                className={`text-[24px] font-[400] text-[#4D4D4D] w-[50%]  border-[#CCE1FF] ${
                  defaulterDetected===false
                    ? "bg-blue-600 text-white rounded-r-full"
                    : ""
                }`}
                onClick={() => setDefaulterDetected(false)}
              >
                No
              </button>
            </div>
          </div>
        </li>

        <li>
          <div className="flex items-center gap-[40px]">
            <div className="text-[24px] font-[400] text-[#4D4D4D] w-[529px]">
              Get notified when a loan is generated
            </div>
            <div className="flex items-center justify-center border border-[#CCE1FF] rounded-[60px] w-[107px] h-[35px]">
              <button
                className={`text-[24px] font-[400] text-[#4D4D4D] w-[50%] border-r border-[#CCE1FF] ${
                  loanGenerated ? "bg-blue-600 text-white rounded-l-full" : ""
                }`}
                onClick={() => {
                  setLoanGenerated(true);
                }}
              >
                Yes
              </button>
              <button
                className={`text-[24px] font-[400] text-[#4D4D4D] w-[50%]  border-[#CCE1FF] ${
                  loanGenerated===false ? "bg-blue-600 text-white rounded-r-full" : ""
                }`}
                onClick={() => setLoanGenerated(false)}
              >
                No
              </button>
            </div>
          </div>
        </li>
      </ul>

      <div className="flex gap-4 justify-end items-center mt-[77px] mb-[47px] mr-[80px]">
        <button className="w-[195px] h-[61px] border border-[#FF2727] text-[#FF2727] text-[24px] font-[600] rounded">
          Cancel
        </button>
        <button className="w-[195px] h-[61px] text-white text-[24px] font-[600] bg-[#0267FF] rounded">
          Save
        </button>
      </div>
    </div>
  );
};

export default Notifications;
