import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import Select from "@/components/core/form-elements/Select";

import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import { useReadChiefComplaintByClientQuery } from "@/features/chief-complaint/chief-complaint-api";
import Section from "@/pages/anc-referrals/form-template/Section";
import PastEncounters from "@/pages/chief-complaints/create/PastEncounters";
import { Loader } from "react-feather";

const GeneralAssessment = ({ toggler = () => {} }) => {
  const { data, isLoading, status } = useReadChiefComplaintByClientQuery(
    "a1497272-3783-46f6-922a-08dbd06dc4d8"
  );

  return (
    <DefaultOpenModal
      isShow={true}
      title="General Assessment"
      toggler={toggler}
    >
      <form>
        <div>
          <div className="flex flex-col gap-3">
            <Section title="Physical Examination">
              <Select label="General Condition" required>
                <option>Good</option>
                <option>Stable</option>
                <option>Critical</option>
              </Select>
            </Section>

            <Section title="General Assessment">
              <Select
                label="Pallor"
                placeholder="Select pallor"
                className="py-1 rounded"
              >
                <option>Nil</option>
                <option>Mild</option>
                <option>Moderate</option>
                <option>Severe</option>
              </Select>

              <Select label="Edema" placeholder="Select edema">
                <option>Nill</option>
                <option>1+</option>
                <option>2+</option>
                <option>3+</option>
                <option>4+</option>
              </Select>

              <Select label="Clubbing">
                <option>Nill</option>
                <option>1+</option>
                <option>2+</option>
                <option>3+</option>
                <option>4+</option>
              </Select>

              <Select label="Jaundice">
                <option>Present</option>
                <option>Not Present</option>
              </Select>

              <Select label="Cyanosis">
                <option>Present</option>
                <option>Not Present</option>
              </Select>

              <Select label="Glucose">
                <option>Yes</option>
                <option>No</option>
              </Select>

              <Select label="Scoring">
                <option>+Ve</option>
                <option>-Ve</option>
                <option>Indeterminant</option>
              </Select>

              <Select label="Varicose Vein">
                <option>Present</option>
                <option>Not Present</option>
              </Select>

              <Select label="Varicose Vein">
                <option>Present</option>
                <option>Not Present</option>
              </Select>

              <Select label="Albumin">
                <option>Nil</option>
                <option>Trance</option>
                <option>+</option>
                <option>++</option>
                <option>+++</option>
                <option>++++</option>
              </Select>
            </Section>
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

export default GeneralAssessment;
