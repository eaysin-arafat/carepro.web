import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import Input from "@/components/core/form-elements/Input";
import Select from "@/components/core/form-elements/Select";
import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import { useReadChiefComplaintByClientQuery } from "@/features/chief-complaint/chief-complaint-api";
import PastEncounters from "@/pages/chief-complaints/create/PastEncounters";
import { Loader } from "react-feather";

const ScreeningAndPrevention = ({ toggler = () => {} }) => {
  const { data, isLoading, status } = useReadChiefComplaintByClientQuery(
    "a1497272-3783-46f6-922a-08dbd06dc4d8"
  );

  return (
    <DefaultOpenModal
      isShow={true}
      title="Screening & Prevention"
      toggler={toggler}
    >
      <form>
        <div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 items-center justify-center">
              <Select
                label="Malaria Dose"
                placeholder="Select Malaria Dose"
                className="py-3 rounded"
              >
                <option>ITN issued</option>
                <option>ITN used</option>
                <option>SP DOT given</option>
              </Select>

              <Input
                label="Malaria Does No."
                placeholder="Enter Malaria Dose No."
              />
            </div>

            <div className="flex gap-2 items-center justify-center">
              <Select label="Tetanus" className="py-1 rounded">
                <option>Pregnancy fully TT protected</option>
                <option>TT does given</option>
              </Select>

              <Input
                label="Tetanus Dose No."
                placeholder="Enter Tetanus Dose No."
              />
            </div>

            <div className="flex gap-2 items-center justify-center">
              <Select label="Anemia svreening" className="py-1 rounded">
                <option>Screened</option>
                <option>Iron given</option>
                <option>FeSO4 given</option>
              </Select>

              <Select label="Syphilis" className="py-1 rounded">
                <option>RRR test done</option>
                <option>Test positive</option>
                <option>Benz Pen given</option>
              </Select>

              <Select label="Hepatitis B" className="py-1 rounded">
                <option>HepB test done</option>
                <option>Test positive</option>
                <option>Treated</option>
              </Select>
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

export default ScreeningAndPrevention;
