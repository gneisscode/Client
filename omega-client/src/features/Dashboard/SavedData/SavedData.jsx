import React, { useState } from "react";
import DashHeader from "../../../components/Dashboard/DashHeader";
import Sidebar from "../../../components/Dashboard/Sidebar";
import Card from "../../../components/Card";
import Circle from "../../../components/Circle/circle";
import Button from "../../../components/Button";
import PersonalInfo from "./PersonalInfo";
import LoanInfo from "./LoanInfo";
import Collateral from "./Collateral";
import Guarantors from "./Guarantors";

const SavedData = () => {
  const slides = [0, 1, 2, 3];
  const [activeIndex, setActiveIndex] = useState(0);

  const steps = {
    0: {
      id: 0,
      form: <PersonalInfo />,
    },
    1: {
      id: 1,
      form: <LoanInfo />,
    },
    2: {
      id: 2,
      form: <Collateral />,
    },
    3: {
      id: 3,
      form: <Guarantors />,
    },
  };

  const step = steps[activeIndex];
  return (
    <div className="flex flex-col">
      <DashHeader />
      <div className="flex relative">
        <Sidebar />
        <section>
          <div>
            <div className="flex w-full mt-16">
              <Card className="min-h-[350px] absolute mt-[180px] ml-[350px] pb-[20px]">
                {step.form}
                <div className="mt-8"></div>
                <div className=" flex items-center justify-center w-full ">
                  <Circle
                    slides={slides}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}    
                  />
                </div>
              </Card>
            </div>
            <div className="grid grid-cols-2 justify-between items-center gap-10 mt-[750px] ml-[840px] pb-[90px]">
              {activeIndex !== 0 ? (
                <Button
                  className="bg-white text-[#0267FF] border border-[#0267FF] w-4/12"
                  label="Previous"
                  onClick={() => setActiveIndex((prev) => prev - 1)}
                />
              ) : (
                <div className="w-4/12"></div>
              )}
              <Button
                className={`text-white bg-[#0267FF] ${
                  activeIndex === 0 ? "w-4/12" : "w-4/12"
                }`}
                label={activeIndex === 3 ? "Ok" : "Next"}
                onClick={() =>
                  activeIndex === 3
                    ? setActiveIndex((prev) => prev - 1)
                    : setActiveIndex((prev) => prev + 1)
                }
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SavedData;
