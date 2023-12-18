import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import SubmitButton from "@/components/core/buttons/SubmitButton";
import Select from "@/components/core/form-elements/Select";
import Textarea from "@/components/core/form-elements/Textarea";
import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import { PlusCircle } from "react-feather";

const ReviewOfSystems = ({ toggler = () => {} }) => {
  return (
    <DefaultOpenModal isShow={true} title="Review of Systems" toggler={toggler}>
      <form>
        <div>
          <div className="flex flex-col gap-3">
            <Select label="History of Bleeding" className="py-1 rounded">
              <option value="">Respiratory System</option>
              <option value="">Gestro-Intestinal System</option>
              <option value="">Cardiovascular System</option>
              <option value="">Nervous System</option>
              <option value="">Genito-Urinary System</option>
              <option value="">Musculoskeletal System</option>
              <option value="">Integumentary System</option>
            </Select>

            <Textarea label="Note" placeholder="Comment" />

            <SubmitButton
              title="Add"
              icon={<PlusCircle size={14} />}
              className="py-1.5 text-base w-[fit-content] whitespace-nowrap gap-2"
            />
            <div>
              <div className="grid grid-cols-2 my-2">
                <p className="text-xs font-semibold">Physical System</p>
                <p className="text-xs font-semibold">Note</p>
              </div>
              <hr />

              <div className="grid grid-cols-2 my-2">
                <p className="text-xs font-semibold"></p>
                <p className="text-xs font-semibold"></p>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6" />

        {/* PAST ENCOUNTERS */}
        <PastRecordContainers>
          <div className="flex w-full justify-center items-center">
            <p className="text-[#1890FF] font-semibold font-poppins">
              No Past Encounters
            </p>
          </div>
        </PastRecordContainers>

        {/* BUTTONS */}
        <CancelAndAddButton toggler={toggler} />
      </form>
    </DefaultOpenModal>
  );
};

export default ReviewOfSystems;
