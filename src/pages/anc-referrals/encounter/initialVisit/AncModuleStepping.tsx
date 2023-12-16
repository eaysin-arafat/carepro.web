import StepButton from "@/components/core/buttons/StepButton";
import React from "react";
import { ChevronRight } from "react-feather";

const AncModuleStepping = ({ activeStep, onStepClick }) => {
  const steps = [
    "Complaint & Histories",
    "Gyn & Obs Histories",
    "Examination & Diagnosis",
    "Treatment Plan",
  ];

  return (
    <div className="text-center shadow-md border rounded border-borderColor text-[#03045E] overflow-x-auto no-scrollbar font-semibold font-poppins">
      <div className="flex justify-evenly items-center min-w-[700px]">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <StepButton
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

export default AncModuleStepping;
