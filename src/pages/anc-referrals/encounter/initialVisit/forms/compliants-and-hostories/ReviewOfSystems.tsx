import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import SubmitButton from "@/components/core/buttons/SubmitButton";
import Select from "@/components/core/form-elements/Select";
import Textarea from "@/components/core/form-elements/Textarea";
import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import ReviewOfSystemCardItem from "@/components/review-of-systems/CardItem";
import ReviewOfSystemCardGroup from "@/pages/anc-referrals/form-component/ReviewOfSystemCardGroup";
import { PlusCircle } from "react-feather";

const ReviewOfSystems = ({ toggler = () => {} }) => {
  return (
    <DefaultOpenModal isShow={true} title="Review of Systems" toggler={toggler}>
      <form>
        <div>
          <div className="flex flex-col gap-3">
            <Select label="Review of System" placeholder="System" required>
              <option>Respiratory System</option>
              <option>Gestro-Intestinal System</option>
              <option>Cardiovascular System</option>
              <option>Nervous System</option>
              <option>Genito-Urinary System</option>
              <option>Musculoskeletal System</option>
              <option>Integumentary System</option>
            </Select>

            <Textarea label="Note" placeholder="Comment" required />

            <SubmitButton
              title="Add"
              icon={<PlusCircle size={14} />}
              className="py-1.5 text-base w-[fit-content] whitespace-nowrap gap-2"
            />

            <ReviewOfSystemCardGroup>
              <ReviewOfSystemCardItem />
              <ReviewOfSystemCardItem />
              <ReviewOfSystemCardItem />
              <ReviewOfSystemCardItem />
            </ReviewOfSystemCardGroup>
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
