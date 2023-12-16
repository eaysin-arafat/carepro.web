import { cn } from "@/utilities/cn";
import React, { ReactElement, ReactNode } from "react";
import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom'; // Assuming you are using react-router

type ButtonProps = {
  type: "link" | "button";
  title: string;
  link?: string;
  style?: React.CSSProperties;
  className?: string;
  onClick?: () => void;
  icon?: ReactNode;
  disabled?: boolean;
};

const BackButton = ({
  type,
  title,
  link,
  style,
  className,
  onClick,
  icon,
  disabled = false,
}: ButtonProps): ReactElement => {
  switch (type) {
    case "link":
      return (
        <Link
          to={link!}
          style={style}
          className={cn(
            "btn w-40  border-2 border-borderColor text-base xs:text-[18px]",
            className,
            {
              "disabled_bg cursor-not-allowed  text-base xs:text-[18px]":
                disabled,
              " bg-whiteColor hover:bg-borderColor text-blackColor  text-base xs:text-[18px]":
                !disabled,
            }
          )}
        >
          {icon} {title}
        </Link>
      );

    case "button":
      return (
        <button
          className={cn(
            "btn w-40  border-2 border-borderColor dark:text-black  text-base xs:text-[18px]",
            className,
            {
              "disabled_bg cursor-not-allowed  text-base xs:text-[18px]":
                disabled,
              " bg-whiteColor hover:bg-borderColor text-blackColor  text-base xs:text-[18px]":
                !disabled,
            }
          )}
          type="button"
          style={style}
          onClick={onClick}
        >
          {icon} {title}
        </button>
      );

    default:
      throw new Error("Invalid button type");
  }
};

export default BackButton;
