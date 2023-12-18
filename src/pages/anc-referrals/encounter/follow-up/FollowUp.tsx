import PastRecordList from "@/components/shared/past-record-list/PastRecordList";
import FormLayout from "@/layout/FormLayout";
import { useState } from "react";
import ModuleStepping from "../../form-template/ModuleStepping.tsx";
import ComplaintsAndHistories from "../initialVisit/step/InitialComplaintsAndHistories.tsx";
import GynAndObsHistories from "../initialVisit/step/InitialGynAndObsHistories.tsx";
import ExaminationAndDiagnosis from "../initialVisit/step/InitialExaminationAndDiagnosis.tsx";
import Plan from "../initialVisit/step/InitialPlan.tsx";

const steppings = [
  "Complaint & Histories",
  "Gyn & Obs Histories",
  "Examination & Diagnosis",
  "Treatment Plan",
];

const FollowUp = () => {
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
          <ModuleStepping
            activeStep={activeStep}
            onStepClick={handleStepClick}
            steps={steppings}
          />
          <div className="flex flex-col gap-4 rounded">{steps[activeStep]}</div>
        </div>
      </FormLayout>
    </div>
  );
};

export default FollowUp;
