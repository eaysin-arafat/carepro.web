import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import DatePicker from "@/components/core/form-elements/CustomDatePicker";
import Input from "@/components/core/form-elements/Input";
import Select from "@/components/core/form-elements/Select";
import Textarea from "@/components/core/form-elements/Textarea";
import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import { useReadChiefComplaintByClientQuery } from "@/features/chief-complaint/chief-complaint-api";
import PastEncounters from "@/pages/chief-complaints/create/PastEncounters";
import { Loader } from "react-feather";

const CounsellingService = ({ toggler = () => {} }) => {
  const { data, isLoading, status } = useReadChiefComplaintByClientQuery(
    "a1497272-3783-46f6-922a-08dbd06dc4d8"
  );

  return (
    <DefaultOpenModal isShow={true} title="Counselling" toggler={toggler}>
      <form>
        <div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 items-center justify-center">
              <Select
                label="Type of Counselling"
                placeholder="Select Type of Counselling"
              >
                <option>EAC</option>
                <option>Nutrition</option>
                <option>Other</option>
              </Select>

              <Input
                label="Other Type of Counselling"
                placeholder="Enter Other Type of Counselling"
              />
            </div>

            <div className="flex gap-2 items-center justify-center">
              <Input
                label="Session Number"
                placeholder="Enter Session Number"
              />

              <DatePicker
                label="Review Date"
                onChange={() => {}}
                name="review-date"
                placeholder="Enter Review Date"
              />
            </div>

            <Textarea label="Advice Given" placeholder="Enter Advice Given" />
          </div>
          <hr className="my-6" />

          {/* PAST RECORD CONTAINERS */}
          <PastRecordContainers>
            {(isLoading || status === "pending") && (
              <div className="flex w-full justify-center items-center">
                <Loader size={40} className="animate-spin" />
              </div>
            )}

            {data?.map((item, index) => (
              <PastEncounters key={index} data={item} />
            ))}
          </PastRecordContainers>

          {/* BUTTONS */}
          <CancelAndAddButton toggler={toggler} />
        </div>
      </form>
    </DefaultOpenModal>
  );
};

export default CounsellingService;
