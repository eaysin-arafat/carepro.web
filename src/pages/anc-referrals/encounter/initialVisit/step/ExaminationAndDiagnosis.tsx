import FormHeading from "@/components/core/form-heading/FormHeading";
import { ancEncounterExaminationAndDiagnosisModalTypes } from "@/constants/modal-types";
import { closeAddModal, openAddModal } from "@/features/modal/modal-slice";
// import useWindowWidth from "@/hooks/useWindow";
import { RootState } from "@/app/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import GeneralAssessment from "../examination-and-diagnosis/GeneralAssessment";
import SystemExamination from "../examination-and-diagnosis/SystemExamination";
import GlasgowComaScale from "../examination-and-diagnosis/GlasgowComaScale";
import ObstetricExamination from "../examination-and-diagnosis/ObstetricExamination";
import VaginalExamination from "../examination-and-diagnosis/VaginalExamination";
import Diagnosis from "../examination-and-diagnosis/diagnosis/Diagnosis";

const ExaminationAndDiagnosis = () => {
  // const [openModal, setOpenModal] = React.useState(false);

  // * Responsive Hokes
  // const w1300 = useWindowWidth(1300);
  // const w1000 = useWindowWidth(1000);

  const { addModal } = useSelector((state: RootState) => state.modal);

  const dispatch = useDispatch();

  // const toggleModal = () => {
  //   setOpenModal(!openModal);
  // };

  const closeModal = () => {
    dispatch(closeAddModal());
  };

  const handleGeneralAssessment = () => {
    dispatch(
      openAddModal({
        modalId:
          ancEncounterExaminationAndDiagnosisModalTypes.addGeneralAssessment,
        data: null,
      })
    );
  };

  const handleSystemExamination = () => {
    dispatch(
      openAddModal({
        modalId:
          ancEncounterExaminationAndDiagnosisModalTypes.addSystemExamination,
        data: null,
      })
    );
  };

  const handleGlasgowComaScale = () => {
    dispatch(
      openAddModal({
        modalId:
          ancEncounterExaminationAndDiagnosisModalTypes.addGlasgowComaScale,
        data: null,
      })
    );
  };

  const handleObstetricExamination = () => {
    dispatch(
      openAddModal({
        modalId:
          ancEncounterExaminationAndDiagnosisModalTypes.addObstetricExamination,
        data: null,
      })
    );
  };

  const handleVaginalExamination = () => {
    dispatch(
      openAddModal({
        modalId:
          ancEncounterExaminationAndDiagnosisModalTypes.addVaginalExamination,
        data: null,
      })
    );
  };

  const handleDiagnosis = () => {
    dispatch(
      openAddModal({
        modalId: ancEncounterExaminationAndDiagnosisModalTypes.addDiagnosis,
        data: null,
      })
    );
  };

  return (
    <div className="shadow-md border border-borderColor mt-5 flex flex-col gap-4 px-4 py-4 rounded">
      {/* Gyn & Obs */}
      <FormHeading
        title="General Assessment"
        modalHandler={handleGeneralAssessment}
      />
      {addModal?.modalId ===
        ancEncounterExaminationAndDiagnosisModalTypes.addGeneralAssessment && (
        <GeneralAssessment toggler={closeModal} />
      )}

      {/* Booking */}
      <FormHeading
        title="System Examination"
        modalHandler={handleSystemExamination}
        isEdit
      />
      {addModal?.modalId ===
        ancEncounterExaminationAndDiagnosisModalTypes.addSystemExamination && (
        <SystemExamination toggler={closeModal} />
      )}

      {/* Mother Details */}
      <FormHeading
        title="Glasgow Coma Scale"
        modalHandler={handleGlasgowComaScale}
        isEdit
      />
      {addModal?.modalId ===
        ancEncounterExaminationAndDiagnosisModalTypes.addGlasgowComaScale && (
        <GlasgowComaScale toggler={closeModal} />
      )}

      {/* Child Details */}
      <FormHeading
        title="Obstetric Examination"
        modalHandler={handleObstetricExamination}
      />
      {addModal?.modalId ===
        ancEncounterExaminationAndDiagnosisModalTypes.addObstetricExamination && (
        <ObstetricExamination toggler={closeModal} />
      )}

      {/* Past Antenatal Visits */}
      <FormHeading
        title="Vaginal Examination"
        modalHandler={handleVaginalExamination}
      />
      {addModal?.modalId ===
        ancEncounterExaminationAndDiagnosisModalTypes.addVaginalExamination && (
        <VaginalExamination toggler={closeModal} />
      )}

      {/* Past Antenatal Visits */}
      <FormHeading title="Diagnosis" modalHandler={handleDiagnosis} />
      {addModal?.modalId ===
        ancEncounterExaminationAndDiagnosisModalTypes.addDiagnosis && (
        <Diagnosis toggler={closeModal} />
      )}
    </div>
  );
};

export default ExaminationAndDiagnosis;
