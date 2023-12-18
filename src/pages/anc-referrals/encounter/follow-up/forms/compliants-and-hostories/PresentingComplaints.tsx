import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import Textarea from "@/components/core/form-elements/Textarea";
import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import { useReadChiefComplaintByClientQuery } from "@/features/chief-complaint/chief-complaint-api";
import { Loader } from "react-feather";
import PastEncounters from "@/pages/chief-complaints/create/PastEncounters";
import Select from "@/components/core/form-elements/Select";
import DateInput from "@/components/core/form-elements/DatePicker";

const hivRiskScanningArr = [
  "In the last 6 months have you been sexually active?",
  "last 6 months have you have had vaginal or anal sex without condom with more than 1 person",
  "In the last 6 months have you used condoms consistently during sex?",
  "In the last 6 months how many people have you had sex with?",
  "Had an STI based on self report,lab test,syndromic STI treatment in the last 6 months?",
  "In the last 6 months have you used PEP following potential exposure to HIV?",
  "In the last 6 months have you Shared injection material/equipment with other people",
  "In the last 6 months have you had a sex parter who Is living with HIV",
  "In the last 6 months have you had a sex parter who Injects drugs?",
  "In the last 6 months have you had a sex parter who Is a sex worker",
  "In the last 6 months have you had a sex parter who Is a man who has sex with men",
  "In the last 6 months have you had a sex parter who is transgender?",
  "last 6 months have you had a sex parter who Has sex with multiple partners without condoms",
  "Is your patner HIV infected?",
  "If infected what was their last viral load result?",
  "Is she/he on ART?",
];

const PresentingComplaints = ({ toggler }) => {
  const { data, isLoading, status } = useReadChiefComplaintByClientQuery(
    "a1497272-3783-46f6-922a-08dbd06dc4d8"
  );

  return (
    <DefaultOpenModal
      title="Presenting Complains"
      isShow={true}
      toggler={toggler}
    >
      <form>
        <div className="flex flex-col gap-6">
          <div>
            <div className="space-y-4">
              <Textarea
                label="Presenting Complaint"
                placeholder="Presenting Complaint"
              />
              <Textarea
                label="History of Presenting Complaint"
                placeholder="History of Presenting Complaint"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-secondaryColor font-poppins text-xl font-medium">
              HIV & EMTCT
            </h1>
            <Select label="HIV Status">
              <option value="">+VE</option>
              <option value="">-VE</option>
              <option value="">Exposed infant</option>
              <option value="">Unknown</option>
            </Select>

            <Select label="Recentrly Types">
              <option value="">Recent</option>
              <option value="">Long Term</option>
              <option value="">Unknown</option>
            </Select>

            <DateInput
              onChange={() => {}}
              name="dkas"
              label="Recently Test Date"
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-secondaryColor font-poppins text-xl font-medium">
              HIV Risk Screening
            </h1>
            {hivRiskScanningArr.map((text, index) => (
              <Select key={index} label={text}>
                <option value="">Yes</option>
                <option value="">No</option>
              </Select>
            ))}
          </div>

          <div className="space-y-4">
            <h1 className="text-secondaryColor font-poppins text-xl font-medium">
              TB Screening
            </h1>
            <Select label="HIV Status">
              <option value="">Suspected TB</option>
              <option value="">Known TB</option>
              <option value="">TB Diagnosed</option>
              <option value="">No TB</option>
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
      </form>
    </DefaultOpenModal>
  );
};

export default PresentingComplaints;
