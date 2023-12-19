import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import SubmitButton from "@/components/core/buttons/SubmitButton";
import Input from "@/components/core/form-elements/Input";
import Select from "@/components/core/form-elements/Select";
import Textarea from "@/components/core/form-elements/Textarea";
import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import ReviewOfSystemCardItem from "@/components/review-of-systems/CardItem";
import { useReadChiefComplaintByClientQuery } from "@/features/chief-complaint/chief-complaint-api";
import ReviewOfSystemCardGroup from "@/pages/anc-referrals/form-template/ReviewOfSystemCardGroup";
import PastEncounters from "@/pages/chief-complaints/create/PastEncounters";
import { useEffect, useState } from "react";
import { Loader, PlusCircle } from "react-feather";

const eyeScoreOption = [
  { value: "No response (1 point)", points: 1 },
  { value: "To pain only (not applied to face) (2 points)", points: 2 },
  { value: "To verbal stimuli, command, speech (3 points)", points: 3 },
  {
    value: "Spontaneous - open with blanking at baseline (4 points)",
    points: 4,
  },
];

const verbalScoreOption = [
  { value: "No response (1 point)", points: 1 },
  { value: "Incomprehensible speech (2 points)", points: 2 },
  { value: "Inappropriate words (3 points)", points: 3 },
  {
    value: "Confused conversation, but able to answer questions (4 points)",
    points: 4,
  },
  { value: "Oriented (5 points)", points: 5 },
];

const motorScoreOption = [
  { value: "No response (1 point)", points: 1 },
  { value: "Extension response in respons to pain (2 points)", points: 2 },
  { value: "Flexion in response to pain (3 points)", points: 3 },
  {
    value: "Withdraws in response to pain (4 points)",
    points: 4,
  },
  { value: "Purposeful movement to painful stimulus (5 points)", points: 5 },
  { value: "Obeys commands for movement (6 points)", points: 5 },
];

const GlasgowComaScale = ({ toggler = () => {} }) => {
  const [eyeSelectedOption, setEyeSelectedOption] = useState(null);
  const [verbalSelectedOption, setVerbalEyeSelectedOption] = useState(null);
  const [motorSelectedOption, setMotorEyeSelectedOption] = useState(null);

  const [eyePoints, setEyePoints] = useState(0);
  const [verbalPoints, setVerbalPoints] = useState(0);
  const [motorPoints, setMotorPoints] = useState(0);
  const [total, setTotal] = useState(0);

  const { data, isLoading, status } = useReadChiefComplaintByClientQuery(
    "a1497272-3783-46f6-922a-08dbd06dc4d8"
  );

  const handleEyeSelect = (event) => {
    const { value } = event.target;
    setEyeSelectedOption(value);

    const selectedOption = eyeScoreOption.find((eye) => eye.value === value);

    setEyePoints(selectedOption.points);
  };

  const handleVerbalSelect = (event) => {
    const { value } = event.target;
    setVerbalEyeSelectedOption(value);

    const selectedOption = verbalScoreOption.find((eye) => eye.value === value);

    setVerbalPoints(selectedOption.points);
  };

  const handleMotorSelect = (event) => {
    const { value } = event.target;
    setMotorEyeSelectedOption(value);

    const selectedOption = motorScoreOption.find((eye) => eye.value === value);

    setMotorPoints(selectedOption.points);
  };

  useEffect(() => {
    setTotal(eyePoints + verbalPoints + motorPoints);
  }, [eyePoints, motorPoints, verbalPoints]);

  return (
    <DefaultOpenModal
      isShow={true}
      title="Glasgow Coma Scale"
      toggler={toggler}
    >
      <form>
        <div>
          <div className="flex flex-col gap-3">
            <Select
              label="Eye Score"
              value={eyeSelectedOption}
              onChange={handleEyeSelect}
              required
            >
              {eyeScoreOption.map((eye, index) => (
                <option key={index} value={eye.value}>
                  {eye.value}
                </option>
              ))}
            </Select>

            <Select
              label="Verbal Score"
              value={verbalSelectedOption}
              onChange={handleVerbalSelect}
              required
            >
              {verbalScoreOption.map((verbal, index) => (
                <option key={index} value={verbal.value}>
                  {verbal.value}
                </option>
              ))}
            </Select>

            <Select
              label="Motor Score"
              value={motorSelectedOption}
              onChange={handleMotorSelect}
              required
            >
              {motorScoreOption.map((motor) => (
                <option>{motor.value}</option>
              ))}
            </Select>

            <Input label="Score" type="text" readOnly value={total} required />

            <Textarea label="Findings" placeholder="Enter findings" required />

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

export default GlasgowComaScale;
