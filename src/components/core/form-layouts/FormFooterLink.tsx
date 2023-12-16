import { Link } from "react-router-dom";

type FormFooterLinkType = {
  question: string;
  link: string;
  btnText: string;
};

export const FormFooterLink = ({
  question,
  btnText,
  link,
}: FormFooterLinkType) => {
  return (
    <div className="border-t border-gray-200 mt-8 mb[-10px] max-w-[380px] w-full mx-auto">
      <div className=" text-base">
        <div className="pt-6 -mb-2 flex justify-center gap-2">
          <div className="text-textColor">{question}</div>
          <div className="leading-[26px] text-dodgerblue">
            <Link to={link} className="text-primaryColor">
              {btnText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
