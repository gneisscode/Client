import React, {useState} from 'react'

const Profile = () => {
   const [profilePic, setProfilePic] = useState("assets/dashboard/pp.png");
   const [selectedFile, setSelectedFile] = useState(null);

   const handleFileChange = (event) => {
     const file = event.target.files[0];
     const reader = new FileReader();

     reader.onloadend = () => {
       setProfilePic(reader.result);
     };

     if (file) {
       reader.readAsDataURL(file);
       setSelectedFile(file);
     }
   };

   const removeProfilePic = () => {
     setProfilePic("assets/dashboard/dummy.png");
     setSelectedFile(null);
   };
  return (
    <div>
      <div className="flex flex-col">
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

      <div className="flex flex-col">
        <div className="pt-[46px] text-[24px] text-[#4D4D4D] font-[500] ">
          Admin Information
        </div>

        <div className="mt-[22px]">Change admin information</div>
        <div className="flex flex-col gap-[48px]  border-b pb-[106px] mt-[51px] mb-[56px]">
          <div className="flex gap-[59px]">
            <input
              type="text"
              className="w-[462px] h-[60px] border border-[#666666] bg-[#FAFCFF] p-4 rounded"
              placeholder="Name"
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
              placeholder="Position"
            />
            <input
              type="text"
              className="w-[462px] h-[60px] border border-[#666666] bg-[#FAFCFF] p-4 rounded"
              placeholder="Phone Number"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className=" text-[24px] text-[#4D4D4D] font-[500] ">
          Profile Picture
        </div>

        <img
          src={profilePic}
          alt=""
          className="mt-[59px] mb-[43px] w-[184px] h-[184px] rounded-full"
        />
        <button className="self-start text-[#0267FF] text-[20px] font-[500] mb-[12px]">
          <label htmlFor="profilePicInput" className='cursor-pointer'>Change Profile Picture</label>
        </button>
        <input
          type="file"
          id="profilePicInput"
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
        <button
          className="self-start text-[#0267FF] text-[20px] font-[500]"
          onClick={removeProfilePic}
        >
          Remove Profile Picture
        </button>
      </div>

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
}

export default Profile