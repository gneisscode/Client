import React, { useState } from "react";
import LockIcon from "../../../components/LockIcon";
import Card from "../../../components/Card";

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newPassword === confirmPassword) {
      setNewPassword("");
      setConfirmPassword("");
      setSuccessMessage("Password changed successfully!");
      setErrorMessage("");
      setIsSubmitting(true);

      setTimeout(() => {
        setNewPassword("");
        setConfirmPassword("");
        setIsSubmitting(false);
      }, 3000);
    } else {
      setErrorMessage("New password and confirm password do not match.");
      setSuccessMessage("");
    }
  };

  return (
    <div class="grid justify-items-center p-10 ">
      <div className="flex flex-col items-center">
        <div>
          <LockIcon />
        </div>
        <div className="mt-4 text-center mt-5">
          <p class="text-blue-600 font-semibold text-3xl">Change Password</p>
          <p class="font-normal my-3 text-2xl">
            Kindly enter your new password
          </p>
        </div>
      </div>
      <div class="mt-8">
        <Card>
          <div class="p-10 m-10">
            <form onSubmit={handleSubmit}>
              <div class="mb-10">
                <label
                  class="text-gray-700 text-sm font-bold mb-2"
                  for="new-password"
                />

                <input
                  class="w-full px-3 py-2 border rounded-md focus:outline-none border-blue-700"
                  id="new-password"
                  type="password"
                  placeholder="Enter your new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />

                <label
                  class="block text-gray-700 text-sm font-semibold mb-2"
                  for="confirm-password"
                />

                <input
                  class="w-full mt-5 px-3 py-2 border rounded-md focus:outline-none border-blue-500 mt-2"
                  id="confirm-password"
                  type="password"
                  placeholder="Confirm your new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <button
                className="  mt-10 bg-blue-600 w-[589px] h-[61px] text-blue-600  text-white text-lg font-semibold rounded "
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Changing..." : "Change Password"}
              </button>
            </form>
            {successMessage && (
              <p className="text-green-600 mt-2">{successMessage}</p>
            )}
            {errorMessage && (
              <p className="text-red-600 mt-2">{errorMessage}</p>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ChangePassword;
