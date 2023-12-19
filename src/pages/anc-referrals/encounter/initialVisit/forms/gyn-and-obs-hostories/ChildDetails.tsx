import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import SubmitButton from "@/components/core/buttons/SubmitButton";
import DatePicker from "@/components/core/form-elements/CustomDatePicker";
import Input from "@/components/core/form-elements/Input";
import Select from "@/components/core/form-elements/Select";
import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import ReviewOfSystemCardItem from "@/components/review-of-systems/CardItem";
import { useReadChiefComplaintByClientQuery } from "@/features/chief-complaint/chief-complaint-api";
import ReviewOfSystemCardGroup from "@/pages/anc-referrals/form-template/ReviewOfSystemCardGroup";
import PastEncounters from "@/pages/chief-complaints/create/PastEncounters";
import { Loader, PlusCircle } from "react-feather";

const ChildDetails = ({ toggler = () => {} }) => {
  const { data, isLoading, status } = useReadChiefComplaintByClientQuery(
    "a1497272-3783-46f6-922a-08dbd06dc4d8"
  );

  return (
    <DefaultOpenModal isShow={true} title="Baby Details" toggler={toggler}>
      <form>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <Select label="Birth Outcome" placeholder="Select Birth Outcome">
              <option>Alive and healthy</option>
              <option>Alive but chronically ill</option>
              <option>Still born</option>
              <option>Died shortly after birth</option>
              <option>Died shortly after birth</option>
              <option>Died under 5</option>
              <option>Died after 5</option>
            </Select>

            <Input label="Birth Weight" placeholder="Enter Birth Weight" />

            <Input label="Child Name" required />

            <Select label="Child Sex" required>
              <option>Male</option>
              <option>Femail</option>
              <option>Others</option>
            </Select>

            <DatePicker
              label="Last TC Date"
              onChange={() => {}}
              name="tc-date"
              placeholder="Enter Last TC Date"
            />

            <Select label="Last TC Result" required>
              <option>+Ve</option>
              <option>-Ve</option>
            </Select>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 md:col-span-2 lg:col-span-3">
              <Input
                label="Child Card Number"
                placeholder="Enter Child Card Number"
              />
              <DatePicker
                label="Date child turns or turned 18 months"
                onChange={() => {}}
                name="child-turns-date"
                placeholder="Enter Date child turns or turned 18 months"
              />
            </div>

            <div className="lg:col-span-3 md:col-span-2">
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
                <ReviewOfSystemCardItem />
                <ReviewOfSystemCardItem />
              </ReviewOfSystemCardGroup>
            </div>
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

export default ChildDetails;
