import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import SubmitButton from "@/components/core/buttons/SubmitButton";
import DatePicker from "@/components/core/form-elements/CustomDatePicker";
import Input from "@/components/core/form-elements/Input";
import Select from "@/components/core/form-elements/Select";
import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import { useReadChiefComplaintByClientQuery } from "@/features/chief-complaint/chief-complaint-api";
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
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 items-center justify-center">
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

              <Input label="Child Name" placeholder="Enter Child Name" />
            </div>

            <div className="flex gap-2 items-center justify-center">
              <Select label="Child Sex">
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

              <Select label="Last TC Result">
                <option>+Ve</option>
                <option>-Ve</option>
              </Select>
            </div>

            <div className="flex gap-2 items-center justify-center">
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

            <SubmitButton
              title="Add"
              icon={<PlusCircle size={14} />}
              className="py-1.5 text-base w-[fit-content] whitespace-nowrap gap-2"
            />
            <div>
              <div className="grid grid-cols-8 gap-1 my-2">
                <p className="form-submitted-data-list">Birth Outcome</p>
                <p className="form-submitted-data-list">Child Name</p>
                <p className="form-submitted-data-list">Birth Weight</p>
                <p className="form-submitted-data-list">Child Sex</p>
                <p className="form-submitted-data-list">Last TC Date</p>
                <p className="form-submitted-data-list">Last TC Result</p>
                <p className="form-submitted-data-list">Child Care Number</p>
                <p className="form-submitted-data-list">
                  Date child turns or turned 18 months
                </p>
              </div>
              <hr />

              <div className="grid grid-cols-10 my-2">
                <p className="form-submitted-data-list"></p>
                <p className="form-submitted-data-list"></p>
                <p className="form-submitted-data-list"></p>
                <p className="form-submitted-data-list"></p>
                <p className="form-submitted-data-list"></p>
                <p className="form-submitted-data-list"></p>
                <p className="form-submitted-data-list"></p>
                <p className="form-submitted-data-list"></p>
              </div>
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
