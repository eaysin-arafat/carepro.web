import FormHeading from "@/components/core/form-heading/FormHeading";
import { ancEncounterPlanModalTypes } from "@/constants/modal-types";
import { closeAddModal, openAddModal } from "@/features/modal/modal-slice";
// import useWindowWidth from "@/hooks/useWindow";
import { RootState } from "@/app/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CounsellingService from "../forms/plan/CounsellingService";
import ScreeningAndPrevention from "../forms/plan/ScreeningAndPrevention";
import TreatmentPlan from "../forms/plan/TreatmentPlan";

const Plan = () => {
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

  const handleCounsellingService = () => {
    dispatch(
      openAddModal({
        modalId: ancEncounterPlanModalTypes.addCounsellingService,
        data: null,
      })
    );
  };

  const handleScreeningAndPrevention = () => {
    dispatch(
      openAddModal({
        modalId: ancEncounterPlanModalTypes.addScreeningAndPrevention,
        data: null,
      })
    );
  };

  const handleTreatmentPlan = () => {
    dispatch(
      openAddModal({
        modalId: ancEncounterPlanModalTypes.addTreatmentPlan,
        data: null,
      })
    );
  };

  return (
    <div className="shadow-md border border-borderColor mt-5 flex flex-col gap-4 px-4 py-4 rounded">
      {/* Gyn & Obs */}
      <FormHeading
        title="Counselling Service"
        modalHandler={handleCounsellingService}
      />
      {addModal?.modalId ===
        ancEncounterPlanModalTypes.addCounsellingService && (
        <CounsellingService toggler={closeModal} />
      )}

      {/* Booking */}
      <FormHeading
        title="Screening & Prevention"
        modalHandler={handleScreeningAndPrevention}
        isEdit
      />
      {addModal?.modalId ===
        ancEncounterPlanModalTypes.addScreeningAndPrevention && (
        <ScreeningAndPrevention toggler={closeModal} />
      )}

      {/* Mother Details */}
      <FormHeading
        title="Treatment Plan"
        modalHandler={handleTreatmentPlan}
        isEdit
      />
      {addModal?.modalId === ancEncounterPlanModalTypes.addTreatmentPlan && (
        <TreatmentPlan toggler={closeModal} />
      )}
    </div>
  );
};

export default Plan;
