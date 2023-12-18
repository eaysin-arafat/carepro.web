import FormHeading from "@/components/core/form-heading/FormHeading";
import { ancEncounterPatientStatusModalTypes } from "@/constants/modal-types";
import { closeAddModal, openAddModal } from "@/features/modal/modal-slice";
// import useWindowWidth from "@/hooks/useWindow";
import { RootState } from "@/app/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import InitialAlreadyPaitentStatusForm from "./../forms/patient-status/InitialAlreadyPaitentStatusForm";

const InitialAlreadyPatientStatus = () => {
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

  const handlePaitentStatus = () => {
    dispatch(
      openAddModal({
        modalId: ancEncounterPatientStatusModalTypes.addPatientStatus,
        data: null,
      })
    );
  };

  return (
    <div className="shadow-md border border-borderColor mt-5 flex flex-col gap-4 px-4 py-4 rounded">
      {/* Gyn & Obs */}
      <FormHeading title="Patient Status" modalHandler={handlePaitentStatus} />
      {addModal?.modalId ===
        ancEncounterPatientStatusModalTypes.addPatientStatus && (
        <InitialAlreadyPaitentStatusForm toggler={closeModal} />
      )}
    </div>
  );
};

export default InitialAlreadyPatientStatus;
