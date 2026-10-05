import type { IconProps } from "../../shared/types";

export function CruiseShipIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M2 15h20l-5 5H7Zm3 0v-4h14v4M9 11V7h7v4m-5-4V3h3v4"/>
    </svg>
  );
}
