import PastRecordList from "@/components/shared/past-record-list/PastRecordList";
import FormLayout from "@/layout/FormLayout";
import ComplaintsAndHistories from "./step/InitialComplaintsAndHistories.tsx";
import GynAndObsHistories from "./step/InitialGynAndObsHistories.tsx";
import { useState } from "react";
import ExaminationAndDiagnosis from "./step/InitialExaminationAndDiagnosis.tsx";
import Plan from "./step/InitialPlan.tsx";
import ModuleStepping from "../../form-template/ModuleStepping.tsx";

const steppings = [
  "Complaint & Histories",
  "Gyn & Obs Histories",
  "Examination & Diagnosis",
  "Treatment Plan",
];

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

export default InitialVisit;
