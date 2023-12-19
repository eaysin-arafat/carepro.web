import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import Input from "@/components/core/form-elements/Input";
import Select from "@/components/core/form-elements/Select";
import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import { useReadChiefComplaintByClientQuery } from "@/features/chief-complaint/chief-complaint-api";
import PastEncounters from "@/pages/chief-complaints/create/PastEncounters";
import { useState } from "react";
import { Loader } from "react-feather";

const NextOfKin = ({ toggler = () => {} }) => {
  const [nextKinTypeSelect, setNextKinTypeSelect] = useState(null);

  const { data, isLoading, status } = useReadChiefComplaintByClientQuery(
    "a1497272-3783-46f6-922a-08dbd06dc4d8"
  );

  return (
    <DefaultOpenModal isShow={true} title="Households" toggler={toggler}>
      <form>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3">
            <div className="grid grid-cols-2 col-span-3 gap-3">
              <Select
                label="Family Member Type"
                value={nextKinTypeSelect}
                onChange={(e) => setNextKinTypeSelect(e.target.value)}
              >
                <option>Provider</option>
                <option>Srpporter</option>
                <option>Gurdian</option>
                <option>Patient-other</option>
                <option>Neighbor</option>
                <option>Parent</option>
                <option>Other</option>
              </Select>

              <Input
                label="If other type"
                disabled={nextKinTypeSelect !== "Other"}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 col-span-3 gap-3">
              <Input
                label="First Name"
                placeholder="Enter First Name"
                defaultValue="Benson"
              />
              <Input
                label="Surname"
                placeholder="Enter Surname"
                defaultValue="Malunga"
              />
              <Input
                label="House/Plot Number"
                placeholder="Enter House/Plot Number"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 col-span-3 gap-3">
              <Input label="Street name" defaultValue="Benson" />
              <Input label="Township/Compound" defaultValue="Malunga" />
              <Input label="Chief/Headman" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 col-span-3 gap-3">
              <div className="col-span-1">
                <Select label="Code">
                  <option>ZM(+260)</option>
                </Select>
              </div>

              <div className="col-span-2">
                <Input
                  label="Cellphone Number"
                  placeholder="Enter Cellphone Number"
                  defaultValue="977872489"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 col-span-3 gap-3">
              <div className="col-span-1">
                <Select label="Code">
                  <option>ZM(+260)</option>
                </Select>
              </div>

              <div className="col-span-2">
                <Input
                  label="Other Cellphone Number"
                  placeholder="Enter Other Cellphone Number"
                  defaultValue="977872489"
                />
              </div>
            </div>

            <div className="col-span-3">
              <Input
                label="Email address"
                placeholder="Email address"
                type="email"
              />
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

export default NextOfKin;
