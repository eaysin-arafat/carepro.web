import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import SubmitButton from "@/components/core/buttons/SubmitButton";
import Input from "@/components/core/form-elements/Input";
import Select from "@/components/core/form-elements/Select";
import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import ReviewOfSystemCardItem from "@/components/review-of-systems/CardItem";
import { useReadChiefComplaintByClientQuery } from "@/features/chief-complaint/chief-complaint-api";
import ReviewOfSystemCardGroup from "@/pages/anc-referrals/form-component/ReviewOfSystemCardGroup";
import PastEncounters from "@/pages/chief-complaints/create/PastEncounters";
import { useState } from "react";
import { Loader, PlusCircle } from "react-feather";

const Households = ({ toggler = () => {} }) => {
  const [familyMemberSelect, setFamilyMemberSelect] = useState(null);
  const [hivTestSelect, setHivTestSelect] = useState(null);
  const [hivResultSelect, setHivResultSelect] = useState(null);

  const { data, isLoading, status } = useReadChiefComplaintByClientQuery(
    "a1497272-3783-46f6-922a-08dbd06dc4d8"
  );

  return (
    <DefaultOpenModal isShow={true} title="Households" toggler={toggler}>
      <form>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
            <Select
              label="Family Member Type"
              value={familyMemberSelect}
              onChange={(e) => setFamilyMemberSelect(e.target.value)}
            >
              <option>Father</option>
              <option>Mother</option>
              <option>Child</option>
              <option>Other</option>
            </Select>

            <Input
              label="Other Family Member"
              placeholder="Enter Other family member"
              disabled={familyMemberSelect !== "Other"}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 md:col-span-2">
              <Input label="First Name" placeholder="Enter First Name" />
              <Input label="Surname" placeholder="Enter Surname" />
              <Input label="Age" placeholder="Enter age" type="number" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 md:col-span-2 lg:col-span-2">
              <Select
                label="HIV Tested"
                value={hivTestSelect}
                onChange={(e) => setHivTestSelect(e.target.value)}
              >
                <option>Yes</option>
                <option>No</option>
              </Select>

              <Select
                label="HIV Result"
                value={hivResultSelect}
                onChange={(e) => setHivResultSelect(e.target.value)}
                disabled={hivTestSelect !== "Yes"}
              >
                <option>Positive</option>
                <option>Negative</option>
                <option>Indeterminant</option>
                <option>Detectable</option>
                <option>No Detected</option>
              </Select>

              <Select label="On ART" disabled={hivResultSelect !== "Positive"}>
                <option>Yes</option>
                <option>No</option>
                <option>Unknown</option>
              </Select>
            </div>

            <div className="md:col-span-2 lg:col-span-2">
              <SubmitButton
                title="Add"
                icon={<PlusCircle size={14} />}
                className="py-1.5 text-base w-[fit-content] whitespace-nowrap gap-2"
              />

              <ReviewOfSystemCardGroup>
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

export default Households;
