import FormHeading from "@/components/core/form-heading/FormHeading";
import { ancEncounterPatientLocatorModalTypes } from "@/constants/modal-types";
import { closeAddModal, openAddModal } from "@/features/modal/modal-slice";
// import useWindowWidth from "@/hooks/useWindow";
import { RootState } from "@/app/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import EntryAndSource from "../forms/patient-locator/EntryAndSource";
import Households from "../forms/patient-locator/Households";
import NextOfKin from "../forms/patient-locator/NextOfKin";
import DisclosureITAndPNS from "../forms/patient-locator/DisclosureITAndPNS";

const PatientLocator = () => {
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

  const handleEntryAndSource = () => {
    dispatch(
      openAddModal({
        modalId: ancEncounterPatientLocatorModalTypes.addEntryAndSource,
        data: null,
      })
    );
  };

  const handleHouseholds = () => {
    dispatch(
      openAddModal({
        modalId: ancEncounterPatientLocatorModalTypes.addHouseholds,
        data: null,
      })
    );
  };

  const handleNextOfKin = () => {
    dispatch(
      openAddModal({
        modalId: ancEncounterPatientLocatorModalTypes.addNextOfKin,
        data: null,
      })
    );
  };

  const handleDisclosureOrITPNS = () => {
    dispatch(
      openAddModal({
        modalId: ancEncounterPatientLocatorModalTypes.addDisclosureOrITPNS,
        data: null,
      })
    );
  };

  return (
    <div className="shadow-md border border-borderColor mt-5 flex flex-col gap-4 px-4 py-4 rounded">
      {/* Gyn & Obs */}
      <FormHeading title="Entry & Source" modalHandler={handleEntryAndSource} />
      {addModal?.modalId ===
        ancEncounterPatientLocatorModalTypes.addEntryAndSource && (
        <EntryAndSource toggler={closeModal} />
      )}

      {/* Booking */}
      <FormHeading title="Households" modalHandler={handleHouseholds} isEdit />
      {addModal?.modalId ===
        ancEncounterPatientLocatorModalTypes.addHouseholds && (
        <Households toggler={closeModal} />
      )}

      {/* Mother Details */}
      <FormHeading title="Next of Kin" modalHandler={handleNextOfKin} isEdit />
      {addModal?.modalId ===
        ancEncounterPatientLocatorModalTypes.addNextOfKin && (
        <NextOfKin toggler={closeModal} />
      )}

      {/* Child Details */}
      <FormHeading
        title="Disclosure, IT & PNS"
        modalHandler={handleDisclosureOrITPNS}
      />
      {addModal?.modalId ===
        ancEncounterPatientLocatorModalTypes.addDisclosureOrITPNS && (
        <DisclosureITAndPNS toggler={closeModal} />
      )}
    </div>
  );
};

export default PatientLocator;
