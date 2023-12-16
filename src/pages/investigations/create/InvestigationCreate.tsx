import { RootState } from "@/app/store";
import DefaultModal from "@/components/core/modal/DefaultModal";
import InvestigationCreateForm from "@/components/investigations/InvestigationCreateForm";
import { investigationModalTypes } from "@/constants/modal-types";
import { closeAddModal } from "@/features/modal/modal-slice";
import { useDispatch, useSelector } from "react-redux";

const InvestigationCreate = () => {
  const { addModal } = useSelector((store: RootState) => store.modal);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(closeAddModal());
  };

  return (
    <div>
      {addModal?.modalId === investigationModalTypes.addInvestigation && (
        <DefaultModal
          title="Investigation"
          className="dynamic_with"
          toggler={closeModal}
          size="7xl"
        >
          <InvestigationCreateForm />
        </DefaultModal>
      )}
    </div>
  );
};

export default InvestigationCreate;
