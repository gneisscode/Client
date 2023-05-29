import React from 'react'
import LockIcon from '../../../components/LockIcon';
import Card from '../../../components/Card';
import PasswordBtn from '../../../components/PasswordBtn';


const VerificationCode = () => {
  return (
    <div>
      <LockIcon />
      <Card className="h-[506px]">
        <div className="ml-[2em] mt-[2em]"> Verification Code</div>
        <PasswordBtn text="Verify" className="ml-[2em] mt-[2em]" />
      </Card>
    </div>
  );
}

export default VerificationCode