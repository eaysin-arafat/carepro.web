import React from "react";
import { ChevronRight } from "react-feather";
import AncStepButton from "./AncStepButton";

const ModuleStepping = ({ activeStep, onStepClick, steps = [] }) => {
  return (
    <div className="text-center shadow-md border rounded border-borderColor text-[#03045E] overflow-x-auto no-scrollbar font-semibold font-poppins">
      <div className="flex justify-evenly items-center min-w-[700px]">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <AncStepButton
              text={step}
              isActive={index === activeStep}
              onClick={() => onStepClick(index)}
            />
            {index < steps.length - 1 && (
              <div>
                <ChevronRight size={18} />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ModuleStepping;
