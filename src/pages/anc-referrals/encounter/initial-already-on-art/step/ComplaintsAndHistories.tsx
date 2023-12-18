import FormHeading from "@/components/core/form-heading/FormHeading";
import { ancEncounterComplaintModalTypes } from "@/constants/modal-types";
import { closeAddModal, openAddModal } from "@/features/modal/modal-slice";
// import useWindowWidth from "@/hooks/useWindow";
import { RootState } from "@/app/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import AncService from "../forms/compliants-and-hostories/AncService";
import PresentingComplaints from "../forms/compliants-and-hostories/PresentingComplaints";
import AncScranning from "../forms/compliants-and-hostories/AncScranning";
import TBConstitutionalSymptoms from "../forms/compliants-and-hostories/TBConstitutionalSymptoms";
import ReviewOfSystems from "../forms/compliants-and-hostories/ReviewOfSystems";
import PastMedicalHistory from "../forms/compliants-and-hostories/PastMedicalHistory";
import DrugAdherence from "../forms/compliants-and-hostories/DrugAdherence";
import ChronicConditions from "../forms/compliants-and-hostories/chronic-conditions/ChronicConditions";
import AncAllergies from "../forms/compliants-and-hostories/AncAllergies";
import HistoryOfBloodTransfusions from "../forms/compliants-and-hostories/HistoryOfBloodTransfusions";
import FamilySocial from "../forms/compliants-and-hostories/FamilySocial";

const ComplaintsAndHistories = () => {
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

  const handleAncService = () => {
    dispatch(
      openAddModal({
        modalId: ancEncounterComplaintModalTypes.addAncService,
        data: null,
      })
    );
  };

  const handlePresentingComplians = () => {
    dispatch(
      openAddModal({
        modalId: ancEncounterComplaintModalTypes.adPresentingCompliant,
        data: null,
      })
    );
  };

  const handleAncScreening = () => {
    dispatch(
      openAddModal({
        modalId: ancEncounterComplaintModalTypes.addAncScreening,
        data: null,
      })
    );
  };

  const handleTbConstitutionalSymptom = () => {
    dispatch(
      openAddModal({
        modalId: ancEncounterComplaintModalTypes.addTbConstitutionalSymptoms,
        data: null,
      })
    );
  };

  const handleReviewOfSystems = () => {
    dispatch(
      openAddModal({
        modalId: ancEncounterComplaintModalTypes.addReviewOfSystems,
        data: null,
      })
    );
  };

  const handlePastMedicalHistories = () => {
    dispatch(
      openAddModal({
        modalId: ancEncounterComplaintModalTypes.addPastMedicalHistories,
        data: null,
      })
    );
  };

  const handleDrugAdherence = () => {
    dispatch(
      openAddModal({
        modalId: ancEncounterComplaintModalTypes.addDrugAdherence,
        data: null,
      })
    );
  };

  const handleCronicConditions = () => {
    dispatch(
      openAddModal({
        modalId: ancEncounterComplaintModalTypes.addChronicConditions,
        data: null,
      })
    );
  };

  const handleAllergies = () => {
    dispatch(
      openAddModal({
        modalId: ancEncounterComplaintModalTypes.addAncAllergies,
        data: null,
      })
    );
  };

  const handleHistoryOfBloodTransfusions = () => {
    dispatch(
      openAddModal({
        modalId: ancEncounterComplaintModalTypes.addHistoryOfBloodTransfusion,
        data: null,
      })
    );
  };

  const handleFamilyAndSocial = () => {
    dispatch(
      openAddModal({
        modalId: ancEncounterComplaintModalTypes.addFamilySocial,
        data: null,
      })
    );
  };

  return (
    <div className="shadow-md border border-borderColor mt-5 flex flex-col gap-4 px-4 py-4 rounded">
      {/* ANC Service */}
      <FormHeading title="ANC Service" modalHandler={handleAncService} isEdit />
      {addModal?.modalId === ancEncounterComplaintModalTypes.addAncService && (
        <AncService toggler={closeModal} />
      )}

      {/* Presenting Complaints */}
      <FormHeading
        title="Presenting Complains"
        modalHandler={handlePresentingComplians}
      />
      {addModal?.modalId ===
        ancEncounterComplaintModalTypes.adPresentingCompliant && (
        <PresentingComplaints toggler={closeModal} />
      )}

      {/* ANC Screening */}
      <FormHeading
        title="ANC Screening"
        modalHandler={handleAncScreening}
        isEdit
      />
      {addModal?.modalId ===
        ancEncounterComplaintModalTypes.addAncScreening && (
        <AncScranning toggler={closeModal} />
      )}

      {/* TB & Constitutional Symptoms */}
      <FormHeading
        title="TB & Constitutional Symptoms"
        modalHandler={handleTbConstitutionalSymptom}
      />
      {addModal?.modalId ===
        ancEncounterComplaintModalTypes.addTbConstitutionalSymptoms && (
        <TBConstitutionalSymptoms toggler={closeModal} />
      )}

      {/* Review of Systems */}
      <FormHeading
        title="Review of Systems"
        modalHandler={handleReviewOfSystems}
      />
      {addModal?.modalId ===
        ancEncounterComplaintModalTypes.addReviewOfSystems && (
        <ReviewOfSystems toggler={closeModal} />
      )}

      {/* Past Medical History */}
      <FormHeading
        title="Past Medical Histories"
        modalHandler={handlePastMedicalHistories}
      />
      {addModal?.modalId ===
        ancEncounterComplaintModalTypes.addPastMedicalHistories && (
        <PastMedicalHistory toggler={closeModal} />
      )}

      {/* Drug Adherence */}
      <FormHeading title="Drug adherence" modalHandler={handleDrugAdherence} />
      {addModal?.modalId ===
        ancEncounterComplaintModalTypes.addDrugAdherence && (
        <DrugAdherence toggler={closeModal} />
      )}

      {/* Cronic/Non Cronic Conditons */}
      <FormHeading
        title="Chronic/Non Chronic Conditions"
        modalHandler={handleCronicConditions}
      />
      {addModal?.modalId ===
        ancEncounterComplaintModalTypes.addChronicConditions && (
        <ChronicConditions toggler={closeModal} />
      )}

      {/* Allergies */}
      <FormHeading title="Allergies" modalHandler={handleAllergies} />
      {addModal?.modalId ===
        ancEncounterComplaintModalTypes.addAncAllergies && (
        <AncAllergies toggler={closeModal} />
      )}

      {/* History of blood transfusions */}
      <FormHeading
        title="History of blood transfusions"
        modalHandler={handleHistoryOfBloodTransfusions}
      />
      {addModal?.modalId ===
        ancEncounterComplaintModalTypes.addHistoryOfBloodTransfusion && (
        <HistoryOfBloodTransfusions toggler={closeModal} />
      )}

      {/* Family & Social */}
      <FormHeading
        title="Family & Social"
        modalHandler={handleFamilyAndSocial}
      />
      {addModal?.modalId ===
        ancEncounterComplaintModalTypes.addFamilySocial && (
        <FamilySocial toggler={closeModal} />
      )}
    </div>
  );
};

export default ComplaintsAndHistories;
