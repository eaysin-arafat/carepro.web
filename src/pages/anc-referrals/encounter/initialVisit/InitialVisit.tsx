import PastRecordList from "@/components/shared/past-record-list/PastRecordList";
import FormLayout from "@/layout/FormLayout";
import ComplaintsAndHistories from "./step/ComplaintsAndHistories.tsx";
import AncModuleStepping from "./AncModuleStepping";
import GynAndObsHistories from "./step/GynAndObsHistories.tsx";
import { useState } from "react";
import ExaminationAndDiagnosis from "./step/ExaminationAndDiagnosis.tsx";
import Plan from "./step/Plan.tsx";

const InitialVisit = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    <ComplaintsAndHistories />,
    <GynAndObsHistories />,
    <ExaminationAndDiagnosis />,
    <Plan />,
  ];

  const handleStepClick = (index) => {
    setActiveStep(index);
  };

  return (
    <div>
      <FormLayout
        latestData={
          <PastRecordList
            title="Latest Encounter"
            isSubTitleShow
            subTitle="12-Dec-2023"
            isPastEncounter
          />
        }
      >
        <div className="col-span-6 mb-5">
          <AncModuleStepping
            activeStep={activeStep}
            onStepClick={handleStepClick}
          />
          <div className="shadow-md border border-borderColor mt-5 flex flex-col gap-4 px-4 py-4 rounded">
            {steps[activeStep]}
          </div>
        </div>
      </FormLayout>
    </div>
  );
};

export default InitialVisit;
