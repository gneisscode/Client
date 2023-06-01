import React from 'react'
import LockIcon from '../../../components/LockIcon';
import Card from '../../../components/Card'
import PasswordBtn from '../../../components/PasswordBtn'
import { Link } from 'react-router-dom';

const ChangePassword = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-10">
      <LockIcon />
      <h2 className="text-blue-600 text-2xl">Change Password</h2>
      <p className="text-xl pb-4">Kindly enter your new password</p>
      <div>
        <Card className="p-14 flex flex-col items-center gap-10 ">
          <input
            className="border border-blue-600 w-[589px] h-[61px] p-6"
            placeholder="New Password:"
          />
          <input
            className="border border-blue-600 w-[589px] h-[61px] p-6 mb-16"
            placeholder="Confirm New Password:"
          />
          <Link to="/success">
            <PasswordBtn text="Change Password" />
          </Link>
        </Card>
      </div>
    </div>
  );
}

export default ChangePassword