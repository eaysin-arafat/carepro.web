import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import Select from "@/components/core/form-elements/Select";
import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import { useReadChiefComplaintByClientQuery } from "@/features/chief-complaint/chief-complaint-api";
import FormDataRow from "@/pages/anc-referrals/form-component/FormDataRow";
import FormGroup from "@/pages/anc-referrals/form-component/FormGroup";
import PastEncounters from "@/pages/chief-complaints/create/PastEncounters";
import { useState } from "react";
import { Loader } from "react-feather";

const EntryAndSource = ({ toggler = () => {} }) => {
  const [typeValue, setTypeValue] = useState();

  const [activeSelect, setActiveSelect] = useState(false);

  const { data, isLoading, status } = useReadChiefComplaintByClientQuery(
    "a1497272-3783-46f6-922a-08dbd06dc4d8"
  );

  const handleSelect = (e) => {
    setTypeValue(e.target.value);
    setActiveSelect((prevActiveSelect) => !!e.target.value || prevActiveSelect);
  };

  return (
    <DefaultOpenModal isShow={true} title="Entry & Source" toggler={toggler}>
      <form>
        <div>
          <div className="flex flex-col gap-3">
            <Select
              label="Type of entry"
              value={typeValue}
              onChange={handleSelect}
              required
            >
              <option>Transfer in</option>
              <option>Silent transfer</option>
            </Select>

            {/* <div>
              <h1 className="input-group-title my-2 pb-1 border-b-[3px] border-solid border-borderColor dark:border-[#6B7280]">
                Contact Information
              </h1>
              <DataRow title="Cellphone Number" data="+260 766279936" />
              <DataRow title="House Number" data="House Number" />
              <DataRow title="Road" data="Mosi Road" />
              <DataRow title="Area" data="Kabulonga" />
              <DataRow title="Town" data="Lusaka" />
              <DataRow
                title="Landmarks & Direction
"
                data=""
              />
            </div> */}

            <FormDataRow />

            {activeSelect && (
              <FormGroup title="Source of Client">
                <Select label="Province" required>
                  <option>Transfer in</option>
                  <option>Silent transfer</option>
                </Select>

                <Select label="District" required>
                  <option>Transfer in</option>
                  <option>Silent transfer</option>
                </Select>

                <Select label="Facility" required>
                  <option>Transfer in</option>
                  <option>Silent transfer</option>
                </Select>
              </FormGroup>
            )}
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

export default EntryAndSource;
