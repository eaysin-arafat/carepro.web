import FormHeading from "@/components/core/form-heading/FormHeading";
import { ancEncounterGynAndObsModalTypes } from "@/constants/modal-types";
import { closeAddModal, openAddModal } from "@/features/modal/modal-slice";
// import useWindowWidth from "@/hooks/useWindow";
import { RootState } from "@/app/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Bookings from "../gynAndObs/Bookings";
import GynAndObs from "../gynAndObs/GynAndObs";
import MotherDetails from "../gynAndObs/MotherDetails";
import ChildDetails from "../gynAndObs/ChildDetails";
import PastAntenatalVisits from "../gynAndObs/PastAntenatalVisits";

const GynAndObsHistories = () => {
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

  const handleBooking = () => {
    dispatch(
      openAddModal({
        modalId: ancEncounterGynAndObsModalTypes.addBooking,
        data: null,
      })
    );
  };

  const handleGynAndObs = () => {
    dispatch(
      openAddModal({
        modalId: ancEncounterGynAndObsModalTypes.addGynAndObs,
        data: null,
      })
    );
  };

  const handleMotherDetails = () => {
    dispatch(
      openAddModal({
        modalId: ancEncounterGynAndObsModalTypes.addMotherDetails,
        data: null,
      })
    );
  };

  const handleChildDetails = () => {
    dispatch(
      openAddModal({
        modalId: ancEncounterGynAndObsModalTypes.addChildDetails,
        data: null,
      })
    );
  };

  const handlePastAntenatalVisits = () => {
    dispatch(
      openAddModal({
        modalId: ancEncounterGynAndObsModalTypes.addPastAntenatalVisits,
        data: null,
      })
    );
  };

  return (
    <div className="shadow-md border border-borderColor mt-5 flex flex-col gap-4 px-4 py-4 rounded">
      {/* Gyn & Obs */}
      <FormHeading title="Booking" modalHandler={handleBooking} />
      {addModal?.modalId === ancEncounterGynAndObsModalTypes.addBooking && (
        <Bookings toggler={closeModal} />
      )}

      {/* Booking */}
      <FormHeading title="Gyn & Obs" modalHandler={handleGynAndObs} isEdit />
      {addModal?.modalId === ancEncounterGynAndObsModalTypes.addGynAndObs && (
        <GynAndObs toggler={closeModal} />
      )}

      {/* Mother Details */}
      <FormHeading
        title="Mother Details"
        modalHandler={handleMotherDetails}
        isEdit
      />
      {addModal?.modalId ===
        ancEncounterGynAndObsModalTypes.addMotherDetails && (
        <MotherDetails toggler={closeModal} />
      )}

      {/* Child Details */}
      <FormHeading title="Child Details" modalHandler={handleChildDetails} />
      {addModal?.modalId ===
        ancEncounterGynAndObsModalTypes.addChildDetails && (
        <ChildDetails toggler={closeModal} />
      )}

      {/* Past Antenatal Visits */}
      <FormHeading
        title="Past Antenatal Visits"
        modalHandler={handlePastAntenatalVisits}
      />
      {addModal?.modalId ===
        ancEncounterGynAndObsModalTypes.addPastAntenatalVisits && (
        <PastAntenatalVisits toggler={closeModal} />
      )}
    </div>
  );
};

export default GynAndObsHistories;
