import React, {useState} from 'react'
import collateral from './collateral'
import Guarantors from './Guarantors'
import LoanInfo from './LoanInfo'
import SavedData from './SavedData'
import DashHeader from '../../../components/Dashboard/DashHeader'
import Sidebar from '../../../components/Dashboard/Sidebar'

const BorrowersSaved = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const steps = {
        0: {
          id: 0,
          form: <SavedData />,
        },
        1: {
          id: 1,
          form: <LoanInfo />,
        },
        2: {
          id: 2,
          
          form: <collateral />,
        },
        3: {
          id: 3,
          form: <Guarantors />,
        },
      }
    
    const step = steps[activeIndex]
  return (
    <div className="flex flex-col">
        <DashHeader />
        <div className="flex relative">
            <Sidebar />
            <div className="grid grid-cols-2 justify-between items-center gap-20 mt-16 pb-[147px]">
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
                    label={activeIndex === 3 ? "Save Data" : "Next"}
                    onClick={() =>
                    activeIndex === 3
                        ? setModal(true)
                        : setActiveIndex((prev) => prev + 1)
                    }
                />
        </div>
        </div>
    </div>
  )
}

export default BorrowersSaved