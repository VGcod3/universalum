import React from "react";
import { Icon, type IconProps } from "./Icon";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const ArrowLeftIcon = ArrowLeft;

export const ArrowRightIcon = ArrowRight;

export const ChevronDownIcon = React.forwardRef<
  SVGSVGElement,
  Omit<IconProps, "children">
>((props, ref) => (
  <Icon ref={ref} {...props}>
    <path
      d="M6 9L12 15L18 9"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </Icon>
));

export const CheckIcon = React.forwardRef<
  SVGSVGElement,
  Omit<IconProps, "children">
>((props, ref) => (
  <Icon ref={ref} {...props}>
    <path
      d="M20 6L9 17L4 12"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </Icon>
));

export const PlusIcon = React.forwardRef<
  SVGSVGElement,
  Omit<IconProps, "children">
>((props, ref) => (
  <Icon ref={ref} {...props}>
    <path
      d="M12 5V19"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M5 12H19"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      fill="none"
    />
  </Icon>
));

ArrowLeftIcon.displayName = "ArrowLeftIcon";
ArrowRightIcon.displayName = "ArrowRightIcon";
ChevronDownIcon.displayName = "ChevronDownIcon";
CheckIcon.displayName = "CheckIcon";
PlusIcon.displayName = "PlusIcon";
