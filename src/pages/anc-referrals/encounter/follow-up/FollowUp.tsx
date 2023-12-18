import PastRecordList from "@/components/shared/past-record-list/PastRecordList";
import FormLayout from "@/layout/FormLayout";
import { useState } from "react";
import ModuleStepping from "../../form-template/ModuleStepping.tsx";
import ComplaintsAndHistories from "../initialVisit/step/ComplaintsAndHistories.tsx";
import GynAndObsHistories from "../initialVisit/step/GynAndObsHistories.tsx";
import ExaminationAndDiagnosis from "../initialVisit/step/ExaminationAndDiagnosis.tsx";
import Plan from "../initialVisit/step/Plan.tsx";

const FollowUp = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      name: "Complaint & Histories",
      component: <ComplaintsAndHistories />,
    },
    {
      id: 2,
      name: "Gyn & Obs Histories",
      component: <GynAndObsHistories />,
    },
    {
      id: 3,
      name: "Examination & Diagnosis",
      component: <ExaminationAndDiagnosis />,
    },
    {
      id: 4,
      name: "Treatment Plan",
      component: <Plan />,
    },
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
            steps={steps}
          />
          <div className="flex flex-col gap-4 rounded">
            {steps[activeStep].component}
          </div>
        </div>
      </FormLayout>
    </div>
  );
};

export default FollowUp;
